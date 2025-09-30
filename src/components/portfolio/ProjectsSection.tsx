import { useEffect, useState } from "react";
import { Smartphone, Home, Wifi, Shield, Zap, Settings } from "lucide-react";

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Control",
      description: "Control every device from your smartphone with intuitive gestures and voice commands"
    },
    {
      icon: Home,
      title: "Smart Integration",
      description: "Seamlessly connects all your home devices into one unified ecosystem"
    },
    {
      icon: Wifi,
      title: "IoT Connectivity",
      description: "Advanced IoT protocols ensure reliable communication between all devices"
    },
    {
      icon: Shield,
      title: "Secure Network",
      description: "Enterprise-grade security keeps your home network safe from threats"
    },
    {
      icon: Zap,
      title: "Energy Optimization",
      description: "AI-powered energy management reduces consumption and saves costs"
    },
    {
      icon: Settings,
      title: "Custom Automation",
      description: "Create personalized automation routines that adapt to your lifestyle"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-background via-secondary/5 to-accent/10">
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Featured Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Introducing HollowAI - The future of smart home technology
          </p>
        </div>

        {/* Main Project Card */}
        <div className={`max-w-6xl mx-auto ${isVisible ? 'scale-in delay-300' : 'opacity-0'}`}>
          <div className="glass-morphism rounded-3xl overflow-hidden glow-primary">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Info */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-gradient-primary rounded-full text-sm font-semibold mb-4">
                    FOUNDER & CEO
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                    HollowAI
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Revolutionary smart home platform that connects your entire house to your smartphone. 
                    Built with cutting-edge AI and IoT technology for seamless home automation.
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Flutter', 'Node.js', 'IoT', 'AI/ML', 'FirebaseDB', 'ESP32'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <div className="text-2xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                  <div className="text-center p-4 bg-accent/10 rounded-xl">
                    <div className="text-2xl font-bold text-accent">50+</div>
                    <div className="text-sm text-muted-foreground">Device Types</div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-secondary/20 to-transparent">
                <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div 
                      key={feature.title}
                      className={`p-4 glass-morphism rounded-xl hover:glow-accent transition-all duration-300 ${
                        isVisible ? 'slide-in-right' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-3">
                        <feature.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h5 className="font-semibold mb-2 text-sm">{feature.title}</h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className={`mt-12 text-center ${isVisible ? 'slide-in-up delay-1000' : 'opacity-0'}`}>
          <h4 className="text-xl font-semibold mb-6">Recognition</h4>
          <div className="flex justify-center space-x-8 flex-wrap">
            <div className="glass-morphism px-6 py-3 rounded-full mb-4">
              <span className="text-primary font-medium">🏆 Best IoT Innovation 2024</span>
            </div>
            <div className="glass-morphism px-6 py-3 rounded-full mb-4">
              <span className="text-accent font-medium">⭐ Top Startup Award</span>
            </div>
            <div className="glass-morphism px-6 py-3 rounded-full mb-4">
              <span className="text-blue-400 font-medium">🚀 Y Combinator Finalist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};