"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { LinkedinIcon as Linkedin } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[100px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-accent/20 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get in touch
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-gradient-brand">impactful</span> together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
              Whether it&apos;s a cloud-native platform, a full-stack product, or an
              AI-powered idea, I&apos;d love to hear about it.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${siteConfig.email}`}>
                <Button variant="accent" size="lg">
                  <Mail /> Email Me <ArrowRight />
                </Button>
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg">
                  <Linkedin /> Connect on LinkedIn
                </Button>
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <ContactCard
                icon={<Mail className="size-4" />}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactCard
                icon={<MapPin className="size-4" />}
                label="Location"
                value={siteConfig.location}
              />
              <ContactCard
                icon={<Linkedin className="size-4" />}
                label="LinkedIn"
                value="in/mahfoos-ahamed"
                href={siteConfig.linkedin}
              />
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
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
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass flex h-full flex-col items-center gap-2 rounded-2xl p-5 transition-colors hover:border-primary/40">
      <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
        {icon}
      </span>
      <div className="text-xs uppercase tracking-widest text-muted">{label}</div>
      <div className="break-all text-sm font-medium">{value}</div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
