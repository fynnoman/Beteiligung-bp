const steps = [
  {
    n: "01",
    title: "Rolle und Situation verstehen",
    body: "Ausgangspunkt ist nicht allein die Vakanz, sondern die Entwicklungsphase des Unternehmens, die Eigentümerstruktur sowie die konkreten Anforderungen an Rolle und Führungspersönlichkeit.",
  },
  {
    n: "02",
    title: "Interne und externe Optionen fundiert bewerten",
    body: "Executive Search kann mit strukturierten Interviews und Leadership Assessments verbunden werden. Dadurch lassen sich interne und externe Kandidaten auf einer einheitlichen Grundlage beurteilen.",
  },
  {
    n: "03",
    title: "Führungspersönlichkeiten identifizieren und gewinnen",
    body: "b+p identifiziert und adressiert geeignete Kandidatinnen und Kandidaten und begleitet den Auswahlprozess bis zur fundierten Besetzungsentscheidung.",
  },
];

export default function LPVorgehensweise() {
  return (
    <section className="section bg-white">
      <div className="container-bp">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-5">Vorgehensweise</div>
          <h2 className="text-[30px] md:text-[44px] leading-[1.08] text-ink-primary tracking-[-0.012em]">
            Suche und Auswahl{" "}
            <span className="accent-blue">aus einer Hand.</span>
          </h2>
          <p className="mt-6 text-[16.5px] leading-[1.75]">
            Je nach Ausgangslage verbinden wir Executive Search, strukturierte
            Auswahlverfahren und Leadership Assessments zu einem klaren
            Entscheidungsprozess.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 relative">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="accent-blue font-bold text-[26px] leading-none tracking-tight">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-ink-line" />
              </div>
              <h3 className="text-ink-primary text-[20px] md:text-[22px] leading-snug font-bold mb-4">
                {s.title}
              </h3>
              <p className="text-[15.5px] leading-[1.75]">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink-line">
          <div className="text-[12.5px] font-bold uppercase tracking-eyebrow text-ink-muted mb-3">
            Typische Rollen
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-ink-primary text-[15.5px] font-semibold">
            {[
              "Geschäftsführung",
              "CFO",
              "COO",
              "Finance",
              "Operations",
              "Vertrieb",
              "HR",
              "IT",
              "Technik",
            ].map((r, i, arr) => (
              <span key={r} className="flex items-center gap-6">
                {r}
                {i < arr.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-ink-line" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
