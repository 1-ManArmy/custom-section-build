import { ChevronLeft, ChevronRight } from "@phosphor-icons/react";

export const AIToolSection = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Dotted Background Pattern */}
            <div 
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(147, 51, 234, 0.6) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-950/40 to-slate-800/80" />
            
            <div className="relative z-10 flex items-center justify-center min-h-[700px]">
                {/* Left Arrow */}
                <button className="absolute left-8 lg:left-16 z-20 w-16 h-16 rounded-full border-2 border-purple-500/30 bg-slate-900/20 backdrop-blur-sm flex items-center justify-center hover:border-purple-400/50 hover:bg-slate-800/30 transition-all duration-300 group">
                    <ChevronLeft 
                        size={24} 
                        className="text-purple-300 group-hover:text-purple-200 transition-colors" 
                    />
                </button>

                {/* Central Circle */}
                <div className="relative">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-purple-600/20 blur-xl animate-pulse" />
                    
                    {/* Main Circle */}
                    <div className="relative w-[450px] h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border-2 border-purple-500/40 bg-slate-900/40 backdrop-blur-xl flex items-center justify-center">
                        {/* Inner Gradient Border */}
                        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-600/10 via-cyan-500/10 to-purple-600/10" />
                        
                        {/* AI Icon Container */}
                        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                            {/* AI Icon - Simple geometric representation */}
                            <div className="w-32 h-32 relative">
                                {/* Main AI Symbol */}
                                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Arrow */}
                <button className="absolute right-8 lg:right-16 z-20 w-16 h-16 rounded-full border-2 border-purple-500/30 bg-slate-900/20 backdrop-blur-sm flex items-center justify-center hover:border-purple-400/50 hover:bg-slate-800/30 transition-all duration-300 group">
                    <ChevronRight 
                        size={24} 
                        className="text-purple-300 group-hover:text-purple-200 transition-colors" 
                    />
                </button>
            </div>
        </section>
    );
};