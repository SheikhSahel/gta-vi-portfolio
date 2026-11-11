import { SKILLS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const groups = [["CORE", SKILLS.languages], ["FRAMEWORKS", SKILLS.frameworks], ["TOOLKIT", SKILLS.tooling], ["SPECIAL OPS", SKILLS.libraries]] as const;

export function Loadout() {
  return <section id="loadout" className="section-shell"><SectionHeading eyebrow="04 / INVENTORY & LOADOUT" title="The right tools." copy="A flexible stack for building interfaces that are fast, expressive, and easy to evolve." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{groups.map(([name, skills], index) => <div key={name} className="glass-card p-6"><div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4"><span className="text-xs tracking-[0.2em] text-white/50">{name}</span><span className="font-display text-accent-pink">0{index + 1}</span></div><ul className="space-y-4">{skills.map((skill) => <li key={skill} className="flex items-center gap-3 text-sm text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-accent-turquoise shadow-[0_0_8px_#00f0ff]" />{skill}</li>)}</ul></div>)}</div></section>;
}
