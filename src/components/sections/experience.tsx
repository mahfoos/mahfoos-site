"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 hidden h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] sm:block" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="A track record of building & teaching"
          description="From enterprise engineering to mentoring undergraduates, delivering measurable impact across roles."
        />

        <div className="relative mt-16 pl-8 sm:pl-0">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${
                    left ? "" : "sm:[&>*:first-child]:col-start-2"
                  }`}
                >
                  {/* node */}
                  <span className="absolute -left-8 top-1.5 grid size-4 place-items-center rounded-full bg-background sm:left-1/2 sm:-translate-x-1/2">
                    <span
                      className={`size-3 rounded-full ${
                        exp.current
                          ? "bg-gradient-to-br from-primary to-accent ring-4 ring-accent/20"
                          : "bg-muted/50 ring-4 ring-foreground/5"
                      }`}
                    />
                  </span>

                  <div
                    className={`glass rounded-2xl p-6 transition-colors hover:border-primary/40 ${
                      left ? "sm:text-right" : "sm:col-start-2"
                    }`}
                  >
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        left ? "sm:justify-end" : ""
                      }`}
                    >
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      {exp.current && (
                        <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm font-medium text-accent">
                      {exp.company}
                    </div>
                    {exp.period && (
                      <div className="mt-0.5 text-xs text-muted">{exp.period}</div>
                    )}
                    <ul
                      className={`mt-4 space-y-2 ${
                        left ? "sm:ml-auto" : ""
                      }`}
                    >
                      {exp.achievements.map((a) => (
                        <li
                          key={a}
                          className={`flex items-start gap-2 text-sm text-muted ${
                            left ? "sm:flex-row-reverse sm:text-right" : ""
                          }`}
                        >
                          <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
