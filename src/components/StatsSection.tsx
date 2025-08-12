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
    <section id="stats-section" className="relative py-32 px-4 overflow-hidden min-h-screen">
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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-8">
            Transforming Education Globally
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See how OneLast AI is revolutionizing education and empowering the next generation with cutting-edge AI technology across the globe
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
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

        {/* Three Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Innovation Section */}
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 backdrop-blur-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                AI Innovation Hub
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our cutting-edge AI platform transforms traditional learning into an interactive, personalized experience. Students engage with intelligent tutors, automated assessments, and adaptive learning paths that evolve with their progress.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-400">Smart Learning Algorithms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-400">Real-time Performance Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-400">Personalized Content Delivery</span>
              </div>
            </div>
          </div>

          {/* Global Impact Section */}
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-rose-900/20 backdrop-blur-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-4">
                Global Education Impact
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Reaching students across 35+ countries, OneLast AI breaks down geographical barriers to quality education. Our platform democratizes access to advanced learning tools, ensuring every student has the opportunity to thrive in the digital age.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-400">Multi-language Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-gray-400">Cultural Adaptation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-400">Affordable Access Programs</span>
              </div>
            </div>
          </div>

          {/* Future Ready Section */}
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20 backdrop-blur-lg border border-green-500/30 hover:border-green-400/50 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent mb-4">
                Future-Ready Skills
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Preparing students for tomorrow's challenges with essential 21st-century skills. Our curriculum emphasizes critical thinking, creativity, collaboration, and digital literacy - the foundations for success in an AI-driven world.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400">AI Literacy Programs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-400">Digital Citizenship</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400">Career Pathway Guidance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16">
          <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-gray-900/40 via-purple-900/20 to-blue-900/40 backdrop-blur-lg border border-purple-500/20">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-8">
              Our Vision for Education
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Empowering Youth Through AI - We believe the future belongs to those who understand it. That's why we're introducing young minds to the world of Artificial Intelligence in a way that's creative, engaging, and practical. Our mission is to inspire curiosity, spark innovation, and provide the tools needed for a smarter, faster, and more adaptable tomorrow. With interactive modules, real-world projects, and fresh perspectives, we're building a generation ready to shape the future — not just live in it.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
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