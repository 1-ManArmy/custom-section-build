import { useState, useEffect } from "react";
import { Terminal } from "@phosphor-icons/react";

export function TerminalDisplay() {
  const [currentCommand, setCurrentCommand] = useState("");
  const [commandIndex, setCommandIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    "npm install design-system",
    "git commit -m 'Add terminal design'", 
    "npm run build",
    "curl -X POST /api/design",
    "git push origin main"
  ];

  const responses = [
    ["✓ design-system@1.2.3 installed", "✓ Dependencies resolved"],
    ["[main 7a8b9c2] Add terminal design", "1 file changed, 45 insertions(+)"],
    ["✓ Build completed successfully", "Output: dist/"],
    ["200 OK", '{"status": "design created"}'],
    ["Enumerating objects: 5, done.", "To origin", "main -> main"]
  ];

  // Typing animation effect
  useEffect(() => {
    const command = commands[commandIndex];
    
    if (charIndex < command.length) {
      const timer = setTimeout(() => {
        setCurrentCommand(command.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80 + Math.random() * 40); // Variable typing speed
      
      return () => clearTimeout(timer);
    } else {
      // Command finished, wait then move to next
      const timer = setTimeout(() => {
        setCommandIndex((prev) => (prev + 1) % commands.length);
        setCharIndex(0);
        setCurrentCommand("");
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [charIndex, commandIndex, commands]);

  // Cursor blinking effect
  useEffect(() => {
    const timer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(timer);
  }, []);

  const currentResponse = responses[commandIndex] || [];
  const isCommandComplete = charIndex >= commands[commandIndex].length;

  return (
    <div className="bg-black/90 rounded-lg border border-green-400/30 overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-gray-900 px-4 py-3 border-b border-green-400/20 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <Terminal className="w-4 h-4" />
          <span className="text-sm font-mono">terminal</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm min-h-[300px] space-y-3">
        {/* Previous commands (static) */}
        <div className="space-y-2 text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span>cd design-project</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <span>ls -la</span>
          </div>
          <div className="text-xs pl-4">
            <div>drwxr-xr-x  components/</div>
            <div>-rw-r--r--  package.json</div>
            <div>-rw-r--r--  README.md</div>
          </div>
        </div>

        {/* Current typing command */}
        <div className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <span className="text-white">
            {currentCommand}
            <span className={`inline-block w-2 h-4 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
              {showCursor && '█'}
            </span>
          </span>
        </div>

        {/* Command response */}
        {isCommandComplete && (
          <div className="text-gray-300 text-xs pl-4 space-y-1 animate-fadeIn">
            {currentResponse.map((line, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {line.includes('✓') && <span className="text-green-400">✓</span>}
                {line.includes('200') && <span className="text-blue-400">→</span>}
                <span>{line}</span>
              </div>
            ))}
          </div>
        )}

        {/* Live status indicators */}
        <div className="flex items-center gap-4 text-xs pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">Connected</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">POST</span>
            <div className="w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
          </div>
          <div className="text-gray-500">
            Design requests: {Math.floor(Math.random() * 50) + 10}
          </div>
        </div>
      </div>
    </div>
  );
}