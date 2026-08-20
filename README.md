# Andriy Zubets CV Website

This repository contains a static personal CV / portfolio website for Andriy Zubets, presented as a full-stack developer profile focused on Laravel, JavaScript, Python, FastAPI, AI integrations, API work, DevOps, CMS development, and responsive front-end implementation.

The main website is implemented in `index.html` and uses local CSS, JavaScript, image, favicon, and PDF resume assets from this directory.

## Main Content

The CV page includes:

- A fixed profile sidebar with avatar, citizenship, residence / work permit, language levels, skill progress bars, technology list, and social contact shortcuts.
- A hero section with animated typed text describing work areas such as Laravel apps, FastAPI microservices, AI assistants, RAG, vector search, Stripe subscriptions, PDF pipelines, Playwright tests, Dockerized scrapers, Azure deployments, SEO, OpenCart integrations, and fine-tuned models.
- Summary metrics for years of full-stack web experience, created sites, and complex projects.
- Service descriptions covering server deployment, CMS / framework setup, back-end preparation, front-end implementation, AI integrations, model fine-tuning and evaluation, third-party integrations, technical SEO, adaptive layout, calculators, admin panels, and custom development.
- Case-study cards for projects such as startup aggregation, memory-based movie/book search, booking apps, AI blogs, AI chat, venue search, sales programs, reusable calculators, reseller databases, international websites, insurance marketplaces, furniture designers, and e-commerce projects.
- A works section that loads portfolio entries dynamically from a Google Apps Script endpoint.
- Education and work-history timelines.
- A contacts section with social, messenger, email, phone, and WhatsApp links.

## File Structure

```text
.
├── index.html
├── favicon.ico
├── googlef72ceae436f39e55.html
├── style.css
├── styles.css
├── README.md
└── assets
    ├── Andriy_Zubets_-_Front_end_Developer.pdf
    ├── Andriy_Zubets_-_Front_end_Developer_.pdf
    ├── Andriy_Zubets_-_Full_stack_Developer.pdf
    ├── css
    │   ├── reset.css
    │   ├── style.css
    │   └── style-dist.css
    ├── img
    │   ├── avatar.jpg
    │   ├── bg.jpg
    │   └── top_photo.png
    └── js
        ├── cpb.min.js
        ├── html2canvas.min.js
        └── script.js
```

## Resources

- `index.html` - Main static HTML page and the primary content source for the CV / portfolio.
- `assets/css/reset.css` - CSS reset used by the active page.
- `assets/css/style.css` - Main active stylesheet used by `index.html`.
- `assets/css/style-dist.css` - Minified / distribution version of the main CV stylesheet. It is present but currently commented out in `index.html`.
- `assets/js/script.js` - Main behavior script for progress animations, typed text, case-study popups, portfolio loading, and mobile sidebar toggling.
- `assets/js/cpb.min.js` - Circular progress bar library used for language indicators.
- `assets/js/html2canvas.min.js` - Bundled html2canvas library; present in the assets folder but not directly linked from `index.html`.
- `assets/img/avatar.jpg` - Profile avatar image.
- `assets/img/bg.jpg` - Hero / background image.
- `assets/img/top_photo.png` - Main hero portrait image.
- `assets/*.pdf` - Downloadable PDF CV versions for front-end and full-stack developer profiles.
- `favicon.ico` - Browser favicon.
- `googlef72ceae436f39e55.html` - Google site verification file.
- `style.css` - Root-level stylesheet with WordPress / Elementor child-theme styles; it is not linked by the current static `index.html`.
- `styles.css` - Root-level legacy / utility stylesheet; it is not linked by the current static `index.html`.

## External Dependencies

The active page loads several external resources at runtime:

- Google Analytics / Google Tag Manager.
- jQuery from Google CDN.
- Google Fonts: `Poppins` and `Courier Prime`.
- Font Awesome kit for icons.
- Typed.js from jsDelivr for animated typing text.
- Google Apps Script endpoint for loading portfolio works dynamically.

Because these are loaded from remote URLs, the page can render locally, but analytics, icons, fonts, typed text, and dynamic portfolio content depend on internet access.

## Local Usage

Open `index.html` directly in a browser, or serve the directory with any static web server.

Example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Notes

- This is a static website; there is no package manager, build script, or server-side application code in this directory.
- The active stylesheet is `assets/css/style.css`, not the root-level `style.css`.
- The portfolio works section depends on the external Google Apps Script URL configured in `assets/js/script.js`.
- The repository currently tracks `.DS_Store` files and contains a pre-existing deleted tracked file, `prepros.config`, in the working tree.
