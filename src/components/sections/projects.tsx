"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All", "AI & ML", "Cloud & Backend", "Mobile"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects with real-world impact"
          description="Selected work across AI, cloud-native backends, and cross-platform mobile."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === f
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                  : "border border-border-soft bg-card text-muted backdrop-blur-md hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="glass group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-colors hover:border-primary/40"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

      <div className="flex items-start justify-between">
        <span className="rounded-full border border-border-soft bg-foreground/[0.03] px-3 py-1 text-xs font-medium text-accent">
          {project.category}
        </span>
        <ArrowUpRight className="size-5 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
      </div>

      <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.impact && (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.impact.map((imp) => (
            <span
              key={imp}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400"
            >
              <TrendingUp className="size-3.5" />
              {imp}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-2 border-t border-border-soft pt-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-foreground/[0.04] px-2.5 py-1 text-xs font-medium text-foreground/80"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
