# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Laundry Co is a Next.js 14 (App Router) marketing site for a neighborhood laundromat. Single service, no database, no Docker.

### Running the app

- Dev server: `npm run dev` (serves on `http://localhost:3000`)
- Lint: `npm run lint`
- See `package.json` scripts and `README.md` for full details.

### Key caveats

- The contact form (`/api/contact`) and SMS opt-in (`/api/sms/optin`) require a `RESEND_API_KEY` in `.env.local` to actually send emails. Without it the site renders and navigates fine, but form submissions return 500. The UI handles this gracefully with an error message.
- `.env.local` is gitignored. Copy `.env.example` to `.env.local` when setting up.
- No automated test suite exists in this repo; validation relies on lint and manual testing.
