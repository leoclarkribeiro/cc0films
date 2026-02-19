# cc0 Films

A static portfolio website for cc0 Films — inspiring stories from Nouns and the onchain cc0 world.

## Contents

- **index.html** — Main landing page featuring Benbodhi: Decoded and Non-Fungible Aotearoa
- **nfa.html** — Non-Fungible Aotearoa documentary page
- **styles.css** — Styling (dark theme, gold accents, scroll animations)
- **script.js** — Scroll-triggered animations and header behavior
- **images/** — Logos, posters, and assets

## Local development

```bash
# Serve locally
python3 -m http.server 8000
```

Then open http://localhost:8000

## Deployment

The site is deployed to HostGator via GitHub Actions. Push to `main` to trigger automatic deployment.

### Required GitHub Secrets

Add these in **Settings → Secrets and variables → Actions**:

| Secret | Description |
|--------|-------------|
| `FTP_SERVER` | HostGator FTP host (e.g. `ftp.yourdomain.com`) |
| `FTP_USERNAME` | FTP username |
| `FTP_PASSWORD` | FTP password |
| `FTP_SERVER_DIR` | Remote directory (e.g. `public_html` for root) |

## License

cc0 Films production — All rights reserved
