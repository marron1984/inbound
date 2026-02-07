"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cream bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg tracking-widest text-text-on-dark">
              TASHIMA CLINIC
            </p>
            <p className="mt-1 text-[10px] tracking-[0.3em] text-gold uppercase">
              Regenerative Stay
            </p>
            <p className="mt-4 max-w-xs text-xs font-light leading-relaxed text-text-muted">
              A curated fusion of luxury hospitality, precision nutrition, and
              regenerative medicine in the heart of Osaka.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase">
                Explore
              </p>
              <a
                href="#philosophy"
                className="text-sm font-light text-text-light/60 transition-colors hover:text-gold"
              >
                Philosophy
              </a>
              <a
                href="#pillars"
                className="text-sm font-light text-text-light/60 transition-colors hover:text-gold"
              >
                The Three Pillars
              </a>
              <a
                href="#contact"
                className="text-sm font-light text-text-light/60 transition-colors hover:text-gold"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase">
                Partners
              </p>
              <span className="text-sm font-light text-text-light/60">
                Tashima Clinic
              </span>
              <span className="text-sm font-light text-text-light/60">
                DHP City Development
              </span>
              <span className="text-sm font-light text-text-light/60">
                Kanoya
              </span>
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gold/10 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-[11px] font-light text-text-muted">
              &copy; {currentYear} Tashima Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[11px] font-light text-text-muted transition-colors hover:text-gold"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[11px] font-light text-text-muted transition-colors hover:text-gold"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
