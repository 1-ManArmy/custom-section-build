import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.75s' }}></div>
        <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-t-green-500 rounded-full animate-spin" style={{ animationDuration: '0.5s' }}></div>
      </div>
      <div className="ml-4 text-white">
        <div className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
          OneLast AI
        </div>
        <div className="text-sm text-gray-400 animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
}
