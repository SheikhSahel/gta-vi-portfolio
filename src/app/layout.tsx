import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheikh Sahel | Front-End Architect",
  description: "Elite Front-End Web Developer Portfolio - GTA VI Aesthetic",
  metadataBase: new URL("https://sahel-dev-portfolio.vercel.app"),
  openGraph: {
    title: "Sheikh Sahel | Front-End Architect",
    description: "Fast, expressive interfaces from Dhaka to the digital fast lane.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background font-body text-foreground selection:bg-accent-amber selection:text-black">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent-amber focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
        <div className="noise" />
        <div className="scanlines" />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
