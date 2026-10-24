# ShiftHead Founding Sponsor Funnel — Preview

A responsive, framework-free landing page prototype for ShiftHead's proposed founding sponsor program. Built as an independent handoff for integration into the existing ShiftHead website.

## Preview

Open `index.html` in any browser. No build tools or dependencies are required.

## Contents

- `index.html` — semantic landing page, three proposed tiers, giveaway link, inquiry form, FAQ
- `styles.css` — responsive styling inspired by ShiftHead's dark/navy and orange visual direction
- `script.js` — package selection and **preview-only** mailto inquiry fallback

## IMPORTANT: not production-ready

- Pricing ($49 / $99 / $249) and benefits are proposals, not verified active offerings.
- The form **does not submit to a server or GHL**. It opens a prefilled email to `team@shiftheadapp.com` and depends on the visitor's email application. Verify this mailbox before deployment.
- Before public launch, replace the mailto fallback with a secure GHL form embed or server-side endpoint. Configure contact consent, privacy notice, validation, spam prevention, notifications, tags, and pipeline stage.
- Confirm that sponsor listing, social placements, referral tracking, reporting, and in-app ad inventory can actually be fulfilled before taking payments or promising them.
- No checkout, lead guarantees, third-party lead sharing, or analytics are implemented.
- Confirm final brand assets, legal copy, privacy policy, accessibility, and hosting details with the site owner.

## Suggested GHL fields and tags

Fields: Business name, Contact name, Email, Interested package, Notes, Consent timestamp, Source.

Suggested tags: `sh-sponsor-inquiry`, `sh-sponsor-starter`, `sh-sponsor-growth`, `sh-sponsor-premium`, `sh-giveaway-interest`.

Use existing tags/pipeline conventions when integrating; do not duplicate workflows.

## Integration options

1. Port the HTML/CSS into Casey's existing framework and keep the page under `shiftheadapp.com` (preferred).
2. Host independently on an approved subdomain, linking from the main site.
3. Use GHL only for the secure form, CRM and workflow side.

This repository can be shared privately with Casey for review and integration. It does not modify his existing website.
