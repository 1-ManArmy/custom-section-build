import { HeroSection } from "@/components/HeroSection";
import { ChatSection } from "@/components/ChatSection";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import { BannerSection } from "@/components/BannerSection";
import { PricingSection } from "@/components/PricingSection";
import { PartnersSection } from "@/components/PartnersSection";
import { CardSection } from "@/components/CardSection";
import { Footer } from "@/components/Footer";

function App() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ChatSection />
            <TerminalDisplay />
            <BannerSection />
            <PricingSection />
            <PartnersSection />
            <CardSection />
            <Footer />
        </div>
    )
}

export default App