import Image from "next/image";

export default function LPHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-ink-line/60">
      <div className="container-bp flex items-center justify-between py-5">
        <div className="flex items-center">
          <Image
            src="/bp-logo.jpg"
            alt="b+p Beratung Personal"
            width={238}
            height={119}
            priority
            className="h-11 md:h-12 w-auto"
          />
        </div>

        <a
          href="tel:+4968176199-0"
          className="inline-flex items-center gap-2 text-ink-primary font-semibold text-[14px] md:text-[15px] hover:text-brand-blue transition-colors"
        >
          <svg className="w-4 h-4 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span className="tracking-tight">0681 / 76199-0</span>
        </a>
      </div>
    </header>
  );
}
