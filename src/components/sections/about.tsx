"use client";

import { motion } from "framer-motion";
import { Briefcase, Cloud, Cpu, GraduationCap, Layers, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { aboutParagraphs, aboutRoles, passions } from "@/lib/data";

const passionIcons = [Layers, Cloud, Cpu, Briefcase, GraduationCap, Users];

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering scalable systems & people"
          description="A software engineer who builds for the cloud, ships full-stack, and invests in the next generation of engineers."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-muted sm:text-lg"
              >
                {p}
              </p>
            ))}

            <div className="pt-2">
              <div className="text-sm font-semibold uppercase tracking-widest text-accent">
                Currently
              </div>
              <ul className="mt-3 space-y-2">
                {aboutRoles.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-sm">
                    <span className="size-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {passions.map((p, i) => {
              const Icon = passionIcons[i % passionIcons.length];
              return (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="glass group rounded-2xl p-5 transition-colors hover:border-primary/40"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent transition-transform group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <div className="mt-4 text-sm font-semibold leading-snug">{p}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
