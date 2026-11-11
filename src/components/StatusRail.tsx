import { ArrowUpRight, Circle } from "lucide-react";
import { SITE } from "@/lib/content";

const signals = [
  ["STATUS", "OPEN TO WORK"],
  ["BASE", SITE.location],
  ["SPECIALTY", "FRONTEND / UI SYSTEMS"],
  ["RESPONSE", "< 48 HOURS"],
];

export function StatusRail() {
  return (
    <section aria-label="Availability and expertise" className="relative z-10 border-y border-white/10 bg-[#0d0d10]/90">
      <div className="mx-auto grid max-w-[1400px] divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {signals.map(([label, value], index) => (
          <div key={label} className="flex items-center justify-between gap-5 px-5 py-5 sm:px-7">
            <div>
              <p className="mb-1 text-[9px] tracking-[0.25em] text-white/35">{label}</p>
              <p className={`text-xs tracking-[0.12em] ${index === 0 ? "text-accent-amber" : "text-white/75"}`}>{value}</p>
            </div>
            {index === 0 ? <Circle size={10} className="fill-accent-pink text-accent-pink shadow-[0_0_10px_#ff4d94]" /> : <ArrowUpRight size={14} className="text-white/20" />}
          </div>
        ))}
      </div>
    </section>
  );
}
