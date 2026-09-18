const rows = [
  {
    situation: "Nachfolge",
    contribution:
      "Anforderungsprofil, interne Potenzialanalyse, externer Marktvergleich und Executive Search.",
  },
  {
    situation: "Neuakquisition",
    contribution:
      "Rollenklärung, strukturierte Managementbewertung und Besetzung kritischer Funktionen.",
  },
  {
    situation: "Wachstum",
    contribution:
      "Aufbau oder Verstärkung der Geschäftsführung und zweiten Führungsebene.",
  },
  {
    situation: "Buy-and-Build",
    contribution:
      "Integrations-, Finance-, Operations-, Vertriebs- und HR-Rollen.",
  },
  {
    situation: "Internationalisierung",
    contribution: "Country Manager und lokale Marktverantwortliche.",
  },
  {
    situation: "Transformation",
    contribution:
      "Führungskräfte für neue Geschäftsmodelle, Digitalisierung oder operative Neuausrichtung.",
  },
  {
    situation: "Wiederkehrender Portfoliobedarf",
    contribution:
      "Zentraler Ansprechpartner und einheitliche Qualitätsstandards über mehrere Beteiligungen.",
  },
];

export default function SituationTable() {
  return (
    <section id="situationen" className="section bg-white">
      <div className="container-bp">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-5">Anwendungsfälle</div>
          <h2 className="text-[32px] md:text-[46px] leading-[1.08] text-ink-primary">
            Wann wir <span className="highlight-yellow">Beteiligungen</span> unterstützen.
          </h2>
          <p className="mt-6 text-[16.5px] leading-relaxed">
            Jede Situation im Portfolio stellt andere Anforderungen an Führung.
            Diese Übersicht zeigt, wie b+p typische Konstellationen mittelständischer
            Beteiligungen begleitet — vom einmaligen Mandat bis zu wiederkehrendem
            Portfoliobedarf.
          </p>
        </div>

        <div className="rounded-panel border border-ink-line overflow-hidden">
          <div className="grid grid-cols-12 bg-brand-blue text-white px-6 md:px-10 py-5">
            <div className="col-span-4 md:col-span-3 text-[12px] font-bold uppercase tracking-eyebrow">
              Situation
            </div>
            <div className="col-span-8 md:col-span-9 text-[12px] font-bold uppercase tracking-eyebrow">
              Typischer Beitrag von b+p
            </div>
          </div>

          <div className="divide-y divide-ink-line">
            {rows.map((r) => (
              <div
                key={r.situation}
                className="grid grid-cols-12 items-start px-6 md:px-10 py-6 hover:bg-surface-soft transition-colors"
              >
                <div className="col-span-4 md:col-span-3 pr-4">
                  <div className="text-ink-primary font-bold text-[16px] md:text-[17px] leading-snug">
                    {r.situation}
                  </div>
                </div>
                <div className="col-span-8 md:col-span-9 text-[15.5px] leading-[1.7]">
                  {r.contribution}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
