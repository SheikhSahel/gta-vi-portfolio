import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { BackToTop } from "@/components/BackToTop";
import { Contact } from "@/components/Contact";
import { Dossier } from "@/components/Dossier";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Loadout } from "@/components/Loadout";
import { Missions } from "@/components/Missions";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StatusRail } from "@/components/StatusRail";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sheikh Sahel",
            jobTitle: "Frontend Web Developer",
            url: "https://sahel-dev-portfolio.vercel.app",
            email: "mailto:sheikhsahel513@gmail.com",
            address: { "@type": "PostalAddress", addressCountry: "BD" },
            sameAs: [
              "https://github.com/SheikhSahel",
              "https://www.facebook.com/sk.sahel.23/",
            ],
          }),
        }}
      />
      <BackgroundCanvas />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <StatusRail />
        <Dossier />
        <Missions />
        <Loadout />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
