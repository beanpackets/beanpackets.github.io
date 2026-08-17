# matthewgsbean.com

Portfolio site for **Matthew Bean**, IT support and networking, San Diego.

Live at **https://matthewgsbean.com**

The custom domain is served by GitHub Pages from `public/CNAME`, which Astro
copies to the root of `dist/` on every build. Deleting that file silently
reverts the site to the `github.io` address.

## Stack

| Layer     | Choice                                        |
| --------- | --------------------------------------------- |
| Framework | [Astro](https://astro.build) 7, static output |
| Styling   | [Tailwind CSS](https://tailwindcss.com) 4     |
| Fonts     | IBM Plex, self-hosted via Fontsource          |
| Hosting   | GitHub Pages                                  |
| CI/CD     | GitHub Actions                                |

No server, no database, no API keys, no forms. The dynamic parts are a hero
canvas animation, an interactive terminal, and a GitHub repo list, all
client-side.

## Local development

```bash
npm ci          # install exactly what the lockfile specifies
npm run dev     # dev server at localhost:4321
npm run build   # production build into dist/
npm run preview # serve dist/ with the production CSP active
```

Requires Node 24 (the version CI builds with).

## Layout

```
src/
  assets/          hero and card artwork, optimized at build time
  components/      page sections, terminal, inline SVG icons
  data/            site config and resume content
  layouts/         base HTML shell: meta, CSP, JSON-LD
  pages/           routes: index, 404
  styles/          Tailwind theme, tone system
resume-src/        LaTeX source for the public resume PDF
scripts/           social card generation
```

### Rebuilding the resume PDF

`public/Matthew_Bean_Resume.pdf` is generated from `resume-src/resume.tex`:

```bash
cd resume-src && pdflatex -interaction=nonstopmode resume.tex
cp resume.pdf ../public/Matthew_Bean_Resume.pdf
```

### Regenerating the social card

```bash
node scripts/make-og.mjs
```

## Analytics

Ships disabled. To enable, create a free site at
[goatcounter.com](https://www.goatcounter.com) and set the code in
`src/data/site.js`:

```js
export const ANALYTICS = { code: 'your-site-code' };
```

The CSP widens automatically. GoatCounter is cookieless, so no consent banner.

## Security

A static site with no secrets has a small attack surface. The work is keeping
it that way:

- Actions pinned to full commit SHAs. Tags are mutable and can be repointed by
  a compromised upstream; SHAs can't.
- Least-privilege workflow: build job gets `contents: read` only, deploy job
  gets `pages: write` and `id-token: write`. No repository secrets exist.
- `npm ci` from the lockfile, with an audit gate that fails the build on any
  high or critical advisory in production dependencies.
- Dependabot covers npm packages and the pinned action SHAs.
- Strict CSP via meta tag (GitHub Pages can't set response headers):
  `default-src 'self'`, no unsafe-inline. The only third-party origin is
  `api.github.com`, plus the analytics endpoint when enabled.
- No credentials in client code. The GitHub API call is anonymous by design;
  if the rate limit bites, the build-time list is the fallback, never a token.
- API responses rendered with `textContent`, never `innerHTML`.
- A CI guard fails the build if unexpected email addresses, phone-shaped
  strings, or local filesystem paths show up in `dist/`.

Known limitation: `frame-ancestors` is header-only, and GitHub Pages doesn't
allow custom headers, so there's no clickjacking protection. For a static
page with no authenticated actions, accepted.

### Privacy

The published resume is a purpose-built copy: email, city, and state, but no
phone number and no ZIP. The full resume goes to employers directly and isn't
in this repository.

## License

Code is MIT. Resume content and artwork are (c) Matthew Bean and not
covered by that license.
