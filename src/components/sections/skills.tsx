"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Cloud,
  Database,
  Layout,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/lib/data";

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  Mobile: Smartphone,
  "Cloud & DevOps": Cloud,
  Databases: Database,
  "AI & Data": Boxes,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I build & ship with"
          description="A full-spectrum toolkit spanning frontend, backend, mobile, cloud, data, and AI."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? Boxes;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-primary/40"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold">{group.category}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-soft bg-foreground/[0.03] px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
