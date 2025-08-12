import { HeroSection } from "@/components/HeroSection";
import { AIToolSection } from "@/components/AIToolSection";
import { ChatSection } from "@/components/ChatSection";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import { StatsSection } from "@/components/StatsSection";
import { BannerSection } from "@/components/BannerSection";
import { PricingSection } from "@/components/PricingSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CardSection } from "@/components/CardSection";
import { FAQSection } from "@/components/FAQSection";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <AIToolSection />
      <ChatSection />
      <TerminalDisplay />
      <StatsSection />
      <BannerSection />
      <PricingSection />
      <PartnersSection />
      <CardSection />
      <FAQSection />
    </div>
  );
}