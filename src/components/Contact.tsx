import { ArrowUpRight, Download, Facebook, Github, Mail } from "lucide-react";
import { SITE } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const channels = [
  { label: "DIRECT LINE", value: SITE.email, href: SITE.gmail, icon: Mail },
  { label: "SOURCE CODE", value: "github.com/SheikhSahel", href: SITE.github, icon: Github },
  { label: "SOCIAL FREQUENCY", value: "facebook.com/sk.sahel.23", href: SITE.facebook, icon: Facebook },
  { label: "CLASSIFIED FILE", value: "Sheikh-Sahel-CV.pdf", href: SITE.cv, icon: Download, download: true },
];

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-24">
      <SectionHeading eyebrow="05 / OPEN CHANNEL" title="Your move." copy="No forms. No waiting room. If the work needs a sharp frontend, send a direct signal and I’ll get back to you." />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111116]">
        <div className="relative p-7 sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-accent-pink/20 blur-[100px]" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-accent-turquoise/10 blur-[100px]" />
          <div className="relative max-w-3xl">
            <p className="text-[10px] tracking-[0.3em] text-accent-amber">AVAILABLE FOR SELECT MISSIONS</p>
            <h3 className="editorial-title mt-5 text-6xl leading-[.85] text-white sm:text-8xl">LET&apos;S BUILD<br /><span className="text-stroke">WHAT&apos;S NEXT.</span></h3>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55">Frontend roles, product collaborations, and ambitious digital experiences are all welcome. Choose your channel below.</p>
          </div>
        </div>
        <div className="grid border-t border-white/10 md:grid-cols-2 xl:grid-cols-4">
          {channels.map(({ label, value, href, icon: Icon, download }) => (
            <a key={label} href={href} download={download || undefined} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="group border-b border-white/10 p-6 transition hover:bg-white/[0.04] md:border-r xl:border-b-0 last:border-0">
              <div className="mb-8 flex items-center justify-between text-accent-amber"><Icon size={19} /><ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
              <p className="text-[9px] tracking-[0.25em] text-white/35">{label}</p>
              <p className="mt-2 break-all text-sm text-white/75 transition group-hover:text-accent-amber">{value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
