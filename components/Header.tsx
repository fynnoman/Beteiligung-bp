import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-ink-line/60 backdrop-blur">
      <div className="container-bp flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-brand-blue tracking-tight">
            b<span className="text-brand-yellow">+</span>p
          </span>
          <span className="hidden md:inline text-[11px] font-semibold uppercase tracking-eyebrow text-ink-muted border-l border-ink-line pl-3 ml-1">
            Personalberatung
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 text-[15px] font-semibold text-ink-primary">
          <a href="#leistungen" className="hover:text-brand-blue transition-colors">Leistungen</a>
          <a href="#international" className="hover:text-brand-blue transition-colors">International</a>
          <a href="#situationen" className="hover:text-brand-blue transition-colors">Situationen</a>
          <a href="#mittelstand" className="hover:text-brand-blue transition-colors">Mittelstand</a>
          <a href="#kontakt" className="hover:text-brand-blue transition-colors">Kontakt</a>
        </nav>

        <a href="#kontakt" className="btn-primary !py-3 !px-6 !text-[14px]">
          Beteiligung besprechen
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}
