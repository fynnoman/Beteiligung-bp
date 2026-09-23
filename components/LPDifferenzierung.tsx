export default function LPDifferenzierung() {
  return (
    <section className="relative overflow-hidden bg-[#001F3E] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(0,100,181,0.28),transparent_60%)]" />

      <div className="relative container-bp py-24 md:py-32">
        <div className="max-w-4xl">
          <h2 className="text-white text-[30px] md:text-[48px] lg:text-[56px] leading-[1.06] tracking-[-0.02em] font-bold">
            Eine neue Eigentümerstruktur macht aus einem mittelständischen
            Unternehmen{" "}
            <span className="text-[#5FA9DE]">keinen Konzern.</span>
          </h2>

          <div className="mt-10 space-y-6 text-white/80 text-[17px] md:text-[18px] leading-[1.75] max-w-3xl">
            <p>
              Auch nach dem Einstieg eines Family Offices, einer
              Beteiligungsgesellschaft oder eines Private-Equity-Investors
              bleiben Entscheidungswege, Unternehmenskultur und operative
              Verantwortung häufig mittelständisch geprägt.
            </p>
            <p>
              Gleichzeitig steigen die Anforderungen an Wachstum, Transparenz,
              Reporting und Governance. Führungskräfte müssen daher sowohl dem
              operativen Geschäft als auch den Anforderungen von
              Gesellschaftern und Investoren gerecht werden.
            </p>
            <p className="text-white font-semibold">
              b+p beurteilt Führungspersönlichkeiten vor diesem Hintergrund:
              anhand ihrer Erfahrung, ihrer persönlichen Eignung und ihrer
              Fähigkeit, den spezifischen Anforderungen der jeweiligen
              Unternehmens- und Eigentümersituation gerecht zu werden.
            </p>
          </div>

          <div className="mt-12">
            <a href="#kontakt" className="btn-onblue">
              Erstgespräch anfragen
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
