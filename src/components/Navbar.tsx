"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

const links = [
  ["HOME", "#"],
  ["DOSSIER", "#dossier"],
  ["MISSIONS", "#missions"],
  ["LOADOUT", "#loadout"],
  ["CONTACT", "#contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => {
    const updateActiveSection = () => {
      const currentPosition = window.scrollY + 140;
      const sectionLinks = links.slice(1);
      let nextActive = "#";
      sectionLinks.forEach(([, href]) => {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top + window.scrollY <= currentPosition) {
          nextActive = href;
        }
      });
      setActive(nextActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-[#0a0a0c]/75 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6">
        <a href="#" className="group flex items-center gap-3" aria-label="Sheikh Sahel home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-accent-amber/60 bg-accent-amber/10 font-display text-xl text-accent-amber transition group-hover:bg-accent-amber group-hover:text-black">
            SS
          </span>
          <span className="hidden font-display text-lg tracking-[0.18em] text-white sm:block">
            SHEIKH <span className="text-accent-amber">SAHEL</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} aria-current={active === href ? "page" : undefined} className={`nav-link ${active === href ? "text-accent-amber" : ""}`}>
              {label}
            </a>
          ))}
        </div>
        <a href={SITE.github} target="_blank" rel="noreferrer" className="hidden rounded-full bg-accent-amber px-5 py-2 font-display text-sm tracking-widest text-black transition hover:bg-white md:block">
          GITHUB <span className="ml-1">↗</span>
        </a>
        <button className="rounded-full border border-white/10 p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-2 max-w-[1400px] rounded-3xl border border-white/10 bg-rockstar-dark/95 p-5 backdrop-blur-xl md:hidden">
            {links.map(([label, href]) => (
              <a key={href} href={href} aria-current={active === href ? "page" : undefined} onClick={() => setOpen(false)} className={`block border-b border-white/10 py-4 font-display tracking-widest last:border-0 ${active === href ? "text-accent-amber" : "text-white"}`}>
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
