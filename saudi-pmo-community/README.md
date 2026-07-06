# Saudi PMO Community — Website

One self-contained page: [`index.html`](index.html) (HTML + CSS + JS, no build step) plus `assets/`.
Open `index.html` in any browser, or serve the folder with any static host.

## Features

- **Bilingual**: Arabic (default, RTL) ⇄ English via the nav toggle. Every string lives in
  `data-ar` / `data-en` attributes on the element itself.
- **Day / Night mode**: moon/sun button in the nav. Remembers the choice in
  `localStorage` (`spmo-theme`), first visit follows the OS preference.
- **Language + theme aware logo**: the header lockup swaps between
  `assets/nav-{ar|en}-{offwhite|green}.png` based on language, scroll position, and theme
  (see `updateBrand()` in the script).
- Animated hero network canvas, scroll reveals, count-up stats, scroll-spy nav,
  mobile hamburger menu, join-form success state.

## Editing content

| What | Where |
|---|---|
| Stats (members, events…) | `.hero-badges` — `data-target` is the number counted up to. **Currently placeholder values** — replace with real figures. |
| Brand colors | `:root` CSS variables at the top (`--green`, `--gold`, `--cream`…) |
| Night palette | the `html.night` override block near the end of the CSS |
| Founders | `.f-grid` — each card is a `.founder` block with photo, EN + AR names |
| Program cadence / copy | `.prog-grid` section |
| Contact email / socials | footer `.foot-col` blocks |

## ⚠️ Source asset naming (pmos asseds folder)

The original files in `Downloads/pmos asseds/` have **scrambled names** — verified visually:

| File | Actual content |
|---|---|
| `ARABIC/spmo logo offwhite png.png` | **green** wide lockup |
| `ARABIC/spmo logo png.png` | **off-white** wide lockup |
| `ARABIC/spmo logo green png.png` | **brown** wide lockup |
| `ARABIC/offwhite horizontal spmo logo png.png` | off-white **stacked** lockup (correct!) |
| `*horizontal*` files generally | **stacked** (vertical) lockups |
| plain-named files | **wide** (horizontal) lockups |

The site's `assets/` folder contains correctly-named, alpha-trimmed exports
(`nav-*`, `hero-ar-offwhite`, `t-*`), so edit there — or re-export from source with care.

## Related

- `../saudi-pmo-react/` — Next.js + shadcn + Tailwind starter themed to this brand
  (glowing-effect bento grid). Run with `npm run dev` or `dev-server.cmd`.
