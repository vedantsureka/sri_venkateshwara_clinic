# Sri Venkateshwara Clinic — Next.js Website

Responsive six-page clinic website with appointment enquiry API, optional Supabase persistence, an admin preview, and local SEO. Includes extra diabetes information, privacy and terms pages.

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Build with `npm run build` and run `npm start`.

## Production setup — required before using the enquiry form

1. Create a Supabase project and run `supabase.sql` in its SQL editor.
2. Fill `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` in private deployment environment settings. **Never expose the service-role key to the browser or commit it.**
3. Set `NEXT_PUBLIC_SITE_URL` to the real HTTPS domain. Deploy to Vercel or another Next.js-capable host.
4. Create clinic admin users via Supabase Auth and insert their user IDs into `public.admin_users`. Use `/admin` to sign in and view enquiries. Enable MFA for admin accounts and restrict who can provision accounts.
5. Use production protections: CDN/WAF rate limiting on `/api/appointments`, anti-bot CAPTCHA such as Turnstile, request monitoring, backups, log redaction, retention/deletion schedule, secure-domain config, and a reviewed patient privacy policy.
6. Have clinic management verify doctors, credentials, consultation availability, correct map pin, hours, photography rights, Google review link, and all legal text. Replace the sample medical photos with licensed clinic imagery where possible.

**Important:** The form saves real submissions only when Supabase is configured successfully. Otherwise it returns an error prompting the patient to call; it NEVER shows a false success. The backend and admin access are starting implementations and need security/privacy review before handling real patient enquiries.

## Current limitations / rollout checklist

- Supplied Google rating 4.9 / 82 reviews is a **snapshot**, not live. Patient names and dates have not been invented.
- The map uses address-based Google Maps search/embed. Clinic management should verify the actual pin and, ideally, replace it with a verified Place ID.
- A Google business profile's verified review page URL was not supplied, so the reviews link currently opens the Maps search, not a fabricated direct review URL.
- Hours are deliberately displayed as **Call to confirm**. An editable hours draft exists in the admin view, but CMS edits are not yet wired to the public pages.
- The doctor profile stays hidden until actual name, registration, qualifications and clinical experience have been verified.
- The admin view currently displays recent enquiries and allows draft hours changes; editing all content, managing photos and statuses would require additional functionality.
- The form includes a honeypot for basic bot detection, but rate limiting and fully working CAPTCHA must be implemented before a high-traffic public launch.
- Privacy policy and terms are draft text and need clinic approval and review under applicable privacy rules.
- No WhatsApp link is shown: phone/WhatsApp availability has not been verified.
- External professional-looking stock healthcare images are *illustrative only* and do not depict the clinic or its staff. Check licenses and replace in production.

## Pages

`/` Home · `/about` About · `/services` Medical Services · `/diabetes-care` Diabetes Care Enquiries · `/reviews-faqs` Reviews & FAQs · `/contact` Contact and Appointment Enquiry · `/admin` Management Preview · `/privacy` · `/terms`

## Technical stack

Next.js App Router, React, TypeScript, Tailwind, Lucide, Supabase (optional but needed to accept enquiries), Zod validation. No fictional medical credentials, confirmed appointment promises, or invented consultation schedule.
