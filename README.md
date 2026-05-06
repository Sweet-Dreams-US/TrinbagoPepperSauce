# Trinbago Pepper Sauce — Website Demo

Static-site demo for **Trinbago Pepper Sauce®** — a Caribbean small-batch hot sauce brand from Fort Wayne, IN, dedicated to the Marin family.

🌶 **Live demo:** https://sweet-dreams-us.github.io/TrinbagoPepperSauce/

Built and bottled by [Sweet Dreams Studios](https://sweetdreamsmusic.com).

---

## Stack

Pure static — zero build step.

- **HTML / CSS / JS** — vanilla, no framework
- **Hosting** — GitHub Pages (`.nojekyll` for clean asset paths)
- **Fonts** — Bungee + Permanent Marker + Caveat + DM Sans + JetBrains Mono (via Google Fonts CDN)
- **Imagery** — Real product/family photos plus a few Higgsfield-generated accent shots

When the client signs, the static site moves to **Vercel** for previews, edge caching, and easy form/database integration.

---

## Pages

| Path | Purpose |
|------|---------|
| `index.html` | Hero, story intro with food spread, ingredients, testimonials, bottles tease |
| `about.html` | The Story — origin, **Marin family memorial (Felix & Shafina)**, differences |
| `pricing.html` | Bottles — 5oz Single / 10oz Single / 3-Pack / Quarterly Subscription + comparison + FAQ |
| `giveaway.html` | 6-Pack Giveaway — IG entry flow + live countdown to April 30, 2026 |
| `admin.html` | Operator dashboard — orders, batches, pack mix, customers (mock data) |
| `404.html` | "Page not found" page |

---

## Brand Design System

Documented in `styles/globals.css`:

- **Colors** — pepper red (`#E51D1F`) on carbon black, with scotch bonnet yellow + habanero orange + lime zest accents
- **Display font** — Bungee (carnival poster blocky)
- **Brand script** — Permanent Marker (logo-matching brushstroke)
- **Editorial flow** — Caveat (handwritten warmth)
- **Body** — DM Sans
- **Mono** — JetBrains Mono

---

## Image assets (`assets/img/`)

All real:

| File | Use |
|------|-----|
| `Logo.png` | Official circular brand logo (favicon, nav, floating badge) |
| `saucebottle.png` | Illustrated bottle (label artwork) |
| `hero-bottle.png` | Real product photography — full-bleed home hero |
| `food-spread.png` | Real bottle in Caribbean food spread |
| `trinbagofamily.webp` | Real Marin family photo collage (memorial) |
| `peppers-macro.png` | Generic pepper macro accent |
| `pepper-texture.png` | Background texture |
| `giveaway-6pack.png` | Generated 6-pack hero for giveaway page |
| `giveaway-ticket.png` | Vintage ticket-style accent |

---

## Memorial

Trinbago Pepper Sauce® is dedicated to the **Marin Family**.
In Loving Memory of:

- **Felix Sanchez Marin** (23.12.1938 – 21.03.2021)
- **Shafina Marin** (31.01.1938 – 11.10.2016)

A persistent memorial strip appears above every public footer.

---

## Real contact info (live throughout footer)

- 1126 Oneida St, Fort Wayne, IN 46805
- (260) 441-6757
- trinbagopeppersauce@gmail.com
- [Instagram](https://www.instagram.com/trinbagopeppersauce/) · [Facebook](https://www.facebook.com/TrinbagoPepperSauce)

---

## Local development

No build step. Open `index.html` directly, or serve the directory:

```bash
python -m http.server 8000
# or
npx serve .
```

---

## Deploying

GitHub Pages serves from `main` branch root. Push to deploy.

```bash
git add .
git commit -m "your change"
git push
```

Site updates within ~30s.

---

© Trinbago Pepper Sauce® · Estd 2018 · Fort Wayne, IN
