# QRS Technologies — Website Rebrand & Platform Migration Plan

**Status:** Foundation implemented locally on September 22, 2026; the purple UI recamp, project capability section, and five-phase approach experience were added on September 25, 2026. Production accounts, final brand assets, and QRS-approved public contact details are still required before deployment.

### Implementation status

Completed in the repository:

- QRS design tokens, responsive service-only homepage, provisional QRS wordmark, QRS metadata, and QRS Instagram profile.
- Central public QRS contact/social configuration in `frontend/src/config/site.ts`; no personal Digital Solutions contact details remain in visitor-facing UI.
- Removal of the software tools/store, cart, checkout, payment UI, reviews, personal project assets, tool assets, and their routes. An abstract QRS "Our projects" capability section is now included; it contains no personal client, portfolio, or case-study material.
- Purple design tokens applied across the homepage, service pages, booking form, legal views, 404 view, and shared transparent headers. The homepage now includes the five-phase QRS approach interaction and a projects section after services.
- QRS contact form copy, legal-page identity, Resend email template/subject, health service label, package names, and exact CORS enforcement.
- Frontend and backend linting, type checks, tests, and production builds passed.

Still blocked on QRS-owned external information/accounts:

- Approved QRS logo/brand assets, final colours, service copy, contact email/phone/WhatsApp, and remaining social URLs.
- QRS-owned PostgreSQL database, Vercel projects, domain/DNS configuration, and Resend account/API key/verified sender domain.

**Objective:** Turn the existing Digital Solutions website into an independent QRS Technologies website, with QRS-owned branding, contact details, social accounts, database access, deployment configuration, and Resend email delivery. The existing Digital Solutions setup must remain recoverable and must not receive QRS leads after launch.

**Confirmed scope exclusions:** QRS will not include a software-tools/store section, checkout flow, payment gateway, client portfolio, case studies, or personal client work at this stage. All of those routes, navigation links, calls-to-action, images, and copy will be removed or kept inaccessible from the QRS release. The homepage may include an abstract "Our projects" service-capability section that does not disclose client work.

## 1. Planning findings

### Existing application

- The website is a Next.js frontend in `frontend/`; the contact API is an independent Express/TypeScript backend in `backend/`.
- Contact requests are validated, stored in PostgreSQL, then sent as a notification through Resend. A Resend failure does **not** discard the saved lead.
- The frontend calls the backend through `NEXT_PUBLIC_API_URL`; the backend uses `DATABASE_URL`, `RESEND_API_KEY`, `ADMIN_EMAIL`, `EMAIL_FROM`, and `CORS_ORIGINS`.
- Current Digital Solutions contact information and social links are embedded in the footer and booking page. The present email service and HTML email template also contain Digital Solutions text.
- Branding is distributed across the logo component, page metadata, content data, legal pages, service pages, testimonials, images, and styles. The current styles use many hard-coded colours, so a safe rebrand requires introducing semantic QRS design tokens rather than a global search-and-replace.

### Brand reference limitation

The provided Instagram profile is the correct starting reference: `@qrstechnologies_pvt.ltd`. It could not be loaded automatically during planning because Instagram returned a rate-limit response. Public web search did not identify a reliable official QRS profile or brand guide. Therefore, no colour, service, claim, client result, or logo will be assumed from unrelated search results.

Before design begins, please provide screenshots of the profile/posts or the original QRS logo and brand files. This prevents us from copying the wrong company identity.

## 2. Required QRS inputs

| Item | Needed for | Owner / decision needed |
| --- | --- | --- |
| Official QRS legal/display name and short tagline | Logo, metadata, legal pages, email sender | QRS |
| Logo source file (`SVG` preferred; PNG with transparent background acceptable) | Header, footer, favicon, emails, social sharing | QRS |
| Brand guide or 5–10 Instagram screenshots | Palette, typography, imagery, visual direction | QRS |
| Approved services and priority industries | Navigation, service pages, contact-form options | QRS |
| Approved website copy, team imagery and any approved testimonials | Homepage and trust sections | QRS |
| Final email address(es), phone/WhatsApp number(s), office address, business hours | Footer, contact page, structured data, emails | QRS |
| Official Instagram, LinkedIn, Facebook, YouTube and WhatsApp URLs | Footer and contact calls-to-action | QRS |
| QRS website domain and DNS access | Resend domain verification, Vercel deployment, email authentication | QRS |
| QRS-owned mailbox for receiving leads | `ADMIN_EMAIL` and test delivery | QRS |
| Decision: new QRS database (recommended) or explicitly approved shared database | Lead ownership and privacy separation | QRS |

**Do not send API keys, database passwords, or mailbox passwords in chat or commit them to the repository.** They will be entered only in QRS-controlled deployment environment variables.

## 3. Design strategy

### 3.1 Establish a QRS token layer first

We will centralize the visual system in CSS custom properties, then consume those variables in shared components and page styles. Exact values will be selected only after QRS assets are approved.

```css
:root {
  --qrs-color-brand: /* approved primary */;
  --qrs-color-brand-strong: /* accessible active state */;
  --qrs-color-accent: /* approved highlight */;
  --qrs-color-ink: /* main text / dark surfaces */;
  --qrs-color-surface: /* page background */;
  --qrs-color-surface-raised: /* cards / fields */;
  --qrs-color-text: /* normal text */;
  --qrs-color-text-muted: /* supporting text */;
  --qrs-color-border: /* dividers / fields */;
  --qrs-color-success: /* form success */;
  --qrs-color-danger: /* form error */;
  --qrs-font-display: /* headings */;
  --qrs-font-body: /* paragraphs and UI */;
  --qrs-radius-card: /* card language */;
  --qrs-shadow-card: /* elevation language */;
}
```

This gives QRS a maintainable palette: brand changes later become token updates instead of edits across dozens of CSS rules. Interactive, focus, error, and success states will meet WCAG AA contrast requirements.

### 3.2 Proposed visual direction — pending approval

Keep the current high-quality, responsive agency structure but make it recognizably QRS through the approved logo, colours, typography, image art direction, and copy. The visual system will be defined from actual QRS references; it will not reuse Digital Solutions' name, logo, claims, client quotes, contacts, personal social accounts, or personal project work.

The implementation will produce:

- A QRS-specific header, footer, favicon, browser theme colour, and metadata.
- A clear homepage story: what QRS does, who it serves, core services, process, approved trust messaging, and a QRS contact call-to-action.
- Service pages and contact form labels/options that match QRS's real offering.
- A coherent set of button, card, input, section, mobile-navigation, and empty/error/success states.
- Responsive layouts checked at mobile, tablet, laptop, and wide desktop sizes.

The QRS website will be a service-lead website only. It will not sell software, collect payments, display client projects, or contain checkout functionality in this release. Its abstract projects section will explain QRS capability areas without presenting private portfolio work.

## 4. Content and UI implementation scope

### Global brand replacement

1. Replace the inline Digital Solutions logo in `frontend/src/components/brand/Brand.tsx` with the approved QRS logo. Create a QRS favicon and social-share image from the approved mark.
2. Update `frontend/app/layout.tsx` metadata, page title template, description, theme colour, Open Graph data, and the site language if required.
3. Update public text in the header, homepage, footer, contact page, legal pages, 404 page, service hubs/details, reviews, and checkout/software pages where relevant.
4. Replace Digital Solutions email addresses, phone numbers, social links, personal LinkedIn, and personal Instagram/Facebook links in the footer and booking page with approved QRS contacts.
5. Review every current testimonial, client logo, percentage/result, certification, platform badge, image, project, and case study. Personal work and unapproved proof will be removed. The only project-related content will be an abstract QRS capability section without client identities, outcomes, or private work.
6. Update visible legal company details and effective dates in privacy policy and terms. Legal wording must be supplied or approved by QRS; this project will not invent legal claims.
7. Remove software tools/store routes, checkout UI, payment-related copy, cart/order data, and their entry points from navigation, homepage calls-to-action, footer links, sitemap/metadata, and deployment verification.

### Components and data to review

| Area | Primary current locations | Planned QRS change |
| --- | --- | --- |
| Brand/logo | `frontend/src/components/brand/Brand.tsx` | QRS mark, accessible label, scalable variants |
| Homepage story | `frontend/src/features/home/components/HomePage.tsx`, `data/content.ts` | QRS value proposition, approved proof and imagery |
| Header/services | `ServicePageHeader.tsx`, `data/services.ts`, service data files | QRS navigation and service catalogue |
| Contact journey | `BookDemoPage.tsx`, `contact.css`, footer | QRS labels, email, numbers, services and CTA copy |
| Footer/social | `AgencyFooter.tsx` | QRS links, contacts, copyright and legal identity |
| Metadata/legal | `frontend/app/layout.tsx`, legal components/pages | QRS SEO and approved legal data |
| Reviews/project pages | `reviewsData.ts`, project/service components | Remove personal/unapproved proof; allow only abstract QRS project-capability content |
| Software tools & checkout | `SoftwareToolsView.tsx`, `SoftwareCheckoutPage.tsx`, software routes/styles/data | Remove from the QRS site; no store, cart, checkout, or payment gateway |
| Browser/local UI names | `mailRateLimit.ts`, package/app health strings | QRS-safe internal identifiers where worthwhile; public text must be QRS |

Internal CSS class prefixes such as `ds-` and `vx-` do not affect visitors; they may be migrated gradually after the public rebrand is stable. We will not risk a visual regression merely to rename private selectors.

## 5. Backend, database, and Resend migration

### 5.1 Ownership and separation

QRS should have its own accounts and environment variables. The recommended launch architecture is:

```text
Visitor → QRS frontend domain → QRS backend URL → QRS PostgreSQL database
                                           └──→ QRS Resend account → QRS lead mailbox
```

The current Digital Solutions Resend account, personal mailboxes, and database credentials must not be reused for QRS production. This separates lead data, billing, permissions, and future handover.

This architecture is for contact-lead notifications only. It does **not** include a payment gateway, payment processing, checkout, orders, subscriptions, or customer billing.

### 5.2 Create the QRS Resend setup

1. Create a new Resend account owned by QRS, using a QRS-controlled admin mailbox and MFA. Add at least one recovery/admin user from QRS.
2. Add the QRS sending domain in Resend. Publish the Resend-provided DNS verification records with the QRS domain provider and wait for verification.
3. Configure a professional verified sender, for example `QRS Technologies <hello@qrs-domain>`. Do not use `onboarding@resend.dev` in production.
4. Create a new production API key in the QRS Resend account. Store it only as `RESEND_API_KEY` in the QRS backend deployment environment.
5. Choose the QRS-owned lead inbox or distribution list for `ADMIN_EMAIL`. Confirm who can read it and who receives notifications.
6. Update the email subject, sender name, reply-to behaviour, and `backend/src/templates/contact-email.ts` so the notification visibly belongs to QRS.
7. Send controlled test leads from a preview environment. Verify inbox delivery, reply-to address, spam placement, sender display, and Resend event logs before go-live.

### 5.3 Database and backend configuration

1. Provision a QRS-controlled PostgreSQL database (recommended) and use a new `DATABASE_URL`. Existing Digital Solutions lead data stays in its current database.
2. Review the existing `demo_requests` schema and apply the committed migration only to the QRS database after a backup/connection check. No production migration is run blindly.
3. In the QRS backend deployment, set:

   ```dotenv
   DATABASE_URL=<QRS-owned PostgreSQL URL>
   RESEND_API_KEY=<QRS-owned Resend API key>
   ADMIN_EMAIL=<QRS lead mailbox>
   EMAIL_FROM=QRS Technologies <hello@verified-qrs-domain>
   CORS_ORIGINS=https://<qrs-frontend-domain>
   ```

4. Deploy the backend under a QRS-owned Vercel project/account. Keep the Digital Solutions backend unchanged and independent.
5. Set `NEXT_PUBLIC_API_URL` in the QRS frontend project to the new QRS backend origin, then configure the exact QRS frontend origin in backend `CORS_ORIGINS`.
6. Update the health endpoint/service label and relevant backend package/project labels to QRS after the deployment architecture is confirmed.
7. Keep the current rate limit in place initially; review a shared rate-limit provider before a high-traffic launch because the present limiter is process-local.

## 6. Delivery phases and approval gates

| Phase | Work | Output / approval gate |
| --- | --- | --- |
| 0. Discovery | Receive required QRS inputs, audit all public Digital Solutions references, decide QRS service scope and ownership | Written content/contact inventory approved by QRS |
| 1. Brand system | Derive QRS tokens, typography, logo variants, icon/image guidance and a homepage visual direction | Token sheet and design direction approved |
| 2. Content map | Finalize navigation, homepage sections, service hierarchy, contact fields, trust messaging and legal replacements; confirm no client portfolio/store paths remain | Page/content map approved |
| 3. Frontend rebrand | Implement tokens, logo, copy, images, responsive components, metadata and pages; remove software-tools, checkout/payment and client-portfolio functionality | Preview deployment reviewed on desktop and mobile |
| 4. Backend migration | Create QRS Resend, QRS database and QRS deployment configuration; update template/sender configuration | Preview contact submission arrives in QRS inbox and persists only in QRS DB |
| 5. QA & release | Run lint, types, tests, builds, accessibility/SEO checks, link checks and end-to-end contact tests | Launch checklist signed off |
| 6. Go-live & handover | Map domain, monitor first submissions, document account owners and environment-variable names | QRS has full access and Digital Solutions path is unaffected |

## 7. Verification checklist

- [ ] No public `Digital Solutions` branding, personal contact details, or personal social links remain on the QRS site.
- [ ] QRS logo, favicon, metadata, title, description, Open Graph image, and theme colour are correct.
- [ ] All colours come from the approved QRS token system in primary shared UI paths.
- [ ] All buttons, keyboard focus rings, form errors, and text/background pairs meet contrast and usability requirements.
- [ ] Service names, contact form options, client proof, images, and claims have QRS approval.
- [ ] The QRS navigation, sitemap, footer, and homepage contain no software-tools/store, checkout, payment, project, portfolio, or case-study path.
- [ ] Software-tools and checkout routes cannot be reached from the QRS public release, and no payment gateway credentials or payment SDKs are configured.
- [ ] No personal projects, client assets, testimonials, results, or case-study content are published under QRS. The abstract project-capability section contains no client work.
- [ ] Links, phone numbers, WhatsApp link, email mailto links, and social profiles point to QRS-owned destinations.
- [ ] QRS frontend and backend are deployed independently from Digital Solutions and CORS allows only the intended QRS domain(s).
- [ ] QRS Resend sender domain is verified; a real QRS lead mailbox receives a test notification with the visitor's email as `Reply-To`.
- [ ] A valid test submission creates exactly one row in the QRS database; invalid and rate-limited submissions are rejected correctly.
- [ ] No API key, database URL, password, or Resend credential is committed to Git, visible in frontend code, or pasted into this document.
- [ ] `npm run check` passes for both frontend and backend, and a production build succeeds before DNS cutover.

## 8. Decisions needed before implementation

1. Confirm the official QRS name and upload/provide the logo plus 5–10 Instagram screenshots (or brand guide).
2. Provide final QRS email, phone/WhatsApp, social URLs, domain, and the inbox that should receive leads.
3. Confirm QRS's real service list and which existing pages/content should be retained, rewritten, or removed. Software tools/store, checkout/payment, client portfolio, and case studies are already marked for removal; the abstract QRS projects section is retained.
4. Confirm QRS will use a new QRS-owned PostgreSQL database (recommended) and QRS-owned Vercel/Resend accounts.
5. Approve the token-based visual direction after the QRS brand references are reviewed.

Once these decisions are supplied and this plan is approved, implementation can begin in the order above.
