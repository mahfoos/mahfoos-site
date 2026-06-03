"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Code2,
  Compass,
  Target,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "@/components/brand-icons";
import { services, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  mentorship: UserRound,
  consulting: Compass,
  review: Code2,
  prep: Target,
};

export function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/4 hidden h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] sm:block" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Work With Me"
          title="Mentorship & consulting, 1:1"
          description="Students, juniors, and teams reach out for guidance every week. If you're stuck, building something, or growing your career, let's talk."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Compass;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
                className={cn(
                  "glass group relative overflow-hidden rounded-2xl p-7 transition-colors hover:border-primary/40",
                  service.featured && "md:row-span-1 ring-1 ring-accent/30"
                )}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                    <Icon className="size-5" />
                  </span>
                  {service.featured && (
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                      Most requested
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {service.points.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80"
                    >
                      <CheckCircle2 className="size-3.5 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl p-8 text-center sm:flex-row sm:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <Calendar className="size-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold">Book a 1:1 session</h3>
              <p className="mt-1 text-sm text-muted">
                Mentorship, consulting, a code review, or project help. Tell me what you need.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={siteConfig.booking} className="w-full sm:w-auto">
              <Button variant="accent" size="lg" className="w-full">
                Book a session <ArrowRight />
              </Button>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full">
                <LinkedinIcon className="size-4" /> Message on LinkedIn
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
