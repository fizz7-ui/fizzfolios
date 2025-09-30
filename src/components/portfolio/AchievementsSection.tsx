import { useEffect, useState } from "react";
import { Award, Star, TrendingUp, Users, Code, Zap } from "lucide-react";

export const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    users: 0,
    lines: 0,
    companies: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const targets = { projects: 150, users: 50000, lines: 2500000, companies: 25 };
          const duration = 2000;
          const steps = 60;
          
          Object.keys(targets).forEach(key => {
            let current = 0;
            const target = targets[key as keyof typeof targets];
            const increment = target / steps;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounters(prev => ({ ...prev, [key]: target }));
                clearInterval(timer);
              } else {
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('achievements');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Award,
      title: "Science Fair",
      items: [
        "🥉 3rd place - Junior - BSCIR 2025",
        "🥉 3rd place - Junior - NDC Annual 2024",
      ]
    },
    {
      icon: Star,
      title: "Global Awards",
      items: [
        "🥇 Gold Medalist - WICE 2025",
        ]
    },
  ];

  const stats = [
    {
      icon: Code,
      value: counters.projects,
      label: "Projects Completed",
      suffix: "+"
    },
    {
      icon: Users,
      value: counters.users,
      label: "Users Impacted",
      suffix: "+"
    },
    {
      icon: Zap,
      value: counters.lines,
      label: "Lines of Code",
      suffix: "+"
    },
    {
      icon: TrendingUp,
      value: counters.companies,
      label: "Companies Worked With",
      suffix: "+"
    }
  ];

  return (
    <section id="achievements" className="py-24 px-4 bg-gradient-to-br from-background via-secondary/5 to-primary/5">
      <div className="container mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">ACHIEVEMENTS</span>
          </h2>
          <p className="text-2xl text-accent/80 max-w-4xl mx-auto leading-relaxed">
            Recognition and milestones that define a journey of continuous innovation and impact.
          </p>
        </div>

        {/* Stats Counter */}
        <div className={`grid md:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto ${isVisible ? 'scale-in delay-300' : 'opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="glass-morphism p-8 rounded-3xl text-center hover:glow-blue transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              <div className="text-4xl font-black text-primary mb-2">
                {stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-accent/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement Categories */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {achievements.map((category, index) => (
            <div
              key={category.title}
              className={`glass-morphism p-8 rounded-3xl hover:glow-white transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? `slide-in-up delay-${500 + index * 200}` : 'opacity-0'
              }`}
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-6">
                  <category.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start space-x-4 p-4 bg-secondary/20 rounded-xl hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-accent/90 leading-relaxed text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 ${isVisible ? 'slide-in-up delay-1000' : 'opacity-0'}`}>
          <div className="glass-morphism p-8 rounded-3xl max-w-4xl mx-auto glow-electric">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-xl text-accent/80 mb-8 leading-relaxed">
              Let's collaborate and push the boundaries of what's possible in technology.
            </p>
            <div className="flex justify-center space-x-6 flex-wrap gap-4">
              <button className="bg-gradient-primary text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:glow-blue">
                Start a Project
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};