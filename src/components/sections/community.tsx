"use client";

import { motion } from "framer-motion";
import { Mic, Users2, GraduationCap, Lightbulb, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { community, communityStats } from "@/lib/data";

const icons: LucideIcon[] = [GraduationCap, Users2, Lightbulb, Mic];

export function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Community & Teaching"
          title="Sharing knowledge, growing engineers"
          description="Lecturing, mentoring, supervising, and speaking. Investing in the people behind the code."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {community.map((c, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 transition-colors hover:border-primary/40"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-8 grid gap-6 rounded-2xl p-8 sm:grid-cols-2"
        >
          {communityStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-gradient-brand sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
