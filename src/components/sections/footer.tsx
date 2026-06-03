import { Terminal } from "lucide-react";
import { navLinks, siteConfig, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-soft py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <a href="#home" className="flex items-center gap-2 font-semibold">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <Terminal className="size-4" />
              </span>
              Mahfoos Ahamed<span className="text-accent">.</span>
            </a>
            <p className="max-w-xs text-center text-sm text-muted md:text-left">
              Building cloud-native &amp; scalable software solutions from Colombo, Sri Lanka.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-10 place-items-center rounded-full border border-border-soft bg-card backdrop-blur-md transition-colors hover:border-primary/50 hover:text-accent"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border-soft pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
