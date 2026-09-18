# Paul Best's academic website

This site is built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and deployed to GitHub Pages.

## Run in the dev container

Open the repository in VS Code and select **Dev Containers: Reopen in Container**. The image includes MkDocs and runs a strict build when it is created.

Start the live preview:

```bash
mkdocs serve --dev-addr=0.0.0.0:8000
```

VS Code forwards port 8000 and opens the site automatically.

## Run without the dev container

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Open <http://127.0.0.1:8000>.

## Build

```bash
mkdocs build --strict
```

Site content is in `docs/`, and navigation and theme settings are in `mkdocs.yml`. Pushing to `main` or `master` deploys the site through `.github/workflows/pages.yml`.

GitHub Pages must use **GitHub Actions** as its source under **Settings → Pages → Build and deployment**.

## Repository structure

- `docs/` — pages, images, downloads, CSS, and JavaScript
- `overrides/` — MkDocs Material template overrides
- `.devcontainer/` — reproducible Python 3.12 development environment
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `mkdocs.yml` — site configuration and navigation
- `requirements.txt` — pinned MkDocs dependencies
