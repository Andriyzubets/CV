# Andriy Zubets — portfolio

Static portfolio site: https://andriyzubets.github.io/CV/ (EN) · https://andriyzubets.github.io/CV/fr/ (FR).

Positioning: **Senior Full-Stack & AI Engineer** — technical owner of a multi-service AI SaaS, agentic engineering workflow (Claude Code, Codex), Laravel · PHP · Python/FastAPI · PostgreSQL · Gemini / Claude / OpenAI.

## Structure

```
index.html           EN page (all CSS inline)
fr/index.html        FR page (same structure, same CSS)
assets/css/reveal.css, assets/js/reveal.js   scroll-reveal animation
assets/img/top_photo.png                     portrait
favicon.svg, favicon.ico
googlef72ceae436f39e55.html                  Search Console verification
```

No build step. Edit the HTML, bump the `?v=` cache-busting query in both files, push to `master`; GitHub Pages serves it.

## Editing rules

- Keep EN and FR in sync: same sections, same numbers.
- The flagship case is anonymised on purpose: describe it as a multi-service AI SaaS for document-heavy work; never name the product, the client or its domain.
- No job-seeking wording (the page is a portfolio, not an application) and no overclaims beyond what the LinkedIn profile states.
- Palette: paper `#f6f5f0`, ink `#0f1a22`, accent `#245ce6`, highlight `#cfe3ff`. One accent only: numbers, links, contact card.

## Local preview

Any static server, e.g. XAMPP: http://localhost/cv/
