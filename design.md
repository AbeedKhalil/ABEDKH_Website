# Design: Abedkh

The locked system. Every Hallmark or Impeccable run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Name: Three Scripts
- Idea: one engineer, three scripts, two reading directions. The name is set on a plate in Arabic, Hebrew and Latin, because the site speaks all three, as Jerusalem does, and motion follows the direction each script is read in.
- Genre: editorial, custom theme (no catalog theme)
- Axes: light/grotesk-heavy/warm · posture: committed
- Job: hire
- Modes: light and dark, attribute `data-theme` (the existing toggle)

## Tokens
`Frontend/tokens.css` is the source of truth.
- Paper: pale olive stone. Ink: olive black. Field: olive at night, carried by the hero, the featured project, the record and the footer. Signal: one vermillion, for the primary control, the stamp, active states and the principle numerals.
- Faces: Archivo variable. Display at 68% width and weight 800, body at 100% and 400, labels at 500. Rubik carries Arabic and Hebrew, and replaces both faces when `dir="rtl"`.
- Foil: three stops (gold, coral, sage), on the stamp only.

## Controls
- Primary: vermillion keycap, ink text, 52px (44px small), a lit convex face that turns concave and sinks 2px on press
- Secondary: 1.5px outline in the current colour, same height
- Text links: underline at 45% of the current colour, vermillion on hover

## Motion
- The hero writes itself in: the Latin head wipes from its reading start, the Arabic and Hebrew lines from the right, the portrait unveils upward, the monogram draws once.
- One reveal on scroll: blocks slide in from the reading start (the direction flips in RTL).
- The ticket's stamp strikes once when the ticket arrives; its foil drifts with scroll and follows a fine pointer.
- The menu sheet wipes down at 480ms, its links stagger 60ms.
- Under reduced motion every one of these is already at its end state.

## Pages
- Home: the poster hero with the plate and portrait, work index, Hybrid by design, What I do with the tool wall, the record on the field, Right now (a swipe track on phones), the hire ticket, the footer
- Projects: field hero with the count, then the filterable index (a sideways chip row on phones)
- Resume: field hero with 4,500, then the document beside a sticky aside
- Contact: field hero, the contact ticket, then the Netlify form

## Exports
`Frontend/tokens.css` in this project. `Frontend/admin` still reads the legacy aliases at the bottom of the token block.
