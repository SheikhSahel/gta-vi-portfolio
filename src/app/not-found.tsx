import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center text-white">
      <div>
        <p className="mb-3 text-xs tracking-[0.3em] text-accent-pink">404 / WRONG TURN</p>
        <h1 className="font-display text-6xl">Page not found.</h1>
        <Link href="/" className="btn-primary mt-7">RETURN HOME</Link>
      </div>
    </main>
  );
}
