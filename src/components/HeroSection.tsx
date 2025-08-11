import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
    <div className="min-h-screen bg-background flex items-cent

          <div className="space
          
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Rapidly iterate using{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
        </div>
              </span>
          {/* Mai
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Edit with short, everyday phrases using our new Edit with AI feature, 
              to achieve perfect image generations, faster.
            </p>
                
          
              </di
            size="lg" 
            className="px-8 py-6 text-lg font-medium bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full transition-all duration-200 hover:scale-105"
          >
              <div clas
          </Button>
              

        {/* Right Content - AI Interface Mockup */}
        <div className="relative">
          {/* Main gradient container */}
          <div className="relative bg-gradient-to-br from-purple-500/20 via-purple-600/30 to-blue-600/20 rounded-3xl p-8">
            {/* AI Editor Interface */}
            <Card className="bg-black/40 backdrop-blur-sm border-white/10 rounded-2xl p-6 space-y-4">

              <div className="flex items-center justify-between">
                  <div className="w-full h-full bg-gradie
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">Edit with AI</span>
                    <d
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">minimalist gradi</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
                    <X className="w-4 h-4" />
                  </Button>
            <div class
              </div>

              {/* Examples text */}
              <p className="text-xs text-gray-400">

              </p>

              {/* Text input area */}
              <div className="bg-black/60 rounded-lg p-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">make the</span>
                  <div className="w-1 h-4 bg-white animate-pulse"></div>
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="fixed-seed" className="border-white/30" />
                  <label htmlFor="fixed-seed" className="text-sm text-white">

                  </label>

                
                <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                  Generate ✨ 24

              </div>

              {/* Image comparison */}

                <div className="aspect-square bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-pink-600/30 to-purple-800/50 flex items-end justify-center p-4">
                    <div className="w-16 h-20 bg-gradient-to-b from-pink-400/60 to-pink-600/80 rounded-t-full blur-sm"></div>


                <div className="aspect-square bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-pink-600/30 to-purple-800/50 flex items-end justify-center p-4">
                    <div className="w-16 h-20 bg-gradient-to-b from-pink-400/60 to-pink-600/80 rounded-t-full blur-sm"></div>
                  </div>
                </div>
              </div>



            <div className="absolute top-4 right-4">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                <Settings className="w-5 h-5" />

            </div>

        </div>

    </div>
  );
}