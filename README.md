# Shared Design System — v0 (draft for Jonathan's review)

One design system for every app in the Apps tab. Same headless components everywhere; apps differ only by brand tokens and content.

**This folder is the design system's own app** — a Next.js showcase site destined for its own GitHub repo (`mannjon/design-system`, creation pending Jonathan's approval). Other apps include the components and theme from here. The showcase is a WYSIWYG catalog: every component gets a live demo plus a copy-paste code block, grouped under category drawers (Layout, Forms, Actions, Display), under a sticky header with component search.

Showcase specifics set by Jonathan (2026-11-21):
- Sticky, full-width header; drop shadow is a **hard edge** (no blur/fade) — implemented as `box-shadow: 0 5px 0 0 rgb(0 0 0 / 0.65)` (5px, black at 65%).
- Header works as nav (category links) with a **search bar that shows results**; picking a result opens the category drawer, scrolls to the component, and flashes it.
- Categories behave as **vertical drawers** (accordion) that expand/hide their components.
- Static export (`output: 'export'`) so it can be tested live on GitHub Pages.

## Theme source (set 2026-11-21)

Jonathan directed: theme the whole system from the existing styles in his earlier work, exact where examples exist, best judgment elsewhere, reusing code. Accordingly:

- **Theme = the shadcn `slate` theme from `mannjon/my-app`, verbatim** — `app/globals.css` here is my-app's globals.css (light + dark tokens, radius 0.625rem), with one repair: my-app's file has a broken first line `--color-primary: var(--);` which was dropped because the file re-declares `--color-primary` correctly further down. Fonts are Geist/Geist Mono via `next/font`, exactly as my-app's layout.
- **Components reused as files from my-app:** accordion, button, card (with CardAction), collapsible, dropdown-menu, input, label, navigation-menu, pagination, table, tabs — plus his custom `cardstyled.tsx` (login card), now showcased under Forms.
- **Best-judgment additions (no direct example in my-app):** badge, checkbox, separator, textarea — stock shadcn new-york implementations, which sit on the same slate tokens.
- The showcase-only chrome (hard-edge header shadow, search flash ring, accordion keyframes) is appended at the bottom of globals.css and is not part of the app-facing theme.

Note: the Aeroscout start lives in my-app as `app/aeroscout.tsx` (NavigationMenu + Pagination draft). The `videyos` repo Jonathan associates with the drone work is empty; the styles above are my-app's.

## How it works

- **Components:** shadcn/ui (new-york style) — Radix headless primitives + `class-variance-authority` variants, copied into each app at `@/components/ui`. Identical across apps; never edited per app. If a component needs a change, it changes here first, then propagates.
- **Theming:** Tailwind CSS v4, CSS-first. `globals.css` (this folder) is the canonical theme: CSS variables for the neutral core + a small **brand tokens** block at the top (`--brand`, `--brand-foreground`, `--font-display`, `--font-body`). An app's look = its brand tokens, set from `app.config.json > brand`. `--primary`, `--accent`, `--ring`, and sidebar primaries all derive from `--brand`, so one token re-skins the whole app.
- **Dark mode:** class-based (`.dark`), defined for every token. Components must work in both.
- **Icons:** Lucide only (`lucide-react`), per the shadcn config.

## Component rules (binding on all custom widgets/components)

1. Build on a Radix/shadcn primitive when one exists; custom components follow the same anatomy (Trigger/Content/etc. where relevant).
2. Variants via `cva`, sizes and tones as named variants — no ad-hoc class strings for states.
3. Colors only through tokens (`bg-primary`, `text-muted-foreground`, `border-border`…). **No hard-coded hex/rgb in components.** Brand color enters only through `--brand`.
4. Spacing/radius through the shared scale (`--radius` and Tailwind spacing). No magic pixel values for component chrome.
5. Every component must render correctly in light and dark, and be keyboard-usable (the Radix base gives most of this — don't break it).
6. New components are added to the design system first, reviewed, then used in apps — never invented inside one app and left there.

## Files

- `globals.css` — the canonical theme (copy into each app at `app/globals.css`; edit only the brand tokens block per app).
- `components.json` — the shadcn CLI config every app initializes with.

## Open questions for Jonathan

- Brand token defaults: the placeholder `--brand` is a neutral teal. Each app sets its own; is there a house default you want (e.g., Aeroscout's colors) for apps without branding yet?
- Fonts: Geist is the placeholder (it ships with the Next scaffold). Keep, or pick a house font pair?
