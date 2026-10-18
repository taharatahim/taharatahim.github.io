## Why

People need public instructions for requesting deletion of data held by Taharat Ahim Bot and an accurate explanation of what the project can and cannot delete. This supports transparency without promising control over WhatsApp messages or devices outside the project's systems.

## What Changes

- Publish a dedicated privacy and data-deletion page in English and Spanish.
- Explain how to request deletion through the WhatsApp bot and that requests are blocked while questions or envelope requests remain active.
- Explain that deletion covers data stored in the bot's database, not messages already delivered by WhatsApp or copies and notifications on other people's devices.
- Describe that application logs mask phone numbers to the last four digits, omit message content, and are retained for 30 days.
- Link the page from the landing page and include it in the GitHub Pages deployment artifact.

## Capabilities

### New Capabilities
- `privacy-and-data-deletion`: Public bilingual privacy information and user-facing database deletion instructions.

### Modified Capabilities
- `public-identity`: Add a discoverable privacy and data-deletion link to the public landing page.

## Impact

- New static privacy page and bilingual navigation/link in `index.html`.
- GitHub Pages artifact contents in `.github/workflows/pages.yml`.
- OpenSpec public identity requirements and site verification tasks.
