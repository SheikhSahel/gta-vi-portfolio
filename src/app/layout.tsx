import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export const metadata: Metadata = {
  title: "Sheikh Sahel | Front-End Architect",
  description: "Sheikh Sahel is a frontend developer building fast, expressive, and human-centered digital experiences.",
  metadataBase: new URL("https://sahel-dev-portfolio.vercel.app"),
  applicationName: "Sheikh Sahel Portfolio",
  authors: [{ name: "Sheikh Sahel" }],
  creator: "Sheikh Sahel",
  keywords: ["frontend developer", "React developer", "Next.js", "UI engineering", "portfolio"],
  openGraph: {
    title: "Sheikh Sahel | Front-End Architect",
    description: "Fast, expressive interfaces from Dhaka to the digital fast lane.",
    type: "website",
    url: "https://sahel-dev-portfolio.vercel.app",
    siteName: "Sheikh Sahel Portfolio",
    images: [{ url: "/profile.jpg", alt: "Sheikh Sahel frontend developer portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheikh Sahel | Front-End Architect",
    description: "Fast, expressive interfaces from Dhaka to the digital fast lane.",
    images: ["/profile.jpg"],
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
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
