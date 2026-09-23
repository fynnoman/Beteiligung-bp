# b+p HubSpot Landingpage

Kompakte Conversion-Landingpage für Executive Search & Leadership Advisory
für Beteiligungsunternehmen. Ein einziger Conversion-Pfad: Anfrage für ein
vertrauliches Erstgespräch.

Style-Basis: fynnoman/Beteiligung-bp (Farben, Typografie, Buttons, Eyebrow,
Panel/Card).

## Struktur

- `app/page.tsx` – die Landingpage (einzige Route)
- `app/layout.tsx` – Root-Layout, `robots: noindex, nofollow`
- `app/globals.css` – Design-Tokens + Utility-Klassen
- `components/LPHeader.tsx` – reduzierter Header (Logo links, Telefon rechts, keine Navigation)
- `components/LPHero.tsx` – Block 1: Hero + Primary CTA
- `components/LPProblem.tsx` – Block 2: Problembewusstsein (3 Cards)
- `components/LPDifferenzierung.tsx` – Block 3: dunkelblauer Differenzierungsblock
- `components/LPVorgehensweise.tsx` – Block 4: drei nummerierte Schritte
- `components/LPWhy.tsx` – Block 5: Warum b+p (3 Cards)
- `components/LPTrust.tsx` – Block 6: 3 KPI (Trust/Proof)
- `components/LPContact.tsx` – Formular-Block (Anchor `#kontakt`)
- `components/LPFooter.tsx` – minimaler Footer

## Setup

```bash
cd /Users/fynnschulz/bp-hubspot-landing
npm install
npm run dev
```

Läuft auf http://localhost:3043

## Platzhalter (klar markiert, vor Live-Schaltung ersetzen)

1. **Hero-Visual** (`components/LPHero.tsx`):
   Aktuell ein abstraktes Portfolio-Motiv aus CSS-Gradients + vier
   Portfolio-Cards. Beschriftet mit einem gut sichtbaren Overlay
   („Platzhalter: hier reales b+p-Motiv einsetzen"). Empfohlen:
   hochwertiger mittelständischer Unternehmensstandort oder eine ruhige
   Portfolio-Darstellung. Keine klassischen Stockfotos mit verschränkten Armen.

2. **KPI ">90 %"** (`components/LPTrust.tsx`):
   Kleiner Kursiv-Hinweis unter der Zahl: Zeitraum und Berechnungsgrundlage
   intern bestätigen, bevor Live geschaltet wird.

3. **Kontaktformular** (`components/LPContact.tsx`):
   Statischer Platzhalter-Form. Vor Go-Live durch HubSpot-Form-Embed ersetzen
   (siehe unten). Der umgebende Rahmen (Panel, Bullets links, Trust-Bar
   oben) bleibt.

4. **Telefonnummer im Header/Footer** (`components/LPHeader.tsx`):
   Aktuell `0681 / 76199-0` – falls abweichend, hier anpassen. Die
   Aufkleber-Version für `tel:`-Link ist `+4968176199-0`.

5. **Rechtliche Links** (`components/LPFooter.tsx`):
   Impressum + Datenschutz derzeit `href="#"`. Vor Go-Live auf die
   endgültigen URLs setzen (HubSpot-Seiten oder externe b-p.de-Pages).

## HubSpot-Formular einbauen

Den `<form>`-Block in `components/LPContact.tsx` durch den HubSpot-Embed
ersetzen:

```html
<!-- HubSpot Form Embed -->
<script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "eu1",
    portalId: "XXXXXXX",
    formId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
  });
</script>
```

Alternativ als React-Client-Komponente (`"use client"`) mit `useEffect`
laden. Der äußere Panel-Rahmen und die Bullets links bleiben unverändert.

## Design-Regeln (kurz)

- Farben: `brand-blue` #0872BF (Primary), `brand-yellow` #FFB400 (Akzent),
  `ink-primary` #3D4658 (Text).
- Font: Nunito Sans (Google Fonts, via `next/font`).
- H2 mit einem gelb hervorgehobenen Teil-String (`.highlight-yellow`).
- Buttons: `.btn-primary` (blau), `.btn-onblue` (weiß auf blau),
  `.btn-ghost` (Outline).
- Sektions-Rhythmus: `.section` (padding-block clamp).
- Cards: `rounded-panel border border-ink-line card-shadow`.

## SEO / Indexierung

`layout.tsx` setzt `robots: noindex, nofollow`. Die Landingpage ist als
Paid-Traffic-Zielseite (LinkedIn Ads, Google Ads, Direktmailings) gedacht
und soll nicht in der organischen Suche auftauchen.
