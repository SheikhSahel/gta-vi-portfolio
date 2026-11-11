"use client";

import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-accent-pink">{eyebrow}</p>
      <h2 className="text-5xl leading-none text-white sm:text-7xl">{title}</h2>
      {copy && <p className="mt-5 max-w-xl text-base leading-7 text-white/55">{copy}</p>}
    </motion.div>
  );
}
