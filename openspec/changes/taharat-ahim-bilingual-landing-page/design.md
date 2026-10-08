## Context

The `taharatahim.github.io` repository is dedicated to the public landing page; the bot implementation lives in a separate repository. The page exists primarily to establish a clear public identity for Taharat Ahim Bot during Meta's WhatsApp number review and to explain that it is a project of Shevet Ahim. It must serve visitors in both English and Spanish and accurately describe two workflows: halakhic questions are routed to rabbis, and coordination is provided for fabrics or garments submitted for family-purity review.

## Goals / Non-Goals

**Goals:**
- Publish a small, fast, responsive public site using GitHub Pages.
- Clearly identify the service and its relationship to Shevet Ahim, linking to `https://shevetahim.com/`.
- Give English- and Spanish-speaking visitors equivalent, understandable information about the two services and the way a request proceeds.
- Keep public claims factual, especially about privacy, religious advice, availability, and outcomes.

**Non-Goals:**
- Implement, modify, or integrate with the WhatsApp bot backend.
- Provide a chatbot, user account, request form, or administrative interface.
- Make the landing page a source of halakhic rulings.
- Collect visitor data or add analytics unless explicitly approved later.

## Decisions

### Static, framework-free site

Use browser-native static assets (HTML, CSS, and only the JavaScript needed for language selection). The repository has no existing application stack, and the page does not need server-side behavior. This avoids introducing build dependencies and makes the site easy to host and inspect as a GitHub Pages project site/root site.

Alternative considered: introduce a frontend framework and bundler. This adds setup and deployment complexity without helping a single informational page.

### One page with an explicit language switch

Present English and Spanish as equivalent versions in one page, with a visible, keyboard-accessible language control. Preserve the selected language for the current visit and expose the correct document language to assistive technology. Do not rely on automatic machine translation.

Alternative considered: separate language URLs. These can help with search indexing, but introduce duplicated pages and routing complexity; a single page is adequate for this scope.

### Optional WhatsApp contact uses a separate public config file

Store the optional public WhatsApp contact number as digits-only international format in a small `config.js` file, loaded before the site's main script and included in the GitHub Pages artifact. Keep the default value empty. The page validates the value before constructing a `wa.me` URL, displays the number and bilingual chat link only when valid, and remains usable without it. The number is public website content, not a secret; do not place credentials or API tokens in this file.

Alternative considered: replace a placeholder directly in the HTML or add a build-time secret. Editing one configuration value without changing markup, without adding a build system, and without pretending the public number is secret best fits this static site.

### Organization affiliation and factual service copy

Use “A project of Shevet Ahim” / “Un proyecto de Shevet Ahim” and link directly to the official community site. Explain that rabbis receive and answer halakhic questions, while the bot helps coordinate the submission and pickup of fabrics or garments for review related to family purity. Do not imply the bot itself provides religious rulings.

Alternative considered: describing the project as operated or officially endorsed by Shevet Ahim. The user approved “a project of,” which is the chosen, appropriately bounded wording.

### Privacy and contact claims require verified information

Do not invent data-handling practices, confidentiality guarantees, response times, contact details, or rabbinic credentials. Provide a contact route through the official Shevet Ahim website and include privacy information only to the extent it is confirmed by the project/organization before publication. The page itself should not add forms, cookies, or analytics by default.

## Risks / Trade-offs

- **[Risk] Public wording may promise more privacy than the service can ensure** → Keep claims limited to verified practices; confirm the approved privacy language and contact path before launch.
- **[Risk] “Sobre” or “family purity” may be unclear to English-speaking visitors** → Explicitly say fabrics or garments are submitted for review related to family purity; avoid unexplained local shorthand.
- **[Risk] Bilingual copy drifts in meaning** → Treat translations as equivalent content and review both language versions together when changing service descriptions.
- **[Risk] GitHub Pages publication settings may not be configured** → Verify the repository's Pages source and public URL during implementation/deployment.
- **[Risk] An invalid or private number could be published as the public contact** → Keep configuration empty by default, validate the international digits-only format, and document that only the approved public business number belongs there.
- **[Trade-off] Single-page language switching offers less URL-level language indexing** → Prefer the simplest maintainable site for this narrowly scoped trust/identity purpose.

## Migration Plan

There is no existing site to migrate. Add the static site and configure GitHub Pages to publish it from the repository's default branch/root (or an equivalent standard Pages configuration). Verify the public URL, both language views, and the external Shevet Ahim link. Rollback by reverting the site commit or disabling Pages publication; the separate bot backend is unaffected.

## Open Questions

- Which exact privacy notice or approved privacy wording should be linked/published, and what practices can it accurately describe?
- Should the site use the Shevet Ahim logo, and is its use approved for this project?
- Should the English term remain “family purity,” or does the organization prefer another established translation?
