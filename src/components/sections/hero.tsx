"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Download,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  heroHighlights,
  siteConfig,
  socialLinks,
  stats,
} from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const techBadges = [
  { label: "Cloud-Native", icon: Cloud, pos: "-left-5 top-8", dir: -1 },
  { label: "Kubernetes", icon: Boxes, pos: "-right-4 top-1/3", dir: 1 },
  { label: "React Native", icon: Smartphone, pos: "-left-6 bottom-28", dir: 1 },
  { label: "AI / ML", icon: BrainCircuit, pos: "-right-5 bottom-16", dir: -1 },
];

const rotatingRoles = [
  "Full-Stack Engineer",
  "Cloud-Native Architect",
  "DevOps Engineer",
  "AI Researcher",
  "Visiting Lecturer",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-card px-4 py-1.5 text-xs font-medium text-muted backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Available for impactful opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block text-muted text-lg font-medium tracking-normal sm:text-xl">
              Hi, I&apos;m Mahfoos Ahamed
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex items-center gap-2 text-base font-medium sm:text-lg"
          >
            <span className="text-muted">I&apos;m a</span>
            <RotatingRoles />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.subheadline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button variant="accent" size="lg">
                View Projects <ArrowRight />
              </Button>
            </a>
            <a href={siteConfig.resume} download>
              <Button variant="outline" size="lg">
                <Download /> Download Resume
              </Button>
            </a>
            <a href="#contact">
              <Button variant="ghost" size="lg">
                <Mail /> Let&apos;s Connect
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-accent" /> {siteConfig.location}
            </span>
            <span className="hidden h-4 w-px bg-border-soft sm:block" />
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-border-soft bg-card backdrop-blur-md transition-colors hover:border-primary/50 hover:text-accent"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 grid max-w-md grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-gradient-brand">{s.value}</div>
                <div className="mt-1 text-xs leading-tight text-muted">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Rotating gradient glow ring */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-5 rounded-[2.25rem] opacity-70 blur-2xl"
            style={{
              background:
                "conic-gradient(from 0deg, #2563eb, #06b6d4, #2563eb, #06b6d4, #2563eb)",
            }}
          />
          {/* Dashed orbit accent */}
          <motion.div
            aria-hidden
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 hidden rounded-full border border-dashed border-accent/20 lg:block"
          />

          <div className="glass relative overflow-hidden rounded-[1.75rem] p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-secondary">
              <Image
                src={siteConfig.image}
                alt="Mahfoos Ahamed"
                fill
                priority
                quality={100}
                sizes="(max-width: 1024px) 80vw, 460px"
                className="object-cover object-[50%_20%] brightness-110 contrast-105 saturate-110"
              />
              {/* subtle bottom-only fade so the card stays legible without dimming the face */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-secondary/85 to-transparent" />
              {/* soft scan-line tech sheen */}
              <motion.div
                aria-hidden
                animate={{ y: ["-120%", "120%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-accent/15 to-transparent"
              />
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-secondary/70 px-4 py-3 backdrop-blur-md">
              <div>
                <div className="text-sm font-semibold text-white">Mahfoos Ahamed</div>
                <div className="text-xs text-slate-300">Software Engineer</div>
              </div>
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <Sparkles className="size-4" />
              </span>
            </div>
          </div>

          {/* Floating tech badges */}
          {techBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, b.dir * 12, 0],
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.6 + i * 0.12 },
                scale: { duration: 0.5, delay: 0.6 + i * 0.12 },
                y: { duration: 3.6 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute z-10 hidden items-center gap-2 rounded-2xl glass px-3 py-2 text-xs font-semibold shadow-xl sm:flex ${b.pos}`}
            >
              <b.icon className="size-4 text-accent" />
              {b.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <Marquee />
      </div>
    </section>
  );
}

function RotatingRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % rotatingRoles.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-7 items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingRoles[index]}
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -22, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap font-semibold text-gradient-brand"
        >
          {rotatingRoles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function Marquee() {
  const items = [...heroHighlights, ...heroHighlights];
  return (
    <div className="relative overflow-hidden border-y border-border-soft bg-card py-3 backdrop-blur-md">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-medium text-muted"
          >
            {t}
            <span className="size-1.5 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
