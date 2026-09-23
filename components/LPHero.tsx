export default function LPHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="container-bp py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7 order-1">
          <div className="eyebrow mb-8">
            Executive Search &amp; Leadership Advisory für Beteiligungsunternehmen
          </div>
          <h1 className="text-[36px] md:text-[52px] lg:text-[60px] leading-[1.06] text-ink-primary tracking-[-0.018em] font-bold">
            Führungsentscheidungen im Portfolio{" "}
            <span className="accent-blue">fundiert treffen.</span>
          </h1>
          <p className="mt-8 text-[17px] md:text-[18px] leading-[1.75] max-w-2xl">
            b+p unterstützt Family Offices, Beteiligungsgesellschaften und
            Private-Equity-Investoren bei der Besetzung und Beurteilung von
            Führungskräften in ihren Portfoliounternehmen. Von Geschäftsführung
            und CFO bis zu zentralen operativen Schlüsselpositionen.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#kontakt" className="btn-primary">
              Erstgespräch anfragen
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-[13.5px] text-ink-muted">
            Eine erste Einordnung Ihrer konkreten Situation. Vertraulich und unverbindlich.
          </p>

          <div className="mt-12 pt-6 border-t border-ink-line max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] font-bold uppercase tracking-eyebrow text-ink-muted">
              <span className="accent-blue">Executive Search</span>
              <span className="w-1 h-1 rounded-full bg-ink-line" />
              <span>Leadership Assessment</span>
              <span className="w-1 h-1 rounded-full bg-ink-line" />
              <span>Nationale und internationale Suche</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-2">
          <div className="relative aspect-[4/5] rounded-panel overflow-hidden bg-brand-blue-deep card-shadow">
            <div className="absolute inset-0 bg-[linear-gradient(155deg,#0B1B2E_0%,#054976_60%,#08325C_100%)]" />

            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "1px 44px",
              }}
            />

            <div className="absolute inset-0 p-9 md:p-10 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-bold uppercase tracking-eyebrow text-white/60">
                  Beteiligungsportfolio
                </div>
                <div className="text-[11px] font-semibold tracking-eyebrow text-white/45">
                  Referenzumfeld
                </div>
              </div>

              <div>
                <div className="text-[12px] font-semibold uppercase tracking-eyebrow text-white/55 mb-6">
                  Typische Konstellationen
                </div>
                <ul className="space-y-4">
                  {[
                    "Industrie & produzierender Mittelstand",
                    "Technologie- und Wachstumsunternehmen",
                    "Handel und Dienstleistung",
                    "Buy-and-Build-Plattformen",
                  ].map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-white/90 text-[15px] leading-snug"
                    >
                      <span className="mt-[10px] w-4 h-px bg-white/50 flex-shrink-0" />
                      <span className="font-medium">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="placeholder-note">
              Platzhalter: reales b+p-Motiv einsetzen (Unternehmensstandort oder Editorial-Portrait)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
