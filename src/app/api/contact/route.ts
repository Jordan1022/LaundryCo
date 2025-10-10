import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimiter } from '../../../lib/rateLimiter';
import { SPAM_PATTERNS, VALIDATION_RULES } from '../../../lib/rateLimitConfig';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        // Check rate limit first
        const rateLimitResult = rateLimiter.isAllowed(request);

        if (!rateLimitResult.allowed) {
            return NextResponse.json(
                {
                    error: 'Too many requests. Please try again later.',
                    retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)
                },
                {
                    status: 429,
                    headers: {
                        'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
                        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
                        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
                    }
                }
            );
        }

        const { name, email, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate field lengths and format
        if (name.length > VALIDATION_RULES.MAX_NAME_LENGTH) {
            return NextResponse.json(
                { error: 'Name is too long' },
                { status: 400 }
            );
        }

        if (message.length < VALIDATION_RULES.MIN_MESSAGE_LENGTH) {
            return NextResponse.json(
                { error: 'Message is too short' },
                { status: 400 }
            );
        }

        if (message.length > VALIDATION_RULES.MAX_MESSAGE_LENGTH) {
            return NextResponse.json(
                { error: 'Message is too long' },
                { status: 400 }
            );
        }

        if (!VALIDATION_RULES.EMAIL_REGEX.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Spam detection
        const textToCheck = `${name} ${email} ${message}`.toLowerCase();
        const isSuspicious = SPAM_PATTERNS.some(pattern => pattern.test(textToCheck));

        if (isSuspicious) {
            console.log('Suspicious contact form submission detected:', {
                name,
                email,
                message: message.substring(0, 100),
                timestamp: new Date().toISOString()
            });
            return NextResponse.json(
                { error: 'Message appears to be spam and was blocked.' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Laundry Co <support@laundryco.store>', // Using verified email for testing
            to: ['hello@laundryco.com'], // Your business email to receive contact form submissions
            subject: `New contact form submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from the Laundry Co contact form.
          </p>
        </div>
      `,
            replyTo: email, // Allow replying directly to the customer
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Email sent successfully', id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
