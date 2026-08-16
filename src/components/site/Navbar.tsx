import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hairline bg-navy-deep/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center" aria-label="Future212 home">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-foreground/70 transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#consultation"
            className="rounded-sm border border-gold/40 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            Book a Free Consultation
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden text-foreground"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-hairline bg-navy-deep/95 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-3 text-base text-foreground/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-sm bg-gold px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Book a Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
