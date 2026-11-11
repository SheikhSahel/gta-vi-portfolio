"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PROJECTS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Missions() {
  const [filter, setFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);
  const categories = ["ALL", ...Array.from(new Set(PROJECTS.map((project) => project.category)))];
  const visibleProjects = useMemo(() => filter === "ALL" ? PROJECTS : PROJECTS.filter((project) => project.category === filter), [filter]);

  useEffect(() => {
    if (!selectedProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="missions" className="section-shell">
      <SectionHeading eyebrow="03 / SELECTED MISSIONS" title="The work." copy="Selected interfaces and experiments from the portfolio archive. Open a card to visit the live reference or explore the source." />
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((category) => (
          <button key={category} type="button" onClick={() => setFilter(category)} aria-pressed={filter === category} className={`rounded-full border px-4 py-2 text-[10px] tracking-[0.16em] transition ${filter === category ? "border-accent-amber bg-accent-amber text-black" : "border-white/15 text-white/50 hover:border-accent-pink hover:text-white"}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="mb-5 flex items-center justify-between gap-4 text-[10px] tracking-[0.18em] text-white/35">
        <p aria-live="polite">SHOWING {String(visibleProjects.length).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")} MISSIONS</p>
        <p className="hidden text-accent-turquoise sm:block">SELECT A FILE TO INSPECT</p>
      </div>
      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
        {visibleProjects.map((project, index) => (
          <motion.article layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .3 }} key={project.id} aria-labelledby={`${project.id}-title`} className={`project-card group ${index === 0 ? "md:col-span-2" : ""}`}>
            <div className="project-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 20%, rgba(10,10,12,.96) 100%), url(${project.image})` }} />
            <div className="relative flex min-h-[430px] flex-col p-6 sm:min-h-[390px] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="tag max-w-[calc(100%-3.5rem)] break-words">{project.category}</span>
                <span className="flex shrink-0 items-center gap-2 font-display text-2xl text-white/30"><span className="h-px w-5 bg-accent-amber/60" />0{index + 1}</span>
              </div>
              <div className="mt-auto min-w-0 pt-16">
                <h3 id={`${project.id}-title`} className="break-words text-3xl leading-none text-white sm:text-4xl">{project.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">{project.description}</p>
              </div>
              <div className="mt-5 grid min-w-0 gap-4 border-t border-white/10 pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div className="flex min-w-0 flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="max-w-full rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-wider text-white/55">{tech}</span>)}</div>
                <div className="flex shrink-0 items-center gap-2">
                  <button type="button" onClick={() => setSelectedProject(project)} className="whitespace-nowrap rounded-full border border-accent-turquoise/40 px-3 py-2 text-[10px] tracking-wider text-accent-turquoise transition hover:bg-accent-turquoise hover:text-black">CASE STUDY</button>
                  <a className="icon-btn" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={16} /></a>
                  <a className="icon-btn" href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live preview`}><ArrowUpRight size={16} /></a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ opacity: 0, y: 20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .97 }} onClick={(event) => event.stopPropagation()} className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#111116] shadow-2xl">
              <div className="h-40 bg-cover bg-center sm:h-56" style={{ backgroundImage: `linear-gradient(180deg, transparent, #111116), url(${selectedProject.image})` }} />
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-5"><div><p className="tag inline-block">{selectedProject.category}</p><h3 id="case-study-title" className="mt-4 text-4xl text-white">{selectedProject.title}</h3></div><button type="button" onClick={() => setSelectedProject(null)} className="text-2xl text-white/50 transition hover:text-white" aria-label="Close case study">×</button></div>
                <p className="mt-5 leading-7 text-white/60">{selectedProject.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{selectedProject.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-wider text-white/55">{tech}</span>)}</div>
                <div className="mt-8 flex flex-wrap gap-3"><a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn-primary">OPEN LIVE PREVIEW <ArrowUpRight size={16} /></a><a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-secondary">VIEW SOURCE <Github size={16} /></a></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
