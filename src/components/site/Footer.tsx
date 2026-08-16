import { CONTACT_EMAIL } from "@/config/integrations";
import { navItems } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-navy-deep px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/55">
              Future212 designs and implements AI-powered automation systems that remove repetitive
              work, connect business tools, and help companies operate with precision.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs tracking-[0.2em] text-gold uppercase">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs tracking-[0.2em] text-gold uppercase">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-foreground/60">
              <li>
                <a className="transition-colors hover:text-gold" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>future212.pro</li>
              <li>
                <a className="transition-colors hover:text-gold" href="#consultation">
                  Book a free consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline pt-8 text-xs text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Future212. All rights reserved.</p>
          <p>AI · Automation · Integrations · Intelligent Workflows</p>
        </div>
      </div>
    </footer>
  );
}
