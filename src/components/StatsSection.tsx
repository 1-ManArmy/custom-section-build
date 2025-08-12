import { useState, useEffect } from "react";
import { Users, Brain, TrendingUp, Globe } from "@phosphor-icons/react";

export function StatsSection() {
  const [activeUsers, setActiveUsers] = useState(0);
  const [aiQueries, setAiQueries] = useState(0);
  const [costSaved, setCostSaved] = useState(0);
  const [countries, setCountries] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect when component becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isVisible]);

  // Counter animations
  useEffect(() => {
    if (isVisible) {
      // Active Users animation
      const userInterval = setInterval(() => {
        setActiveUsers(prev => {
          if (prev >= 25000) {
            clearInterval(userInterval);
            return 25000;
          }
          return prev + 500;
        });
      }, 20);

      // AI Queries animation
      const queryInterval = setInterval(() => {
        setAiQueries(prev => {
          if (prev >= 500000) {
            clearInterval(queryInterval);
            return 500000;
          }
          return prev + 10000;
        });
      }, 20);

      // Cost Saved animation
      const costInterval = setInterval(() => {
        setCostSaved(prev => {
          if (prev >= 97) {
            clearInterval(costInterval);
            return 97;
          }
          return prev + 2;
        });
      }, 50);

      // Countries animation
      const countryInterval = setInterval(() => {
        setCountries(prev => {
          if (prev >= 35) {
            clearInterval(countryInterval);
            return 35;
          }
          return prev + 1;
        });
      }, 100);

      return () => {
        clearInterval(userInterval);
        clearInterval(queryInterval);
        clearInterval(costInterval);
        clearInterval(countryInterval);
      };
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      label: "Active Users",
      value: activeUsers.toLocaleString(),
      suffix: "+",
      color: "from-blue-400 to-cyan-400",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Brain,
      label: "AI Queries Daily",
      value: aiQueries.toLocaleString(),
      suffix: "+",
      color: "from-purple-400 to-pink-400",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: TrendingUp,
      label: "Cost Reduction",
      value: costSaved,
      suffix: "%",
      color: "from-green-400 to-emerald-400",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30"
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: countries,
      suffix: "+",
      color: "from-orange-400 to-red-400",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30"
    }
  ];

  return (
    <section id="stats-section" className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/80 to-purple-900/30"></div>
      
      {/* Animated Background Grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 25s linear infinite'
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 via-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Transforming Education Globally
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how OneLast AI is revolutionizing education and empowering the next generation with cutting-edge AI technology
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${stat.bgColor} backdrop-blur-lg border ${stat.borderColor} hover:border-opacity-60 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Gradient Border Animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}<span className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}>{stat.suffix}</span>
                  </h3>
                  <p className="text-gray-300 font-medium text-lg">
                    {stat.label}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-full border border-purple-500/30 backdrop-blur-lg">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
            <span className="text-white font-semibold">Real-time updates • Growing every second</span>
          </div>
        </div>
      </div>
    </section>
  );
}