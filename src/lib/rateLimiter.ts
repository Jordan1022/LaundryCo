import { RATE_LIMIT_CONFIG } from './rateLimitConfig';

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

class RateLimiter {
    private store = new Map<string, RateLimitEntry>();
    private cleanupInterval: NodeJS.Timeout;

    constructor(
        private windowMs: number = RATE_LIMIT_CONFIG.WINDOW_MS,
        private maxRequests: number = RATE_LIMIT_CONFIG.MAX_REQUESTS,
        private cleanupIntervalMs: number = RATE_LIMIT_CONFIG.CLEANUP_INTERVAL_MS
    ) {
        // Start cleanup interval to prevent memory leaks
        this.cleanupInterval = setInterval(() => {
            this.cleanup();
        }, this.cleanupIntervalMs);
    }

    private cleanup() {
        const now = Date.now();
        for (const [key, entry] of this.store.entries()) {
            if (entry.resetTime <= now) {
                this.store.delete(key);
            }
        }
    }

    private getClientIP(request: Request): string {
        // Try to get real IP from headers (for production with proxy)
        const forwarded = request.headers.get('x-forwarded-for');
        const realIP = request.headers.get('x-real-ip');
        const cfConnectingIP = request.headers.get('cf-connecting-ip'); // Cloudflare

        if (cfConnectingIP) return cfConnectingIP;
        if (realIP) return realIP;
        if (forwarded) return forwarded.split(',')[0].trim();

        // Fallback for development
        return 'unknown';
    }

    isAllowed(request: Request): { allowed: boolean; remaining: number; resetTime: number } {
        const clientIP = this.getClientIP(request);
        const now = Date.now();
        const resetTime = now + this.windowMs;

        const entry = this.store.get(clientIP);

        if (!entry || entry.resetTime <= now) {
            // First request or window expired
            this.store.set(clientIP, {
                count: 1,
                resetTime,
            });
            return {
                allowed: true,
                remaining: this.maxRequests - 1,
                resetTime,
            };
        }

        if (entry.count >= this.maxRequests) {
            // Rate limit exceeded
            return {
                allowed: false,
                remaining: 0,
                resetTime: entry.resetTime,
            };
        }

        // Increment count
        entry.count++;
        return {
            allowed: true,
            remaining: this.maxRequests - entry.count,
            resetTime: entry.resetTime,
        };
    }

    // Clean up resources
    destroy() {
        if (this.cleanupInterval) {
            clearInterval(this.cleanupInterval);
        }
    }
}

// Create a singleton instance
const rateLimiter = new RateLimiter();

export { rateLimiter };
