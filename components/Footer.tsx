export default function Footer() {
  return (
    <footer className="bg-white border-t border-ink-line">
      <div className="container-bp py-14 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-extrabold text-brand-blue tracking-tight">
              b<span className="text-brand-yellow">+</span>p
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-ink-muted border-l border-ink-line pl-3">
              Personalberatung
            </span>
          </div>
          <p className="mt-6 text-[15px] leading-relaxed max-w-md">
            Executive Search und Leadership Advisory für Family Offices,
            Beteiligungsgesellschaften und Portfoliounternehmen des inhabergeführten
            Mittelstands.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] font-bold uppercase tracking-eyebrow text-ink-muted mb-4">
            Leistungen
          </div>
          <ul className="space-y-2 text-[14.5px] text-ink-primary">
            <li><a href="#leistungen" className="hover:text-brand-blue transition-colors">Executive Search</a></li>
            <li><a href="#leistungen" className="hover:text-brand-blue transition-colors">Management Assessment</a></li>
            <li><a href="#leistungen" className="hover:text-brand-blue transition-colors">Potenzialanalyse</a></li>
            <li><a href="#international" className="hover:text-brand-blue transition-colors">Internationale Suchen</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-[11px] font-bold uppercase tracking-eyebrow text-ink-muted mb-4">
            Kontakt
          </div>
          <ul className="space-y-2 text-[14.5px] text-ink-primary">
            <li>b+p Personalberatung</li>
            <li>kontakt@b-p.de</li>
            <li>+49 (0) 000 000 000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-bp py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[13px] text-ink-muted">
          <div>© {new Date().getFullYear()} b+p Personalberatung — Executive Search &amp; Leadership Advisory</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-blue transition-colors">Impressum</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
