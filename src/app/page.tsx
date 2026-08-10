import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Services } from "@/components/sections/Services";
import { Movexa } from "@/components/sections/Movexa";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { HowIWork } from "@/components/sections/HowIWork";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { About } from "@/components/sections/About";
import { FounderJourney } from "@/components/sections/FounderJourney";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Trust />
        <Services />
        <Movexa />
        <SelectedWork />
        <HowIWork />
        <TechnicalExpertise />
        <About />
        <FounderJourney />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
