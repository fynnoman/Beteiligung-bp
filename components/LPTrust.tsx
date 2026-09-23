const stats = [
  {
    kpi: "25+",
    unit: "Jahre",
    label: "Erfahrung in der Besetzung von Fach- und Führungspositionen",
  },
  {
    kpi: ">90 %",
    unit: "Besetzungsquote",
    label: "bei Executive-Search-Mandaten",
    note: "Zeitraum und Berechnungsgrundlage vor Live-Schaltung intern bestätigen.",
  },
  {
    kpi: "National",
    unit: "& international",
    label: "Suchmandate für mittelständische Unternehmen und Schlüsselpositionen",
  },
];

export default function LPTrust() {
  return (
    <section className="section bg-white">
      <div className="container-bp">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-5">Erfahrung</div>
          <h2 className="text-[30px] md:text-[44px] leading-[1.08] text-ink-primary tracking-[-0.012em]">
            Erfahrung in{" "}
            <span className="accent-blue">Beteiligungs- und Portfoliostrukturen.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-ink-line rounded-panel overflow-hidden border border-ink-line">
          {stats.map((s) => (
            <div key={s.kpi} className="bg-white p-8 md:p-10 flex flex-col">
              <div className="accent-blue text-[38px] md:text-[48px] leading-[1.02] font-bold tracking-[-0.02em]">
                {s.kpi}
              </div>
              <div className="mt-1 text-ink-muted text-[13px] font-semibold uppercase tracking-eyebrow">
                {s.unit}
              </div>
              <div className="mt-6 pt-5 border-t border-ink-line text-ink-secondary text-[15px] leading-[1.65]">
                {s.label}
              </div>
              {s.note && (
                <div className="mt-4 text-[12px] leading-[1.55] text-ink-muted italic">
                  {s.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
