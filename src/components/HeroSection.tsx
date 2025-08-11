import { Button } from "@/components/ui/button";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import { Sparkles } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Code with style using{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                Terminal Design
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Build and design with terminal commands. Watch as your code comes to life 
              through animated command sequences and real-time responses.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg font-medium bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full transition-all duration-200 hover:scale-105"
          >
            Get Started
          </Button>
        </div>

        {/* Right Content - Terminal Interface */}
        <div className="relative">
          {/* Main gradient container */}
          <div className="relative bg-gradient-to-br from-green-500/10 via-blue-600/20 to-purple-600/10 rounded-3xl p-8">
            <TerminalDisplay />
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-8 -left-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}