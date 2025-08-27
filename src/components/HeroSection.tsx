import { Button } from "@/components/ui/button";
import { Terminal, Sparkle } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-6 relative pt-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fadeIn">
            <div className="space-y-8">
              <div className="flex items-center space-x-3 mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <Sparkle size={20} className="text-purple-400" />
                </div>
                <span className="text-purple-400 font-semibold text-lg">AI-Powered Terminal</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Code with style using{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Terminal Design
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                Build and design with terminal commands. Watch as your code comes to life 
                through animated command sequences and real-time AI responses.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="group relative px-10 py-7 text-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 border border-purple-500/50"
              >
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="group px-10 py-7 text-lg font-semibold border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 backdrop-blur-sm bg-black/20"
              >
                <Terminal className="mr-3" size={24} />
                Watch Demo
              </Button>
            </div>

            {/* Stats Preview */}
            <div className="flex items-center gap-8 pt-6 animate-fadeIn" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Terminal Preview */}
          <div className="relative w-full animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            {/* Backdrop blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 rounded-3xl backdrop-blur-sm" />
            
            {/* Main container */}
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Terminal className="text-purple-400" size={20} />
                  </div>
                  <span className="text-base font-semibold text-gray-300">OneLast AI Terminal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
              </div>

              {/* Terminal Content Preview */}
              <div className="font-mono text-base space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300">npm install onelast-ai</span>
                </div>
                <div className="text-purple-400 ml-6">✓ AI Revolution installed successfully</div>
                
                <div className="flex items-center gap-2 mt-6">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300">ai --democratize</span>
                </div>
                <div className="text-cyan-400 ml-6 flex items-center gap-2">
                  <span>🚀</span>
                  <span>Changing the generation...</span>
                </div>
                
                <div className="mt-8 p-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-xl border border-purple-500/30">
                  <div className="text-sm text-purple-300 mb-2 font-semibold">// MISSION STATEMENT</div>
                  <div className="text-sm text-gray-300 leading-relaxed">
                    Making AI accessible to everyone, everywhere
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300 animate-pulse">_</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-3 -right-3">
                <div className="w-5 h-5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              </div>
              <div className="absolute top-10 -left-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
              </div>
              <div className="absolute bottom-6 -right-5">
                <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}