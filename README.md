# Trinbago Pepper Sauce — Website Demo

Static-site demo for **Trinbago Pepper Sauce™** — a Caribbean small-batch hot sauce brand from Trinidad & Tobago. Estd 2018.

🌶 **Live demo:** https://sweet-dreams-us.github.io/TrinbagoPepperSauce/

Built and bottled by [Sweet Dreams Studios](https://sweetdreamsmusic.com).

---

## Stack

Pure static — zero build step.

- **HTML / CSS / JS** — vanilla, no framework
- **Hosting** — GitHub Pages (`.nojekyll` for clean asset paths)
- **Fonts** — Bungee + Permanent Marker + Caveat + DM Sans + JetBrains Mono (via Google Fonts CDN)
- **Imagery** — Generated with [Higgsfield](https://higgsfield.ai) (`nano_banana_2`)

When the client signs, the static site moves to **Vercel** for previews, edge caching, and easy form/database integration.

---

## Pages

| Path | Purpose |
|------|---------|
| `index.html` | Hero, pillars, ingredients, testimonials, bottles tease |
| `about.html` | De Story — origin, recipe, founder note |
| `experience.html` | De Heat Scale — Original / Carnival / Soca Inferno tabs + day timeline |
| `pricing.html` | Bottles — Single / Trio / Founders 6 subscription + FAQ |
| `join.html` | Join De Crew — newsletter signup with heat preference |
| `giveaway.html` | 6-Pack Giveaway — IG entry flow + live countdown |
| `admin.html` | Trinbago Ops — internal operator dashboard (orders, batches, crew) |
| `404.html` | "Pepper wahala" — playful not-found page |

---

## Local development

No build step. Just open `index.html` in a browser, or serve the directory:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Visit http://localhost:8000.

---

## Brand Design System

Documented in `styles/globals.css`:

- **Colors** — pepper red (`#E51D1F`) on carbon black, with scotch bonnet yellow + habanero orange + lime zest accents
- **Display font** — Bungee (carnival poster blocky)
- **Brand script** — Permanent Marker (logo-matching brushstroke)
- **Editorial flow** — Caveat (handwritten warmth)
- **Body** — DM Sans
- **Mono** — JetBrains Mono

Full design tokens are CSS variables on `:root`.

---

## Image assets

All imagery lives in `assets/img/` — generated with Higgsfield's `nano_banana_2` model and downloaded for self-hosted delivery (no external image deps).

| File | Use |
|------|-----|
| `hero-bottle.png` | Home hero — single bottle on black with peppers |
| `three-bottles.png` | Pillars + bottle lineup catalog shot |
| `peppers-macro.png` | Pepper close-up texture |
| `market-stall.png` | Trinidad street market scene |
| `sauce-pour.png` | Vertical pour shot (join page hero) |
| `founder.png` | Founder portrait (about page) |
| `food-spread.png` | Caribbean food flat lay (giveaway hero) |
| `pepper-texture.png` | Background texture pattern |

---

## Deploying

GitHub Pages serves from `main` branch, root `/`. Push to `main` deploys.

```bash
git add .
git commit -m "your change"
git push
```

Site updates within ~30 seconds.

---

© Trinbago Pepper Sauce™ · Estd 2018
