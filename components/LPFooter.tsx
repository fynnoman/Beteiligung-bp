import Image from "next/image";

export default function LPFooter() {
  return (
    <footer className="bg-white border-t border-ink-line">
      <div className="container-bp py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Image
          src="/bp-logo.jpg"
          alt="b+p Beratung Personal"
          width={238}
          height={119}
          className="h-10 w-auto"
        />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13.5px] text-ink-muted">
          <span>© {new Date().getFullYear()} b+p Beratung Personal</span>
          <a href="#" className="hover:text-brand-blue transition-colors">Impressum</a>
          <a href="#" className="hover:text-brand-blue transition-colors">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
