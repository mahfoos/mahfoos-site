"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks, socialLinks } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // close the mobile menu if the user starts scrolling
      setOpen((isOpen) => (isOpen ? false : isOpen));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
            scrolled || open
              ? "glass shadow-lg shadow-black/5"
              : "border border-transparent"
          )}
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-semibold"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Terminal className="size-4" />
            </span>
            <span>
              Mahfoos<span className="text-accent">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:block">
              <Button size="sm" variant="accent">
                Let&apos;s Connect
              </Button>
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-border-soft bg-card backdrop-blur-md lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <>
              {/* backdrop to catch outside taps */}
              <motion.button
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 -z-10 h-screen w-screen cursor-default bg-background/40 lg:hidden"
              />
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    {link.label}
                  </motion.a>
                ))}

                <a href="#contact" onClick={() => setOpen(false)} className="mt-2">
                  <Button variant="accent" size="md" className="w-full">
                    Let&apos;s Connect
                  </Button>
                </a>

                <div className="mt-3 flex items-center justify-center gap-2 border-t border-border-soft pt-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      onClick={() => setOpen(false)}
                      className="grid size-10 place-items-center rounded-full border border-border-soft text-muted transition-colors hover:border-primary/50 hover:text-accent"
                    >
                      <s.icon className="size-4" />
                    </a>
                  ))}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
