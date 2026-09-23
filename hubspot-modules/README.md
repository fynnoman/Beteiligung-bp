# b+p HubSpot Modules

Neun eigenständige HubSpot Custom Modules für die Executive-Search-Landingpage
für Beteiligungsunternehmen.

## Module

| Ordner | Zweck |
|---|---|
| `bp-header.module` | Kompakter Header: Logo links, Telefon rechts, keine Navigation |
| `bp-hero.module` | Hero mit Eyebrow, H1, Subheadline, Primary CTA, Trust-Zeile, Editorial-Panel rechts |
| `bp-problem.module` | Problembewusstsein mit drei Cards |
| `bp-differenzierung.module` | Dunkelblauer Statement-Block mit CTA |
| `bp-vorgehensweise.module` | Drei nummerierte Prozess-Schritte + Rollen-Zeile |
| `bp-why.module` | Warum b+p mit drei Cards |
| `bp-trust.module` | Drei KPI-Kacheln |
| `bp-kontakt.module` | Kontakt-Panel mit HubSpot-Form-Picker (Redakteur wählt Form aus) |
| `bp-footer.module` | Minimaler Footer: Logo + Impressum/Datenschutz |

## Design-Tokens

Alle Module bringen ihre CSS-Variablen selbst mit (`--bp-brand-blue`, `--bp-brand-yellow`, ...).
Kein zusätzliches Theme-Stylesheet nötig. Wenn du sie zentral pflegen willst, kopiere die
`:root`-Blöcke aus `module.css` in dein Theme-Stylesheet und entferne sie dort aus den Modulen.

Farbwerte (analog WordPress):
- Blau: `#0064B5`
- Gelb: `#FBB900`
- Ink Primary: `#3D4658`
- Dunkelblau Sections: `#001F3E`

Schriftart: **Nunito Sans** (Google Fonts). Wird in `bp-header.module` via `<link>` geladen,
damit sie auf jeder Seite verfügbar ist, sobald der Header eingebaut wird.

## Upload nach HubSpot

### Option A: HubSpot CLI (empfohlen)
```bash
npm install -g @hubspot/cli
hs init                                   # einmalig, HubSpot-Portal verknüpfen
hs upload hubspot-modules/bp-header.module   b+p/bp-header.module
hs upload hubspot-modules/bp-hero.module     b+p/bp-hero.module
# ... für alle 9 Module
```

Oder gebündelt:
```bash
hs upload hubspot-modules b+p
```

### Option B: Design Manager (Web)
1. Design Manager → File → New file → Module
2. Für jedes Modul: `module.html`, `module.css`, `fields.json`, `meta.json` inhaltlich einfügen
3. Speichern

## Modul-Reihenfolge auf der Landingpage

1. bp-header
2. bp-hero
3. bp-problem
4. bp-differenzierung
5. bp-vorgehensweise
6. bp-why
7. bp-trust
8. bp-kontakt
9. bp-footer

## Kontakt-Modul: HubSpot-Form einbauen

Das `bp-kontakt.module` hat ein Feld vom Typ `form`. Beim Einbau der Seite:
1. Modul auf Seite ziehen
2. Rechts im Editor unter „Kontaktformular" euer HubSpot-Form auswählen
3. Optional: Erfolgsmeldung / Redirect-URL setzen

Kein Custom-Code nötig — HubSpot rendert das Formular über den `{% form %}` HubL-Tag.
