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
            
            <div className="relative z-10 flex items-center justify-center min-h-[600px]">
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
                    <div className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-purple-600/20 blur-xl animate-pulse" />
                    
                    {/* Main Circle */}
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-purple-500/40 bg-slate-900/40 backdrop-blur-xl flex items-center justify-center">
                        {/* Inner Gradient Border */}
                        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-600/10 via-cyan-500/10 to-purple-600/10" />
                        
                        {/* AI Icon Container */}
                        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                            {/* AI Icon - Simple geometric representation */}
                            <div className="w-24 h-24 relative">
                                {/* Main AI Symbol */}
                                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                    {/* Top dots (eyes) */}
                                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                        <div className="w-2 h-2 bg-slate-900 rounded-full" />
                                    </div>
                                    
                                    {/* Mouth/Speaker */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-slate-900 rounded-full flex items-center justify-center">
                                        <div className="w-6 h-2 bg-cyan-300 rounded-full" />
                                    </div>
                                    
                                    {/* Side appendages */}
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-4 h-8 bg-cyan-400 rounded-r-lg" />
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-4 h-8 bg-cyan-400 rounded-l-lg" />
                                </div>
                                
                                {/* Letter 'i' next to the icon */}
                                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-16 bg-gradient-to-b from-cyan-400 to-cyan-300 rounded-full flex flex-col items-center justify-center">
                                    <div className="w-2 h-2 bg-slate-900 rounded-full mb-2" />
                                    <div className="w-1 h-8 bg-slate-900 rounded-full" />
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