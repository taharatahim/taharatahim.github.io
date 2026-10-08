# Taharat Ahim Bot

Bilingual static landing page for Taharat Ahim Bot, a project of Shevet Ahim.

## GitHub Pages

This site is built from static files in the repository root. A GitHub Actions workflow in `.github/workflows/pages.yml` packages only the site assets (no build tool or runtime dependency) and deploys them on every push to `main`; it can also be started manually. The published site is available at [https://taharatahim.github.io/](https://taharatahim.github.io/). Before the first deployment, a repository administrator must open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow cannot enable Pages itself with the default `GITHUB_TOKEN`; doing so automatically would require an administrator-managed personal access token or GitHub App token.

The site can also be previewed locally by opening `index.html` in a browser or serving this directory with any static HTTP server.

## WhatsApp contact number

To show a public **Chat with us on WhatsApp / Escríbenos por WhatsApp** link, edit `config.js` and set `whatsappNumber` to the approved public business number in international digits-only format, including the country code but omitting `+` and spaces (for example, `50760000000`). The page displays the number and builds a `https://wa.me/<number>` link only when the value contains 8–15 digits. It stays hidden if the setting is empty or invalid. This configuration file is public website content—never put access tokens, credentials, or a private number in it.
