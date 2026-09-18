import Image from "next/image";

const regions = [
  { group: "Europa", items: ["Benelux", "Frankreich", "Spanien", "Polen", "Serbien"] },
  { group: "Asien", items: ["China", "Japan", "Südkorea"] },
  { group: "Amerika", items: ["USA", "Mexiko"] },
];

export default function GrowthPanel() {
  return (
    <section id="international" className="section bg-white">
      <div className="container-bp">
        <div className="relative rounded-panel overflow-hidden bg-brand-blue">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 p-10 md:p-14 lg:p-20 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow eyebrow--onblue mb-6">
                Internationale Führung für Wachstumsmärkte
              </div>
              <h2 className="text-white text-[32px] md:text-[46px] leading-[1.08] tracking-[-0.01em]">
                Country Manager, die
                <br />
                <span className="highlight-yellow">Märkte entwickeln</span> — nicht nur betreuen.
              </h2>

              <div className="mt-8 space-y-5 text-white/85 text-[16.5px] leading-[1.75] max-w-2xl">
                <p>
                  Für mittelständische Kunden aus IT, produzierender Industrie
                  und Pharma hat b+p Country Manager in zahlreichen europäischen
                  und internationalen Märkten gesucht und besetzt.
                </p>
                <p>
                  Wir betrachten eine Country-Manager-Position nicht als reine
                  Vertriebsfunktion. Entscheidend ist die Fähigkeit, einen
                  lokalen Markt zu entwickeln, Kunden und Mitarbeitende vor Ort
                  zu führen und zugleich Strategie, Kultur und Interessen des
                  Mutterunternehmens zu vertreten.
                </p>
                <p>
                  Mit systematischer Marktanalyse, internationaler
                  Direktansprache und strukturierten Auswahlverfahren schaffen
                  wir eine belastbare Entscheidungsgrundlage. Angepasst an
                  Markt, Branche und Entwicklungsphase.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl">
                {regions.map((r) => (
                  <div key={r.group} className="border-l-2 border-brand-yellow pl-4">
                    <div className="text-brand-yellow text-[11px] font-bold uppercase tracking-eyebrow mb-2">
                      {r.group}
                    </div>
                    <ul className="space-y-1 text-white/90 text-[14.5px] font-medium">
                      {r.items.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-card overflow-hidden ring-1 ring-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1400&q=80"
                  alt="Internationale Geschäftskonferenz"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-6 bottom-6 bg-white/95 backdrop-blur rounded-card p-5">
                  <div className="text-[11px] font-bold uppercase tracking-eyebrow text-brand-blue mb-2">
                    Kundensegmente
                  </div>
                  <div className="text-ink-primary text-[15px] font-semibold leading-snug">
                    IT · Produzierende Industrie · Pharma
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
