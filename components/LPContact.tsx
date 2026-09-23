export default function LPContact() {
  return (
    <section id="kontakt" className="section bg-surface-soft scroll-mt-24">
      <div className="container-bp">
        <div className="relative rounded-panel overflow-hidden bg-[#0B1B2E] text-white card-shadow">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "96px 96px",
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 p-8 md:p-12 lg:p-16">
            <div className="lg:col-span-5">
              <div className="eyebrow eyebrow--onblue mb-6">Erstgespräch</div>
              <h2 className="text-white text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.015em] font-bold">
                Erstgespräch{" "}
                <span className="text-[#5FA9DE]">anfragen.</span>
              </h2>
              <p className="mt-6 text-white/80 text-[16.5px] leading-[1.75] max-w-md">
                Schildern Sie uns kurz Ihre aktuelle Situation. Ein Partner von
                b+p ordnet den Bedarf gemeinsam mit Ihnen ein und bespricht
                mögliche Vorgehensweisen.
              </p>

              <ul className="mt-10 space-y-5 text-[15px] text-white/85">
                {[
                  {
                    h: "Persönliche Rückmeldung durch einen Partner",
                    s: "Direkter Austausch mit einem erfahrenen Ansprechpartner.",
                  },
                  {
                    h: "Unverbindliche Ersteinschätzung",
                    s: "Gemeinsame Einordnung der Situation ohne Verpflichtung zur Beauftragung.",
                  },
                  {
                    h: "Konkretes Vorgehen",
                    s: "Empfehlung eines geeigneten Vorgehens aus Executive Search, Leadership Assessment oder einer Kombination beider Ansätze.",
                  },
                ].map((b) => (
                  <li key={b.h} className="flex items-start gap-4">
                    <span className="mt-[10px] w-4 h-px bg-white/60 flex-shrink-0" />
                    <span>
                      <span className="block text-white font-semibold">{b.h}</span>
                      <span className="block text-white/60 text-[14px]">{b.s}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-panel p-6 md:p-8 lg:p-10 text-ink-primary">
                <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="text-ink-primary text-[17px] font-bold">
                    Anfrage
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-eyebrow text-ink-muted">
                    Platzhalter · wird durch HubSpot-Embed ersetzt
                  </div>
                </div>

                <form
                  action="#kontakt"
                  method="post"
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <div>
                    <label className="form-label" htmlFor="firstname">Vorname</label>
                    <input id="firstname" name="firstname" type="text" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="lastname">Nachname</label>
                    <input id="lastname" name="lastname" type="text" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">E-Mail</label>
                    <input id="email" name="email" type="email" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Telefon</label>
                    <input id="phone" name="phone" type="tel" className="form-input" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="form-label" htmlFor="company">Unternehmen / Family Office</label>
                    <input id="company" name="company" type="text" className="form-input" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="form-label" htmlFor="role">Rolle</label>
                    <select id="role" name="role" className="form-input" defaultValue="">
                      <option value="" disabled>Bitte auswählen</option>
                      <option>Geschäftsführung / Vorstand</option>
                      <option>Gesellschafter / Family Office</option>
                      <option>Investor / Beteiligungsmanager</option>
                      <option>Aufsichtsrat / Beirat</option>
                      <option>HR / Personalverantwortung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="form-label" htmlFor="situation">Kurze Beschreibung der Situation</label>
                    <textarea
                      id="situation"
                      name="situation"
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Portfoliounternehmen, Rolle, Zeitrahmen. Freiwillige Angaben genügen für ein erstes Gespräch."
                    />
                  </div>

                  <div className="md:col-span-2 flex items-start gap-3">
                    <input id="privacy" name="privacy" type="checkbox" className="mt-1 accent-brand-blue-deep" required />
                    <label htmlFor="privacy" className="text-[13.5px] leading-[1.55] text-ink-secondary">
                      Einverständnis zur Kontaktaufnahme durch b+p.
                    </label>
                  </div>

                  <div className="md:col-span-2 mt-2">
                    <button type="submit" className="btn-primary w-full md:w-auto">
                      Anfrage senden
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
