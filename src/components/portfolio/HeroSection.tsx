import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-accent/10 rounded-full blur-3xl animate-floating" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-primary/15 rounded-full blur-3xl animate-floating" style={{ animationDelay: "2s" }}></div>
        
        {/* Additional floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-floating"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : ''}`}>
           
          <h1 className="text-8xl md:text-[12rem] font-black mb-8 relative">
            <span className="bg-gradient-primary bg-clip-text text-transparent drop-shadow-2xl">
              FIZZ
            </span>
            <div className="absolute inset-0 bg-gradient-primary bg-clip-text text-transparent opacity-50 blur-sm">
              FIZZ
            </div>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'slide-in-up' : ''}`}>
          <div className="text-2xl md:text-4xl text-accent mb-8 space-y-4">
            <div className="flex items-center justify-center space-x-6 flex-wrap gap-4">
              <span className="bg-gradient-primary text-transparent bg-clip-text font-bold text-3xl">Software Developer</span>
              <span className="text-accent/50 text-4xl">•</span>
              <span className="bg-gradient-accent text-transparent bg-clip-text font-bold text-3xl">Web Designer</span>
              <span className="text-accent/50 text-4xl">•</span>
              <span className="text-white font-bold text-3xl">Robotics Engineer</span>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'scale-in' : ''}`}>
          <p className="text-xl md:text-2xl text-accent/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Architecting the future through cutting-edge technology, innovative design, and intelligent automation. 
            Transforming complex problems into elegant solutions.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'slide-in-up' : ''}`}>
          <div className="flex justify-center space-x-8 mb-12 flex-wrap gap-4">
            <div className="glass-morphism px-8 py-4 rounded-full glow-blue transform hover:scale-105 transition-transform">
              <span className="text-primary font-bold text-lg">🏆 LeetCode Rank: 15,000</span>
            </div>
            <div className="glass-morphism px-8 py-4 rounded-full glow-white transform hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">⚡ Problems Solved: 1,047</span>
            </div>
            <div className="glass-morphism px-8 py-4 rounded-full glow-electric transform hover:scale-105 transition-transform">
              <span className="text-primary font-bold text-lg">🚀 HollowAI Founder</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-6 flex-wrap gap-4">
            <Button className="bg-gradient-primary hover:glow-blue text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <Github className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      
    </section>
  );
};