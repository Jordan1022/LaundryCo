import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimiter } from '../../../../lib/rateLimiter';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const rateLimitResult = rateLimiter.isAllowed(request);
        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                {
                    error: 'Too many requests. Please try again later.',
                    retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
                        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
                        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
                    },
                }
            );
        }

        const { phone, name, smsOptIn, program } = await request.json();

        if (!phone || !smsOptIn) {
            return NextResponse.json(
                { error: 'Phone and affirmative consent are required' },
                { status: 400 }
            );
        }

        const phonePattern = /^[+]?[-()\s0-9]{7,20}$/;
        if (!phonePattern.test(phone)) {
            return NextResponse.json(
                { error: 'Invalid phone format' },
                { status: 400 }
            );
        }

        const consentTimestamp = new Date().toISOString();
        const ipAddress = request.headers.get('x-forwarded-for') || request.ip || 'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';

        const { data, error } = await resend.emails.send({
            from: 'Laundry Co <support@laundryco.store>',
            to: ['hello@laundryco.com'],
            subject: 'New SMS opt-in',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New SMS Opt-In</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Program:</strong> ${program || 'Laundry Co Text Updates'}</p>
            <p><strong>Name:</strong> ${name || '—'}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Opt-In:</strong> ${smsOptIn ? 'Yes' : 'No'}</p>
            <p><strong>Consent Timestamp (UTC):</strong> ${consentTimestamp}</p>
            <p><strong>IP:</strong> ${ipAddress}</p>
            <p><strong>User-Agent:</strong> ${userAgent}</p>
          </div>
          <p style="color: #666; font-size: 14px;">Record generated from /sms opt-in form.</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: 'Failed to email consent record' }, { status: 500 });
        }

        return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
    } catch (error) {
        console.error('SMS opt-in error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


