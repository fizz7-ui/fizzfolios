import { useEffect, useState } from "react";
import { Code, Palette, Bot, Quote } from "lucide-react";

export const AboutSection = () => {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Code,
      title: "Software Developer",
      description: "Architecting scalable systems that serve millions. Expert in full-stack development, cloud architecture, and distributed systems with a focus on performance and reliability.",
      color: "text-primary",
      bgColor: "bg-primary/20",
      delay: "delay-100"
    },
    {
      icon: Palette,
      title: "Web Designer",
      description: "Crafting intuitive digital experiences that users love. Specializing in modern UI/UX design, interactive animations, and conversion-optimized interfaces.",
      color: "text-white",
      bgColor: "bg-white/10",
      delay: "delay-300"
    },
    {
      icon: Bot,
      title: "Robotics Engineer",
      description: "Building intelligent autonomous systems that interact with the physical world. Expert in computer vision, sensor fusion, and real-time control systems.",
      color: "text-primary",
      bgColor: "bg-primary/20",
      delay: "delay-500"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">ABOUT ME</span>
          </h2>
          <p className="text-2xl text-accent/80 max-w-4xl mx-auto leading-relaxed">
            From the vibrant tech scene of Bangladesh, I've been crafting digital experiences since 2020. 
            Starting my robotics journey in 2025, I blend Eastern philosophy with Western innovation to create solutions that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`glass-morphism p-10 rounded-3xl hover:glow-blue transition-all duration-500 transform hover:-translate-y-4 ${
                isVisible ? `slide-in-up ${skill.delay}` : 'opacity-0'
              }`}
            >
              <div className={`w-20 h-20 ${skill.bgColor} rounded-2xl flex items-center justify-center mb-8 mx-auto`}>
                <skill.icon className={`w-10 h-10 ${skill.color}`} />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-center text-white">{skill.title}</h3>
              <p className="text-accent/80 text-center leading-relaxed text-lg">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Personal Philosophy */}
        <div className={`mt-20 text-center ${isVisible ? 'slide-in-up delay-700' : 'opacity-0'}`}>
          <div className="glass-morphism p-12 rounded-3xl max-w-5xl mx-auto glow-white">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-3xl md:text-4xl text-white font-light italic leading-relaxed mb-8">
              "Lo, in this realm of logic and light,
I craft with code as artists wield their might;
Each line a stroke, each function born of heart,
In programming’s realm, I find my art"
            </blockquote>
            <div className="text-primary font-bold text-xl">— Fizz</div>
          </div>
        </div>
      </div>
    </section>
  );
};