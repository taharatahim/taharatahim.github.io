## Context

The public site is a static bilingual landing page hosted on GitHub Pages. Its deployment workflow explicitly copies a fixed list of site assets into the Pages artifact. The current page links to Shevet Ahim but has no privacy notice or data-deletion instructions. The bot handles deletion through WhatsApp, blocks it while a question or envelope request involving the requester remains active, masks phone numbers in application logs to the last four digits, omits message content, and configures 30-day CloudWatch retention.

The public copy must describe only these agreed behaviors. It must distinguish data held in the bot's database from WhatsApp-delivered messages, messages and notifications on other people's devices, and records held by external providers.

## Goals / Non-Goals

**Goals:**
- Publish a dedicated English/Spanish privacy and data-deletion page at a stable URL.
- Explain how to request deletion through WhatsApp and why an active case temporarily blocks deletion.
- State the precise scope and limits of database deletion and accurately describe logging safeguards and retention.
- Make the page discoverable from the landing page and deploy it with GitHub Pages.

**Non-Goals:**
- Provide a web deletion form, accounts, or a second deletion workflow.
- Make legal claims about jurisdiction, lawful basis, regulatory compliance, or absolute confidentiality without organizational approval.
- Promise removal of WhatsApp messages, notifications, device copies, screenshots, or third-party data.
- Claim that masked logs cannot identify a person or that past logs are erased immediately after a database deletion request.

## Decisions

### Add a standalone static privacy page

Create a dedicated `privacy.html` page with English and Spanish content consistent with the landing page language-switching approach and a stable public URL. Add an explicit link from the landing page and include the new asset in the Pages workflow's copy list.

Alternative considered: place all privacy copy in the landing page. Rejected because a dedicated URL is easier to provide in Meta app configuration and easier to maintain as a clear notice.

### Explain the WhatsApp deletion flow and active-case block

Tell users to send the documented deletion command to the bot. Explain that it first checks for open questions or envelope requests, and will not delete data while any participating case remains unresolved; users may retry after resolution. Explain that eligible deletion requires confirmation and applies to the bot database.

Alternative considered: imply that deletion is immediate on command. Rejected because active cases intentionally prevent deletion and a confirmation step is required.

### State external-message and device limits plainly

Explicitly state that the project cannot control or delete messages and notifications WhatsApp has already delivered, or copies, screenshots, backups, and records on devices or services outside the project's control. Avoid wording that implies the project can erase data from WhatsApp or recipients' phones.

Alternative considered: broad assurance that all personal data is deleted. Rejected as inaccurate and beyond the bot's technical control.

### Publish only verified operational privacy details

Describe that bot application logs omit message content, mask phone numbers to their last four digits when operationally necessary, and are retained for 30 days. Clarify that database deletion does not synchronously erase historical CloudWatch log entries, which expire according to the retention period. Keep claims about access, encryption, legal basis, or other organizational practices out until confirmed and approved.

Alternative considered: omit logs entirely. Rejected because logging is part of the actual data lifecycle and relevant to realistic deletion expectations.

## Risks / Trade-offs

- **[Risk] Privacy copy could be interpreted as a complete legal policy** → Label factual service practices clearly and avoid unverified legal or organizational assurances; request organizational/legal review before launch.
- **[Risk] The WhatsApp command syntax or user flow changes independently** → Keep the page aligned with the backend capability and include command wording in implementation verification.
- **[Risk] The stable page is absent from the deployed artifact** → Add a deployment check or verify the public URL after Pages deployment.
- **[Risk] “Last four digits” still allows partial recognition and old logs persist temporarily** → State the exact masking and 30-day retention behavior without claiming full anonymity or immediate log deletion.

## Migration Plan

1. Add the bilingual privacy page using verified facts and the agreed deletion flow.
2. Link it from both language states on the existing landing page and include it in `.github/workflows/pages.yml`.
3. Verify page links, keyboard access, language parity, mobile rendering, and exact public URL in the Pages artifact.
4. Publish and provide the URL for Meta app privacy configuration after organizational review.

Rollback by reverting the static page, link, and workflow change. The bot deletion behavior remains in the separate backend repository.

## Open Questions

- Organizational/legal review of the published notice is required before treating it as an approved legal privacy policy; no implementation detail remains unresolved.
