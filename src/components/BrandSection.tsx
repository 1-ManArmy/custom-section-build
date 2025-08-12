export function BrandSection() {
  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Hooded Figure with Code Symbol */}
        <div className="mb-12 relative">
          {/* Main figure container */}
          <div className="relative inline-block">
            {/* Hood shape */}
            <div className="relative w-80 h-96 mx-auto">
              {/* Hood outline */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-blue-800/50 rounded-t-full border-2 border-blue-400/30 backdrop-blur-sm" />
              
              {/* Inner hood shadow */}
              <div className="absolute top-8 left-8 right-8 bottom-16 bg-gradient-to-b from-transparent to-black/80 rounded-t-full" />
              
              {/* Glowing eyes */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 flex gap-6">
                <div className="w-4 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" />
                <div className="w-4 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              
              {/* Body/shoulders */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-b from-blue-700/40 to-blue-900/60 rounded-t-3xl border-x-2 border-blue-400/30" />
              
              {/* Code symbol in center of body */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                <div className="text-6xl font-mono text-cyan-400 animate-pulse">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-cyan-300">&lt;</span>
                    <span className="text-cyan-400">/</span>
                    <span className="text-cyan-300">&gt;</span>
                  </div>
                </div>
                
                {/* Glowing effect around code symbol */}
                <div className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-xl animate-pulse" />
              </div>
              
              {/* Additional glow effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent rounded-full blur-2xl" />
            </div>
            
            {/* Floating code particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <div className="absolute top-20 right-16 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-40 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-32 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
        
        {/* Brand text */}
        <div className="space-y-6">
          <h1 className="text-7xl font-bold text-white tracking-tight">
            OneLast.AI
          </h1>
          
          <p className="text-2xl text-gray-300 font-light italic tracking-wide">
            Code Meets Destiny
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </section>
  );
}