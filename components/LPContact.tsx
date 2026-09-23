export default function LPContact() {
  return (
    <section id="kontakt" className="section bg-surface-soft scroll-mt-24">
      <div className="container-bp">
        <div className="relative rounded-panel overflow-hidden bg-[#001F3E] text-white card-shadow">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(0,100,181,0.28),transparent_60%)]" />

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
              <div className="bg-white rounded-panel p-8 md:p-10 lg:p-12 text-ink-primary min-h-[420px] flex flex-col">
                <div className="text-ink-primary text-[17px] font-bold mb-6">
                  Anfrage
                </div>
                <div className="flex-1 rounded-card border border-dashed border-ink-line/70 flex items-center justify-center text-center p-8">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-eyebrow text-ink-muted mb-3">
                      HubSpot-Form-Slot
                    </div>
                    <div className="text-ink-secondary text-[15px] leading-[1.6] max-w-xs mx-auto">
                      Im HubSpot-Kontakt-Modul wählt der Redakteur das gewünschte Formular aus. Es wird an dieser Stelle gerendert.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
