"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications, education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Credentials"
          title="Education & certifications"
          description="Academic foundations and industry recognition behind the engineering."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <GraduationCap className="size-4" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 transition-colors hover:border-primary/40"
                >
                  <div className="text-lg font-semibold">{e.degree}</div>
                  <div className="mt-1 text-sm text-accent">{e.school}</div>
                  {e.note && (
                    <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {e.note}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
              <Award className="size-4" /> Certifications & Awards
            </h3>
            <div className="space-y-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-primary/40"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent transition-transform group-hover:scale-110">
                    <Award className="size-5" />
                  </span>
                  <div>
                    <div className="font-semibold leading-snug">{c.title}</div>
                    <div className="mt-0.5 text-sm text-muted">{c.issuer}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
