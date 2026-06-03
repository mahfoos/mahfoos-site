"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { blogPosts, siteConfig } from "@/lib/data";

export function Blog() {
  return (
    <section id="blog" className="relative py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on engineering & architecture"
          description="Practical write-ups on cloud-native systems, Kubernetes, AI engineering, and modern full-stack development, published on Medium."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass group flex flex-col rounded-2xl p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border-soft bg-foreground/[0.03] px-3 py-1 text-xs font-medium text-accent">
                  {post.tag}
                </span>
                <ArrowUpRight className="size-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border-soft pt-4 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="size-3.5" /> {post.date}
                </span>
                <span className="font-medium text-accent">Read on Medium ↗</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={siteConfig.medium} target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg">
              Read all articles on Medium <ArrowUpRight />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
