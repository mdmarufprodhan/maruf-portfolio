import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FounderJourney } from "@/components/sections/FounderJourney";
import { Movexa } from "@/components/sections/Movexa";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { TechnicalExpertise } from "@/components/sections/TechnicalExpertise";
import { Philosophy } from "@/components/sections/Philosophy";
import { CurrentFocus } from "@/components/sections/CurrentFocus";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <FounderJourney />
        <Movexa />
        <SelectedWork />
        <TechnicalExpertise />
        <Philosophy />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
