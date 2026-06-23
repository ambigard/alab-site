# Directory Admin Setup

## What you need

Three values, all from your Supabase project:

1. **Project URL** — Supabase Dashboard → Settings → API → "Project URL"
2. **anon public key** — same page, under "Project API keys"
3. **service_role key** — same page, also under "Project API keys" —
   click "Reveal" to see it. **This key bypasses all security rules, so
   never share it or commit it to GitHub.**

Plus one you choose yourself:

4. **Admin password** — any password you want, used to protect the
   `/directory/admin` page. This is a simple gate, not a full login
   system — good enough for a single admin user, not meant for managing
   many accounts with different permission levels.

## Setting it up on Vercel

1. Go to your project on vercel.com → **Settings** → **Environment Variables**
2. Add these four variables (exact names matter):

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SUPABASE_URL` | your Project URL |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | your anon public key |
   | `SUPABASE_SERVICE_ROLE_KEY` | your service_role key |
   | `ADMIN_PASSWORD` | your chosen admin password |

3. Click **Save** for each
4. Redeploy the site (push any small change, or use Vercel's "Redeploy" button) — environment variables only take effect on a new deployment

## Using the admin page

Once deployed, go to `yoursite.vercel.app/directory/admin` and log in
with your admin password.

- **Pending** tab shows public submissions waiting for review
- **Approve** makes an entry visible on the public `/directory` page
- **Reject** keeps it hidden (it stays in the database for your records,
  just never shown publicly)
- **+ Add Entry Directly** lets you or Ashana add something that goes
  live immediately, skipping the review queue (useful for things you
  already know and trust)

## Security note

The admin password is sent with each request but isn't a full
authentication system — there's no session, no rate limiting, no
password reset flow. This is fine for a single trusted admin, but if you
ever want multiple people with different permission levels, or need
stronger security, that would be a future upgrade (Supabase has a full
auth system built in that we could add later).
