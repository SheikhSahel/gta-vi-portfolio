"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-5 z-40 grid h-11 w-11 place-items-center rounded-full border border-accent-amber/50 bg-[#0a0a0c]/90 text-accent-amber shadow-xl backdrop-blur-md transition hover:bg-accent-amber hover:text-black" aria-label="Back to top">
      <ArrowUp size={17} />
    </button>
  );
}
