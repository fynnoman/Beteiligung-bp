const items = [
  {
    title: "Mittelständische Strukturen verstehen",
    body: "Mittelständische Unternehmen unterscheiden sich in Entscheidungswegen, Verantwortungsbreite und Unternehmenskultur wesentlich von Konzernstrukturen. Diese Besonderheiten fließen unmittelbar in Suche und Auswahl ein.",
  },
  {
    title: "Personalentscheidungen methodisch fundieren",
    body: "Executive Search wird mit strukturierten Interviews, definierten Kompetenzprofilen und, wo sinnvoll, eignungsdiagnostischen Verfahren verbunden.",
  },
  {
    title: "Kontinuität über mehrere Beteiligungen hinweg",
    body: "Unterschiedliche Unternehmen und unterschiedliche Rollen. Mit einem Ansprechpartner, der Strukturen, Anforderungen und Entscheidungslogiken bereits kennt.",
  },
];

export default function LPWhy() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-bp">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-5">Warum b+p</div>
          <h2 className="text-[30px] md:text-[44px] leading-[1.08] text-ink-primary tracking-[-0.012em]">
            Warum Beteiligungsunternehmen{" "}
            <span className="accent-blue">mit b+p arbeiten.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-white rounded-panel border border-ink-line p-7 md:p-8"
            >
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-ink-primary text-[19px] md:text-[20px] leading-snug font-bold mb-4">
                {it.title}
              </h3>
              <p className="text-[15.5px] leading-[1.75] text-ink-secondary">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
