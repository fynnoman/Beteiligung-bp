import Image from "next/image";

type Service = {
  eyebrow: string;
  title: string;
  highlight?: string;
  body: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bullets?: string[];
  tag?: string;
};

const services: Service[] = [
  {
    eyebrow: "Leistung 01",
    title: "Executive Search für Schlüsselpositionen",
    highlight: "Schlüsselpositionen",
    body: (
      <>
        <p>
          Wir besetzen Geschäftsführungs-, Bereichsleitungs- und
          erfolgskritische Spezialistenfunktionen im Mittelstand. Dabei
          verbinden wir systematische Marktanalyse, persönliche Direktansprache
          und strukturierte Auswahl zu einem nachvollziehbaren Prozess.
        </p>
        <p className="mt-4">
          Nicht die schnellste Kandidatenliste entscheidet, sondern die
          Passung zur Aufgabe, zur Unternehmenskultur und zur nächsten
          Entwicklungsphase.
        </p>
      </>
    ),
    bullets: [
      "Geschäftsführung, CEO und kaufmännische Leitung",
      "CFO, Finance, Controlling und M&A-nahe Funktionen",
      "COO, Operations, Produktion und Supply Chain",
      "Vertrieb, Business Development und internationale Marktverantwortung",
      "HR, IT, Technik und weitere Schlüsselbereiche",
    ],
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Executive Search Beratung",
    tag: "Typische Rollen",
  },
  {
    eyebrow: "Leistung 02",
    title: "Führungskräfte- und Leadership-Assessments",
    highlight: "Leadership-Assessments",
    reverse: true,
    body: (
      <>
        <p>
          Ob bei einer Nachfolge, einer Akquisition oder vor einer neuen
          Wachstumsphase: Führungsentscheidungen sollten nicht allein auf
          Erfahrung und persönlichem Eindruck beruhen.
        </p>
        <p className="mt-4">
          b+p übersetzt strategische Anforderungen in klare Kompetenzprofile
          und bewertet vorhandene oder externe Kandidaten mit strukturierten
          Interviews, eignungsdiagnostischen Instrumenten und nachvollziehbaren
          Entscheidungskriterien.
        </p>
        <p className="mt-4 text-ink-primary font-semibold">
          Ziel ist keine theoretische Persönlichkeitsbeschreibung, sondern eine
          belastbare Antwort auf die Frage: Passt diese Führungskraft zur
          Aufgabe und zur nächsten Unternehmensphase?
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Führungskräfte-Assessment",
  },
  {
    eyebrow: "Leistung 03",
    title: "Strukturierte Auswahlprozesse",
    highlight: "Auswahlprozesse",
    body: (
      <>
        <p>
          Wir gestalten Auswahlprozesse so, dass Investor, Gesellschafter und
          Management auf derselben Entscheidungsgrundlage arbeiten. Alle
          Beteiligten sehen dieselben Kriterien, dieselben Fakten und dasselbe
          Kompetenzbild.
        </p>
      </>
    ),
    bullets: [
      "Rollen- und Anforderungsanalyse",
      "Kompetenz- und Erfolgsprofil",
      "Strukturierte Interviews und Interviewleitfäden",
      "Management- und Kandidatenvergleich",
      "Eignungsdiagnostische Verfahren",
      "Referenzprüfung und Entscheidungsmoderation",
      "Begleitung bis zur Integration",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Strukturiertes Auswahlverfahren",
    tag: "Prozess-Bausteine",
  },
  {
    eyebrow: "Leistung 04",
    title: "Internationale Expansion und Country Manager",
    highlight: "Country Manager",
    reverse: true,
    body: (
      <>
        <p>
          Neue Märkte erfordern Führungskräfte, die lokale Kunden, Kultur und
          Marktmechanik verstehen und zugleich Strategie, Werte und
          Steuerungslogik des Mutterunternehmens vertreten.
        </p>
        <p className="mt-4">
          b+p verfügt über umfangreiche Erfahrung bei der internationalen
          Besetzung von Country Managern und weiteren Marktverantwortlichen.
          Wir unterstützen mittelständische Unternehmen dabei, Führung in
          neuen oder wachsenden Ländermärkten aufzubauen und internationale
          Expansion personell abzusichern.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Internationale Expansion",
  },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-[10px] w-[6px] h-[6px] rounded-full bg-brand-blue flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function Services() {
  return (
    <section id="leistungen" className="section bg-surface-soft">
      <div className="container-bp mb-20 max-w-3xl">
        <div className="eyebrow mb-5">Was b+p für Beteiligungsunternehmen leistet</div>
        <h2 className="text-[34px] md:text-[46px] leading-[1.08] text-ink-primary">
          Vier Bausteine für Führung im{" "}
          <span className="highlight-yellow">Beteiligungsportfolio</span>.
        </h2>
      </div>

      <div className="space-y-24 md:space-y-32">
        {services.map((s, idx) => {
          const highlighted = s.highlight
            ? s.title.split(s.highlight).map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="highlight-yellow">{s.highlight}</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )
            : s.title;

          return (
            <div key={idx} className="container-bp">
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${s.reverse ? "lg:[&>*:first-child]:col-start-7" : ""}`}>
                <div className={`lg:col-span-6 ${s.reverse ? "lg:order-2" : ""}`}>
                  <div className="eyebrow mb-4">{s.eyebrow}</div>
                  <h3 className="text-[28px] md:text-[36px] leading-[1.12] text-ink-primary mb-6">
                    {highlighted}
                  </h3>
                  <div className="text-[16.5px] leading-[1.75]">{s.body}</div>

                  {s.bullets && (
                    <div className="mt-8">
                      {s.tag && (
                        <div className="text-[12.5px] font-bold uppercase tracking-eyebrow text-ink-muted mb-4">
                          {s.tag}
                        </div>
                      )}
                      <ul className="space-y-3 text-[15.5px] text-ink-primary">
                        {s.bullets.map((b) => (
                          <Bullet key={b}>{b}</Bullet>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className={`lg:col-span-6 ${s.reverse ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-panel overflow-hidden card-shadow">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-panel" />
                    <div className="absolute left-6 top-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-[11px] font-bold tracking-eyebrow uppercase text-brand-blue">
                      {s.eyebrow}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
