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
    ["✓ onelast-ai@2.1.0 installed", "✓ Added 247 AI
    ["[main 1a2b3c4] Changing generations", "✓ 8
  ];

    if (commandIndex
      
      const userInterval = setInter
          if (prev >= 12500) {
            return 12500;
  ];

      const queryInte
          if (prev >= 150000) {
            return 150000;
          return prev + 3000;
      }, 25);
  ];

            return 95;
  useEffect(() => {
      }, 50);
      return () => {
      
      };
      setStatsVisible(false);
      setAiQueries(0);
          if (prev >= 12500) {

            return 12500;
    
      setCurrentResponse(res
      const
        setCh

      return () => clearTimeout(timer);

          if (prev >= 150000) {
            clearInterval(queryInterval);
            return 150000;

          return prev + 3000;
        });
      }, 25);

      const costInterval = setInterval(() => {
        setCostSaved(prev => {
          if (prev >= 95) {
            clearInterval(costInterval);
            return 95;
          }
          return prev + 2;
        });
      }, 50);

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
    const command = commands[commandIndex];
    
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

    const timer = setTimeout(() => {
      setCurrentCommand(command.slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);
           

    return () => clearTimeout(timer);
  }, [charIndex, commandIndex]);

  // Cursor blinking effect
                <di
    const timer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Background with animated dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-gray-800/20"></div>

          className="absolute inset-0"

            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'float 6s ease-in-out infinite'
          }}
        />


      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - United Mission */}
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-300 text-left tracking-wide mb-4">UNITED MISSION</h3>
              
              <div className="space-y-4">

                  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=50&pause=1000&color=FF0000&color=A855F7&color=00FF00&center=false&vCenter=true&width=600&lines=Empowering+Youth+Through+AI+-+We+believe+the+future+belongs+to+those+who+understand+it.+That's+why+we're+introducing+young+minds+to+the+world+of+Artificial+Intelligence+in+a+way+that's+creative,+engaging,+and+practical.+Our+mission+is+to+inspire+curiosity,+spark+innovation,+and+provide+the+tools+needed+for+a+smarter,+faster,+and+more+adaptable+tomorrow.+With+interactive+modules,+real-world+projects,+and+fresh+perspectives,+we're+building+a+generation+ready+to+shape+the+future+—+not+just+live+in+it."
                  alt="Empowering Youth Through AI Animation"
                  className="w-full"

              </div>
            </div>
          </div>

          {/* Right Side - Terminal */}
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-lg border-4 border-purple-500/50 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-800/90 px-4 py-3 flex items-center gap-3 border-b border-purple-500/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Terminal size={16} />
                <span className="text-sm font-mono">OneLast AI Terminal</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm min-h-[500px] space-y-4">
              {/* Current Command Line */}
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">onelast@ai:~$</span>
                <span className="text-white">{currentCommand}</span>
                {showCursor && <span className="text-white bg-white w-2 h-4 inline-block animate-pulse">|</span>}
              </div>

              {/* Command Response */}
              {currentResponse.map((line, index) => (
                <div key={index} className="text-green-400 animate-fadeIn">
                  {line}
                </div>



              {statsVisible && (
                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-lg border border-cyan-500/20">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400">👥 Active Users</span>
                      <span className="text-white font-bold">{activeUsers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400">⚡ AI Queries</span>
                      <span className="text-white font-bold">{aiQueries.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400">💰 Cost Saved</span>
                      <span className="text-white font-bold">{costSaved}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-400">🌍 Countries Active</span>





























