import { HeroSection } from "@/components/HeroSection";
import { AIToolSection } from "@/components/AIToolSection";
import { DemoChatSection } from "@/components/DemoChatSection";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import { StatsSection } from "@/components/StatsSection";
import { BannerSection } from "@/components/BannerSection";
import { PricingSection } from "@/components/PricingSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CardSection } from "@/components/CardSection";
import { FAQSection } from "@/components/FAQSection";
import { EnvironmentStatus } from "@/components/SafeEnvironmentStatus";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gear } from "@phosphor-icons/react";

export function HomePage() {
  const [showEnvStatus, setShowEnvStatus] = useState(false);

  return (
    <div className="w-full">
      {/* Environment Status - Show in development or when requested */}
      {(import.meta.env.VITE_APP_ENVIRONMENT === 'development' || showEnvStatus) && (
        <div className="container mx-auto px-4 py-4">
          <EnvironmentStatus 
            showDetails={showEnvStatus} 
            onClose={() => setShowEnvStatus(false)} 
          />
        </div>
      )}

      {/* Main content sections with proper spacing */}
      <section className="relative">
        <HeroSection />
      </section>
      
      <section className="relative py-24 md:py-32">
        <AIToolSection />
      </section>
      
      <section className="relative py-20 md:py-28">
        <DemoChatSection />
      </section>
      
      <section className="relative py-20 md:py-28">
        <TerminalDisplay />
      </section>
      
      <section className="relative py-24 md:py-32">
        <StatsSection />
      </section>
      
      <section className="relative py-20 md:py-28">
        <BannerSection />
      </section>
      
      <section className="relative py-24 md:py-32">
        <PricingSection />
      </section>
      
      <section className="relative py-20 md:py-28">
        <PartnersSection />
      </section>
      
      <section className="relative py-20 md:py-28">
        <CardSection />
      </section>
      
      <section className="relative py-24 md:py-32">
        <FAQSection />
      </section>

      {/* Environment Status Toggle (Hidden in production) */}
      {import.meta.env.VITE_APP_ENVIRONMENT !== 'production' && !showEnvStatus && (
        <div className="fixed bottom-4 right-4 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowEnvStatus(true)}
            className="bg-black/50 backdrop-blur border-white/20 text-white hover:bg-white/10"
          >
            <Gear className="h-4 w-4 mr-2" />
            Environment
          </Button>
        </div>
      )}
    </div>
  );
}