import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "@phosphor-icons/react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles size={20} className="text-white" weight="bold" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg blur opacity-75 animate-pulse"></div>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              OneLast AI
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
              Pricing
            </a>
            <a href="#chat" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
              AI Chat
            </a>
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                Pricing
              </a>
              <a href="#chat" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                AI Chat
              </a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button 
                  variant="ghost" 
                  className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 justify-start"
                >
                  Sign In
                </Button>
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}