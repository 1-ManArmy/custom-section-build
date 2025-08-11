import { useState, useEffect } from "react";
import { Terminal } from "@phosphor-icons/react";

  const [charIndex, setCharIndex] =

    "npm install design-system",
    "npm run build",
    "git push origin main"

    ["✓ design-syste
    "npm install design-system",
    ["Enumerating objects: 5, done.", "To o
    "npm run build",
  useEffect(() => {
    "git push origin main"
    

      
    } else {
      const timer = setTimeout(() => {
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(timer);
  },

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
              {showCursor && '█'}
          </span>

    
            {currentResponse.map((line
         

            ))}
        )}

          
            <span className="text-green-400">Connected</span>
          <div className="fle
            <div className="w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
          <div className="text-gray-500">
          </div>
      </div>
  );
































              {showCursor && '█'}

          </span>











            ))}

        )}





            <span className="text-green-400">Connected</span>



            <div className="w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>

          <div className="text-gray-500">

          </div>

      </div>

  );
