# M5 IAM Docs

Documentation for **M5 IAM**, the forever-free starting point for every person, published by TitleChain Foundation.

**Site:** https://titlechain-foundation.github.io/M5-IAM-docs/

## Edit the docs

Pages are Markdown files in `src/content/docs/`, one folder per sidebar section. Every page has an "Edit page" link.

```bash
npm install
npm run dev      # http://localhost:4321/M5-IAM-docs/
npm run build    # static site in dist/
```

Pushing to `main` publishes the site through GitHub Pages (`.github/workflows/deploy.yml`).

Built with [Starlight](https://starlight.astro.build/), an open-source documentation framework.

## License

Docs: CC-BY-4.0. Code: Apache-2.0. See `LICENSE.md`.
