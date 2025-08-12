import { useState, useEffect } from "react";
import { Terminal } from "@phosphor-icons/react";

export function TerminalDisplay() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [currentCommand, setCurrentCommand] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [currentResponse, setCurrentResponse] = useState<string[]>([]);
  const [statsVisible, setStatsVisible] = useState(false);
  
  // Animated counters for stats
  const [activeUsers, setActiveUsers] = useState(0);
  const [aiQueries, setAiQueries] = useState(0);
  const [costSaved, setCostSaved] = useState(0);

  const commands = [
    "npm install onelast-ai",
    "npm run stats --live",
    "git commit -m 'Changing generations'",
    "node ai-revolution.js"
  ];

  const responses = [
    ["✓ onelast-ai@2.1.0 installed", "✓ Added 247 AI packages", "✓ Ready to democratize AI"],
    ["📊 Fetching live statistics...", "✓ Connected to OneLast AI servers"],
    ["[main 1a2b3c4] Changing generations", "✓ 85% youth ready for AI revolution"],
    ["🚀 AI Revolution Started", "✓ Breaking barriers globally"]
  ];

  // Stats counter animation
  useEffect(() => {
    if (commandIndex === 1 && currentResponse.length > 0) {
      setStatsVisible(true);
      
      // Animate counters
      const userInterval = setInterval(() => {
        setActiveUsers(prev => {
          if (prev >= 12500) {
            clearInterval(userInterval);
            return 12500;
          }
          return prev + 250;
        });
      }, 30);

      const queryInterval = setInterval(() => {
        setAiQueries(prev => {
          if (prev >= 2800000) {
            clearInterval(queryInterval);
            return 2800000;
          }
          return prev + 56000;
        });
      }, 20);

      const costInterval = setInterval(() => {
        setCostSaved(prev => {
          if (prev >= 95) {
            clearInterval(costInterval);
            return 95;
          }
          return prev + 2;
        });
      }, 40);

      return () => {
        clearInterval(userInterval);
        clearInterval(queryInterval);
        clearInterval(costInterval);
      };
    } else if (commandIndex !== 1) {
      setStatsVisible(false);
      setActiveUsers(0);
      setAiQueries(0);
      setCostSaved(0);
    }
  }, [commandIndex, currentResponse]);

  // Command cycle effect
  useEffect(() => {
    if (charIndex >= commands[commandIndex].length) {
      setCurrentResponse(responses[commandIndex]);
      
      const timer = setTimeout(() => {
        setCommandIndex((prev) => (prev + 1) % commands.length);
        setCharIndex(0);
        setCurrentCommand("");
        setCurrentResponse([]);
      }, 3500); // Increased delay for stats viewing
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
      }, 80 + Math.random() * 40);
      
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
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl border border-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-0.5 shadow-2xl overflow-hidden w-full min-h-[700px]">
          <div className="bg-card rounded-xl h-full">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-8 py-6 bg-muted/50 border-b border-purple-500/50">
              <div className="flex items-center gap-4">
                <Terminal className="text-muted-foreground" size={24} />
                <span className="text-base font-medium text-card-foreground">OneLast AI Terminal</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 space-y-6 font-mono min-h-[600px]">
              {/* Animated Typing SVG */}
              <div className="flex justify-center mb-8">
                <img 
                  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=2000&pause=1000&color=A855F7&center=true&vCenter=true&width=600&lines=Democratizing+AI+for+Everyone;Changing+the+Generation;Your+AI+Digital+Friend" 
                  alt="Typing SVG: OneLast AI Mission" 
                  className="max-w-full h-auto"
                />
              </div>

              {/* Command Input */}
              <div className="flex items-center gap-3 text-lg">
                <span className="text-green-400">$</span>
                <span className="text-card-foreground">
                  {currentCommand}
                  {showCursor && <span className="text-purple-400">█</span>}
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

              {/* Stats Display - Shows when stats command runs */}
              {statsVisible && (
                <div className="mt-6 p-4 border border-purple-500/30 rounded-lg bg-purple-900/10 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="space-y-1">
                      <div className="text-purple-400">👥 Active Users</div>
                      <div className="text-2xl font-bold text-white">
                        {activeUsers.toLocaleString()}+
                      </div>
                      <div className="text-xs text-gray-500">Youth embracing AI</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-cyan-400">🧠 AI Queries</div>
                      <div className="text-2xl font-bold text-white">
                        {aiQueries.toLocaleString()}+
                      </div>
                      <div className="text-xs text-gray-500">Knowledge generated</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-green-400">💰 Cost Saved</div>
                      <div className="text-2xl font-bold text-white">
                        {costSaved}%
                      </div>
                      <div className="text-xs text-gray-500">vs competitors</div>
                    </div>
                  </div>
                  
                  {/* Additional Stats Row */}
                  <div className="mt-4 pt-4 border-t border-purple-500/20 grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-400">🌍 Countries Active</span>
                      <span className="text-white font-bold">3 (UAE, UK, USA)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-pink-400">🎯 Success Rate</span>
                      <span className="text-white font-bold">98.7%</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Live Status Indicator */}
              <div className="flex items-center justify-between pt-6 border-t border-gradient-to-r from-cyan-400 to-purple-500">
                <div className="flex items-center gap-3 text-base">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">Connected to OneLast AI</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                  <div className="text-gray-500 text-sm">
                    287 users online
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="mt-6 p-3 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg border border-purple-500/20">
                <div className="text-xs text-purple-300 mb-1">// MISSION</div>
                <div className="text-sm text-gray-300">85% of people don't know what AI is. We're changing that. One youth at a time.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}