import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import NoCureNoPaySection from "@/components/sections/NoCureNoPaySection";
import DienstenSection from "@/components/sections/DienstenSection";
import Scan360Section from "@/components/sections/Scan360Section";
import ProcessSection from "@/components/sections/ProcessSection";
import WaromSection from "@/components/sections/WaromSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <DienstenSection />
      <NoCureNoPaySection />
      <Scan360Section />
      <ProcessSection />
      <WaromSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
