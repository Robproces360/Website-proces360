import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import NoCureNoPaySection from "@/components/sections/NoCureNoPaySection";
import DienstenSection from "@/components/sections/DienstenSection";
import Scan360Section from "@/components/sections/Scan360Section";
import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import WaromSection from "@/components/sections/WaromSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <StatsSection />
      <DienstenSection />
      <NoCureNoPaySection />
      <Scan360Section />
      <ProcessSection />
      <TeamSection />
      <WaromSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
