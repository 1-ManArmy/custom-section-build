import { useState, useEffect } from "react";
import { Terminal } from "@phosphor-icons/react";

export function TerminalDisplay() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [currentResponse, setCurrentResponse] = useState<string[]>([]);

  const commands = [
    "npm install design-system",
    "npm run build", 
    "git push origin main"
  ];

  const responses = [
    ["✓ design-system@2.1.0 installed", "✓ Added 247 packages"],
    ["✓ Build completed successfully", "✓ Output: dist/"],
    ["Enumerating objects: 5, done.", "To origin/main"]
  ];

  // Command cycle effect
  useEffect(() => {
    if (charIndex >= commands[commandIndex].length) {
      setCurrentResponse(responses[commandIndex]);
      
      const timer = setTimeout(() => {
        setCommandIndex((prev) => (prev + 1) % commands.length);
        setCharIndex(0);
        setCurrentCommand("");
        setCurrentResponse([]);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [charIndex, commandIndex, commands]);

  // Typing animation effect
  useEffect(() => {
    const command = commands[commandIndex];
    
    if (charIndex < command.length) {
      const timer = setTimeout(() => {
        setCurrentCommand(command.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80 + Math.random() * 40); // Variable typing speed
      
      return () => clearTimeout(timer);
    }
  }, [charIndex, commandIndex, commands]);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-2xl border border-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-0.5 shadow-2xl overflow-hidden w-full min-h-[600px] animate-gradient-spin">
      <div className="bg-card rounded-xl h-full">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-8 py-6 bg-muted/50 border-b border-purple-500/50">
        <div className="flex items-center gap-4">
          <Terminal className="text-muted-foreground" size={24} />
          <span className="text-base font-medium text-card-foreground">Terminal</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-8 space-y-6 font-mono min-h-[500px]">
        {/* Animated Typing SVG */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=2000&pause=1000&color=FF0000&center=true&vCenter=true&width=600&lines=AI+Digital+Friend" 
            alt="Typing SVG: AI Digital Friend" 
            className="max-w-full h-auto"
          />
        </div>

        {/* Command Input */}
        <div className="flex items-center gap-3 text-lg">
          <span className="text-green-400">$</span>
          <span className="text-card-foreground">
            {currentCommand}
            {showCursor && '█'}
          </span>
        </div>

        {/* Command Response */}
        {currentResponse.length > 0 && (
          <div className="space-y-2 text-muted-foreground text-base">
            {currentResponse.map((line, index) => (
              <div key={index} className="animate-fadeIn">
                {line}
              </div>
            ))}
          </div>
        )}

        {/* Status Indicator */}
        <div className="flex items-center justify-between pt-6 border-t border-gradient-to-r from-cyan-400 to-purple-500">
          <div className="flex items-center gap-3 text-base">
            <span className="text-green-400">Connected</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
            <div className="text-gray-500 text-sm">
              Live
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}