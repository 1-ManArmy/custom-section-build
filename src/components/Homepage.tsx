import { Header } from "@/components/Header";
import { AIToolSection } from "@/components/AIToolSecti
import { AIToolSection } from "@/components/AIToolSection";
import { ChatSection } from "@/components/ChatSection";
import { CardSection } from "@/components/CardSection";
import { Footer } from "@/components/Footer";
export function Homepage() {
        <div className="min-h-screen bg-black relative overflow
import { CardSection } from "@/components/CardSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export function Homepage() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Animated Background Grid */}
                 
                className="fixed inset-0 opacity-[0.03] z-0"
            {/* Content 
                    backgroundImage: `
                        linear-gradient(rgba(147, 51, 234, 0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    animation: 'grid-move 30s linear infinite'
                }}
            />
            
                {/* Pricing Section */}
            <div className="fixed inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-blue-950/20 z-0" />
            
            {/* Floating Gradient Orbs */}
                
                <FAQSection />
                {/* Footer Section */}
            
    );



                


                


                


                


                


                


                


                


                
                {/* FAQ Section */}
                <FAQSection />
                
                {/* Footer Section */}
                <Footer />
            </div>
        </div>
    );
}