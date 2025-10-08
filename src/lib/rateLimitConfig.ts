// Rate limiting configuration
// Adjust these values based on your needs

export const RATE_LIMIT_CONFIG = {
    // Time window for rate limiting (in milliseconds)
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes

    // Maximum requests allowed per window per IP
    MAX_REQUESTS: 3, // 3 requests per 15 minutes

    // Cleanup interval for expired entries (in milliseconds)
    CLEANUP_INTERVAL_MS: 60 * 1000, // 1 minute
} as const;

// Spam detection patterns
export const SPAM_PATTERNS = [
    // URLs and link shorteners
    /(https?:\/\/)/gi,
    /(bit\.ly|tinyurl|goo\.gl|t\.co)/gi,

    // Common spam keywords
    /(viagra|cialis|casino|poker|lottery)/gi,
    /(free money|make money|earn \$|work from home)/gi,
    /(click here|buy now|limited time)/gi,

    // Cryptocurrency spam
    /(bitcoin|crypto|invest|trading)/gi,

    // Multiple repeated characters (common in spam)
    /(.)\1{4,}/gi, // 5 or more repeated characters
] as const;

// Additional validation rules
export const VALIDATION_RULES = {
    // Minimum message length
    MIN_MESSAGE_LENGTH: 10,

    // Maximum message length
    MAX_MESSAGE_LENGTH: 2000,

    // Maximum name length
    MAX_NAME_LENGTH: 100,

    // Email validation regex
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;
