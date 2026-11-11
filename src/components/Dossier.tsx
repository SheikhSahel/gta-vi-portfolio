"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";

export function Dossier() {
  return (
    <section id="dossier" className="section-shell">
      <SectionHeading eyebrow="02 / THE DOSSIER" title="The story so far." copy="A frontend developer from Bangladesh, building sharp interfaces where design, motion, and performance meet." />
      <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
        <div className="glass-card relative min-h-[430px] overflow-hidden">
          <Image src="/profile.jpg" alt="Sheikh Sahel in Vice City" fill unoptimized sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-center grayscale-[12%] saturate-[1.1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6"><p className="editorial-title text-3xl text-white">THE OPERATOR</p><p className="mt-1 text-[10px] tracking-[.25em] text-accent-amber">SHEIKH SAHEL / FRONT-END</p></div>
        </div>
        <div className="glass-card relative overflow-hidden p-7 sm:p-10">
          <span className="absolute right-8 top-8 text-5xl text-accent-pink/20">✦</span>
          <p className="max-w-lg text-2xl leading-snug text-white sm:text-4xl">“I build the layer between a great idea and the people who use it.”</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">I’m a junior frontend developer passionate about translating design into thoughtful React interfaces. My sweet spot is the intersection of clean component architecture, expressive motion, and measurable performance.</p>
          <div className="mt-12 flex items-center gap-4"><div className="h-px w-12 bg-accent-amber" /><span className="text-xs tracking-[0.2em] text-white/45">MY OPERATING SYSTEM</span></div>
        </div>
        <div className="col-span-full grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="glass-card flex min-h-40 min-w-0 flex-col justify-between p-5 sm:min-h-44 sm:p-6">
              <span className="font-display text-4xl text-accent-amber sm:text-5xl">{stat.value}</span><span className="max-w-full whitespace-normal text-[10px] leading-4 tracking-[0.12em] text-white/45 sm:text-xs">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
