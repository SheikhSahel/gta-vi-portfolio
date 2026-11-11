"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Portfolio page error:", error);
  }, [error]);

  const reconnect = () => {
    window.location.reload();
    reset();
  };

  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center text-white">
      <div>
        <p className="mb-3 text-xs tracking-[0.3em] text-accent-pink">SYSTEM INTERRUPTION</p>
        <h1 className="font-display text-6xl">Signal lost.</h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/55">The page hit an unexpected error. Reload the experience or return to the start.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button onClick={reconnect} className="btn-primary">RECONNECT</button>
          <Link href="/" className="btn-secondary">RETURN HOME</Link>
        </div>
      </div>
    </main>
  );
}
