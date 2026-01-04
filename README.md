# Uragentur Frontend Conventions

This project uses a few CSS variables and small utilities to keep spacing and naming consistent while preserving the current look.

## Spacing Variables
- `--gutter`: large side padding for desktop containers (default: 64px)
- `--gutter-sm`: small side padding for mobile containers (default: 16px)
- `--page-margin`: horizontal page margin for major sections; overridden via media queries
  - `@media (min-width: 768px) { --page-margin: 16px }`
  - `@media (min-width: 992px) { --page-margin: 48px }`
  - `@media (min-width: 1400px) { --page-margin: 192px }`
- `--mobile-margin`: side margin for mobile-only elements like the hero image container (default: 40px)

## How They’re Used
- Base containers (`.container`) use `padding: 0 var(--gutter-sm)`.
- Navigation (`.nav-inner`) and footer (`.footer-inner`) use `--gutter` on larger screens and `--gutter-sm` in mobile overrides.
- Major sections (hero, about, menu) use `margin-inline: var(--page-margin)` so breakpoints are controlled in one place.
- Mobile hero image container uses `--mobile-margin` for consistent side spacing.

## Utilities
- `.text-brand` sets brand text color.
- `.article-card.active` remains supported; `.article-card.is-active` is also supported as an alias.

## Simplified Rules
- Headings: `h1, h2, h3` define the typeface; `h1` and `h2` only specify sizes.
- Big-text lists: `.bio-bullets` and `.bio-text-list` share unified styles.

## Notes
- Avoid large renames; aliases are provided to migrate gradually.
- If you need different spacing for a new breakpoint, adjust the variable values instead of editing each selector.
