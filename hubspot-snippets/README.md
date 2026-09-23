# b+p HubSpot Snippets

Neun self-contained HTML-Blöcke. Kein Custom-Module-Setup, keine Felder,
kein CLI-Upload. In HubSpot einfach in ein „Rich Text"- oder „HTML"-Widget
einfügen und speichern.

## Reihenfolge auf der Landingpage

1. `01-bp-header.html`
2. `02-bp-hero.html`
3. `03-bp-problem.html`
4. `04-bp-differenzierung.html`
5. `05-bp-vorgehensweise.html`
6. `06-bp-why.html`
7. `07-bp-trust.html`
8. `08-bp-kontakt.html` (enthält HubSpot-Form-Embed, Portal 8184088, Form-ID 494000c6-…)
9. `09-bp-footer.html`

## Design

- Farben: Blau `#0064B5`, Gelb `#FBB900`, Ink `#3D4658`
- Font: Nunito Sans (jedes Snippet lädt sie via `@import`, Browser cached)
- Reveal-Animation per IntersectionObserver
- Container 1440px, responsiv 768/1024/1440

## Logo

Der Header und Footer verlinken auf `https://personalberatung.b--p.de/hubfs/bp-logo.jpg`.
Sobald du das Logo unter „Files & Templates → Files" hochgeladen hast, bitte
die URL im HTML durch den finalen HubFS-Pfad ersetzen (oder einfach über den
HubSpot Rich Text Editor per Bild-Widget austauschen).

## Kontakt-Modul

Das Form-Embed-Script ist inline. Falls das Formular lokal nicht rendert,
in HubSpot unter **Marketing → Formulare → dein Form → Einstellungen →
Allowed Domains** die Ziel-Domain freischalten.
