import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, X, Settings } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Rapidly iterate using{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Edit with AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Edit with short, everyday phrases using our new Edit with AI feature, 
              to achieve perfect image generations, faster.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg font-medium bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full transition-all duration-200 hover:scale-105"
          >
            Try Phoenix
          </Button>
        </div>

        {/* Right Content - AI Interface Mockup */}
        <div className="relative">
          {/* Main purple gradient frame */}
          <div className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-blue-500 rounded-[2rem] p-1">
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-[1.8rem] p-8">
              
              {/* AI Editor Interface */}
              <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-medium text-sm">Edit with AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">minimalist gradi</span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                {/* Examples text */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  Examples: "change the coat to red" or "add a blue hat" or "make it vintage" or "add dramatic lighting".
                </p>

                {/* Text input area */}
                <div className="bg-black/60 rounded-xl p-4 border border-white/10 min-h-[80px]">
                  <div className="flex items-start gap-2">
                    <span className="text-white text-sm">make the</span>
                    <div className="w-0.5 h-5 bg-white animate-pulse"></div>
                  </div>
                </div>

                {/* Options and Generate */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="fixed-seed" className="border-white/30 data-[state=checked]:bg-purple-600" />
                    <label htmlFor="fixed-seed" className="text-sm text-white cursor-pointer">
                      Use fixed seed
                    </label>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg">
                    Generate ✨ 24
                  </Button>
                </div>

                {/* Terminal Interface */}
                <div className="pt-4">
                  <div className="bg-black/90 border border-green-500/30 rounded-lg overflow-hidden font-mono">
                    {/* Terminal Header */}
                    <div className="bg-gray-800/50 px-4 py-2 border-b border-green-500/20 flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <span className="text-gray-300 text-xs ml-2">terminal</span>
                    </div>
                    
                    {/* Terminal Content */}
                    <div className="p-4 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">user@phoenix:~$</span>
                        <span className="text-gray-300">npm install @phoenix/ai-editor</span>
                      </div>
                      <div className="text-gray-400 text-xs">✓ Package installed successfully</div>
                      
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-green-400">user@phoenix:~$</span>
                        <span className="text-gray-300">phoenix init --template=react</span>
                      </div>
                      <div className="text-gray-400 text-xs">🚀 Creating new Phoenix project...</div>
                      
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-green-400">user@phoenix:~$</span>
                        <span className="text-gray-300">phoenix generate --ai-enabled</span>
                      </div>
                      <div className="text-gray-400 text-xs">✨ AI features enabled</div>
                      
                      <div className="flex items-center gap-2 mt-3">
                        <span className="text-green-400">user@phoenix:~$</span>
                        <span className="text-gray-300">phoenix serve</span>
                        <div className="w-0.5 h-4 bg-green-400 animate-pulse ml-1"></div>
                      </div>
                      <div className="text-purple-400 text-xs">🌟 Server running on localhost:3000</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings icon */}
              <div className="absolute top-4 right-4">
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white bg-white/5 hover:bg-white/10 rounded-full h-8 w-8 p-0">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}