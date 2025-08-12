import { Button } from "@/components/ui/button";
import { TerminalDisplay } from "@/components/TerminalDisplay";
import { Sparkles } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-6 relative pt-24">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles size={24} className="text-purple-400" />
              <span className="text-purple-400 font-medium">AI-Powered Terminal</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Code with style using{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                Terminal Design
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Build and design with terminal commands. Watch as your code comes to life 
              through animated command sequences and real-time AI responses.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg font-medium border-purple-500/50 text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Right Content - Terminal Interface */}
        <div className="relative w-full">
          {/* Backdrop blur effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl backdrop-blur-sm" />
          
          {/* Main container */}
          <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-3xl p-6 shadow-2xl">
            <TerminalDisplay />
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </div>
            <div className="absolute top-8 -left-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
            </div>
            <div className="absolute bottom-4 -right-4">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}