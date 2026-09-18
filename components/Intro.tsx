import Image from "next/image";

export default function Intro() {
  return (
    <section className="section bg-white">
      <div className="container-bp grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6">
          <div className="eyebrow mb-5">Ein Partner. Ein Portfolio.</div>
          <h2 className="text-[34px] md:text-[44px] leading-[1.08] text-ink-primary">
            Unterschiedliche Beteiligungen.
            <br />
            <span className="highlight-yellow">Ein gemeinsamer Anspruch</span> an Führung.
          </h2>
        </div>

        <div className="lg:col-span-6 space-y-6 text-[17px] leading-[1.75]">
          <p>
            Ein Portfolio kann Industrieunternehmen, Handelsgesellschaften,
            Technologieanbieter, Dienstleister oder internationale Wachstumsunternehmen
            umfassen. Für jede Beteiligung gelten andere Märkte und andere Anforderungen.
            Dennoch müssen Schlüsselrollen zuverlässig besetzt, Potenzialträger erkannt
            und Führungsentscheidungen belastbar getroffen werden.
          </p>
          <p>
            Dafür braucht es keinen Berater, der nur eine Funktion oder Branche kennt.
            Es braucht einen Partner, der mittelständische Geschäftsmodelle versteht,
            sich schnell in neue Wertschöpfungsketten einarbeitet und Search, Auswahl
            und Assessment aus einer Hand verbindet.
          </p>
          <p className="text-ink-primary font-semibold">
            b+p übernimmt diese Rolle als zentraler Ansprechpartner. Für einzelne
            Schlüsselpositionen ebenso wie für wiederkehrende Anforderungen im
            Beteiligungsportfolio.
          </p>
        </div>
      </div>

      {/* Feature strip */}
      <div className="container-bp mt-20">
        <div className="grid md:grid-cols-4 gap-px bg-ink-line rounded-panel overflow-hidden border border-ink-line">
          {[
            { k: "Executive Search", v: "Schlüsselpositionen im Mittelstand." },
            { k: "Management Assessment", v: "Belastbare Führungsentscheidungen." },
            { k: "Potenzialanalyse", v: "Interne Talente wirksam einsetzen." },
            { k: "Internationale Suchen", v: "Wachstumsmärkte personell absichern." },
          ].map((f) => (
            <div key={f.k} className="bg-white p-8">
              <div className="text-brand-blue text-sm font-bold uppercase tracking-eyebrow mb-3">
                {f.k}
              </div>
              <div className="text-ink-primary text-[15px] leading-relaxed">{f.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
