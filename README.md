# Taharat Ahim Bot

Bilingual static landing page for Taharat Ahim Bot, a project of Shevet Ahim.

## GitHub Pages

This site is built from static files in the repository root. A GitHub Actions workflow in `.github/workflows/pages.yml` packages only the site assets (no build tool or runtime dependency) and deploys them on every push to `main`; it can also be started manually. Before the first deployment, a repository administrator must open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The workflow cannot enable Pages itself with the default `GITHUB_TOKEN`; doing so automatically would require an administrator-managed personal access token or GitHub App token. The repository name suggests the published URL `https://taharatahim.github.io/`; confirm its actual address and deployment status after enabling Pages and completing the first deployment.

The site can also be previewed locally by opening `index.html` in a browser or serving this directory with any static HTTP server.
