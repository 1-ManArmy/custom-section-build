import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, CaretDown } from "@phosphor-icons/react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 relative">
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 animate-gradient-spin"></div>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-white tracking-tight">
              Leonardo.Ai
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                <span>Features</span>
                <CaretDown size={14} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                align="start"
              >
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  AI Image Generation
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Real-time Canvas
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  3D Texture Generation
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Motion Generation
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                <span>Solutions</span>
                <CaretDown size={14} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                align="start"
              >
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Marketing & Advertising
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Game Development
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Architecture & Design
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Fashion & Product
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Learn Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
                <span>Learn</span>
                <CaretDown size={14} className="transition-transform duration-200" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 rounded-xl mt-2"
                align="start"
              >
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Documentation
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Tutorials
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Community
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white/90 hover:text-white hover:bg-white/5 focus:bg-white/5 focus:text-white cursor-pointer">
                  Blog
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Regular Navigation Items */}
            <a href="#teams" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              For Teams
            </a>
            <a href="#developers" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              For Developers
            </a>
            <a href="#pricing" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              Pricing
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium text-sm">
              Contact
            </a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20"
            >
              Launch App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white/90 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#features" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                Features
              </a>
              <a href="#solutions" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                Solutions
              </a>
              <a href="#learn" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                Learn
              </a>
              <a href="#teams" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                For Teams
              </a>
              <a href="#developers" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                For Developers
              </a>
              <a href="#pricing" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
                Contact
              </a>
              <div className="pt-4">
                <Button 
                  className="w-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white font-medium rounded-full"
                >
                  Launch App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}