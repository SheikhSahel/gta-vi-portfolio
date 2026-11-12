import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Github, MapPin } from "lucide-react";
import { SITE } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-8 pt-32 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,10,12,.95)_0%,rgba(10,10,12,.45)_48%,rgba(10,10,12,.08)_100%),linear-gradient(0deg,#0a0a0c_0%,transparent_60%)]" />
      <div className="absolute right-0 top-0 -z-20 h-full w-full lg:w-[62%]">
        <Image src="/profile.jpg" alt="Sheikh Sahel seated on a classic car in Vice City" fill priority unoptimized sizes="(max-width: 1024px) 100vw, 62vw" className="translate-y-9 scale-[1.06] object-cover object-[48%_center] grayscale-[8%] saturate-[1.15] sm:translate-y-7 sm:scale-[1.04] sm:object-[45%_center] lg:translate-y-0 lg:scale-100 lg:object-center" />
      </div>
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] tracking-[0.5em] text-white/45 lg:block">SHEIKH SAHEL // FRONT-END DEVELOPER</div>
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-4xl">
          <div className="relative -top-2 mb-7 flex items-start gap-3 text-xs font-medium leading-5 tracking-[0.25em] text-accent-amber sm:top-0 sm:items-center"><MapPin size={14} className="mt-1 shrink-0 sm:mt-0" /><span>DHAKA, BANGLADESH /<br className="sm:hidden" /> REMOTE WORLDWIDE</span></div>
          <p className="mb-3 text-xs tracking-[0.35em] text-white/60">A DIGITAL PORTFOLIO BY</p>
          <h1 className="editorial-title text-[clamp(4.5rem,13vw,12rem)] leading-[.72] text-white">
            SHEIKH<br /><span className="text-stroke">SAHEL</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">{SITE.subtitle} With a sharp eye for interaction, performance, and the details users feel.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#missions" className="btn-primary">EXPLORE PROJECTS <ArrowUpRight size={17} /></a>
            <a href="#contact" className="btn-secondary">GET IN TOUCH</a>
            <a href={SITE.cv} download className="btn-secondary border-accent-amber/40 text-accent-amber hover:border-accent-amber hover:bg-accent-amber/10"><Download size={16} /> DOWNLOAD CV</a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/45">
            <a href={SITE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-accent-turquoise"><Github size={14} /> GITHUB / SHEIKHSAHEL</a>
            <span className="text-accent-pink">● OPEN TO WORK</span>
          </div>
        </div>
        <div className="mt-16 flex items-end justify-between border-t border-white/25 pt-5 text-xs tracking-[0.2em] text-white/45">
          <span>01 / 05 — THE OPERATOR</span>
          <span className="flex items-center gap-2 text-accent-amber"><ArrowDown size={14} /> SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
