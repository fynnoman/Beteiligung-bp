const cards = [
  {
    n: "01",
    title: "Nachfolge und Schlüsselpositionen",
    body: "Eine Position in Geschäftsführung, Finance oder einer anderen unternehmenskritischen Funktion ist neu zu besetzen. Intern oder extern.",
  },
  {
    n: "02",
    title: "Wachstum und Professionalisierung",
    body: "Mit Wachstum und Professionalisierung verändern sich Strukturen, Verantwortlichkeiten und Anforderungen an das Führungsteam.",
  },
  {
    n: "03",
    title: "Portfolioübergreifender Bedarf",
    body: "Führungsfragen entstehen über verschiedene Beteiligungen hinweg. Ein zentraler Ansprechpartner schafft Kontinuität und kennt relevante Strukturen, Anforderungen und Entscheidungswege.",
  },
];

export default function LPProblem() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-bp">
        <div className="max-w-3xl mb-14">
          <h2 className="text-[30px] md:text-[42px] leading-[1.1] text-ink-primary tracking-[-0.012em]">
            Jede Beteiligung ist individuell.{" "}
            <span className="accent-blue">Führungsfragen kehren dennoch wieder.</span>
          </h2>
          <div className="mt-7 space-y-5 text-[16.5px] leading-[1.75]">
            <p>
              Nachfolge, Wachstum, Professionalisierung, Buy-and-Build oder
              Internationalisierung stellen Portfoliounternehmen immer wieder
              vor neue Personalentscheidungen.
            </p>
            <p>
              Gleichzeitig unterscheiden sich Geschäftsmodell, Kultur und
              Führungssituation jeder Beteiligung.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {cards.map((c) => (
            <div
              key={c.n}
              className="bg-white rounded-panel border border-ink-line p-7 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="accent-blue font-bold text-[13px] tracking-eyebrow">
                  {c.n}
                </span>
                <span className="h-px flex-1 bg-ink-line" />
              </div>
              <h3 className="text-ink-primary text-[19px] md:text-[20px] leading-snug font-bold mb-4">
                {c.title}
              </h3>
              <p className="text-[15.5px] leading-[1.7] text-ink-secondary">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
