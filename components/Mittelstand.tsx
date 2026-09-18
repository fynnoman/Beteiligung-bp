import Image from "next/image";

export default function Mittelstand() {
  return (
    <section id="mittelstand" className="section bg-surface-soft">
      <div className="container-bp grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-panel overflow-hidden card-shadow">
            <Image
              src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=1400&q=80"
              alt="Mittelständische Führungskraft"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute left-6 bottom-6 bg-white px-4 py-2 rounded-full text-[11px] font-bold tracking-eyebrow uppercase text-brand-blue">
              Inhabergeführter Mittelstand
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="eyebrow mb-5">Unser Verständnis</div>
          <h2 className="text-[30px] md:text-[42px] leading-[1.1] text-ink-primary">
            Mittelstand ist für uns keine Unternehmensgröße,
            <br />
            <span className="highlight-yellow">sondern ein Geschäftsverständnis</span>.
          </h2>

          <div className="mt-8 space-y-6 text-[16.5px] leading-[1.75]">
            <p>
              In inhabergeführten Unternehmen sind Verantwortung, Entscheidungswege
              und Kultur anders organisiert als in Konzernen. Geschäftsführung und
              Gesellschafter arbeiten enger zusammen, Führungskräfte übernehmen
              häufig breitere Rollen und persönliche Passung hat unmittelbare
              wirtschaftliche Wirkung.
            </p>
            <p>
              b+p kennt diese Realität aus langjähriger Zusammenarbeit mit
              mittelständischen Unternehmen. Wir verstehen operative Wertschöpfung
              ebenso wie die Erwartungen von Gesellschaftern und Investoren.
            </p>
            <p className="text-ink-primary font-semibold">
              Deshalb suchen und beurteilen wir Führungskräfte nicht nach Titel,
              sondern danach, ob sie in der konkreten Organisation Wirkung
              entfalten können.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
