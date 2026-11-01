# Design: Abedkh

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: editorial
- Shape of the first page: Letter
- Theme: Studio
- Axes: light/roman-serif/warm · posture: restrained
- Job: hire
- Modes: light and dark, attribute `data-theme` (the existing toggle)

## Tokens
`Frontend/tokens.css` is the source of truth. Studio proof paper, Hedvig Letters Serif, Geist, one cadmium orange. Rubik replaces both faces when `dir="rtl"`, because Arabic and Hebrew are part of the site.

## Controls
- Primary: orange fill, ink text, 48px, a 3px press edge that collapses on active
- Secondary: ink outline, same height

## Motion
- Character: calm. The initials draw once. Guides scale in once. Buttons press on active. Under reduced motion the signature and guides are already drawn.

## Pages
- Home: Corridor letter, portrait, then the work index
- Projects: Corridor count, then the filterable index
- Resume: Corridor, then the document
- Contact: Corridor with a perforated ticket, then the Netlify form

## Exports
`Frontend/tokens.css` in this project.
