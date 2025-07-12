import { useEffect, useState } from "react";
import { Code2, Database, Brain, Cpu, Globe, Smartphone } from "lucide-react";

export const SkillsSection = () => {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Vue.js", level: 88 },
        { name: "Angular", level: 85 },
        { name: "Svelte", level: 80 }
      ],
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 94 },
        { name: "Python", level: 96 },
        { name: "Go", level: 87 },
        { name: "Rust", level: 82 },
        { name: "Java", level: 89 }
      ],
      color: "text-white"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 8, beginner: true },
        { name: "PyTorch", level: 7, beginner: true },
        { name: "Computer Vision", level: 8, beginner: true },
        { name: "NLP", level: 7, beginner: true },
        { name: "Neural Networks", level: 8, beginner: true }
      ],
      color: "text-primary"
    },
    {
      icon: Cpu,
      title: "Robotics & IoT",
      skills: [
        { name: "ROS/ROS2", level: 20 },
        { name: "Arduino/ESP32", level: 96 },
        { name: "Raspberry Pi", level: 73 },
        { name: "SLAM", level: 10 },
        { name: "Sensor Fusion", level: 90 }
      ],
      color: "text-white"
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 91 },
        { name: "Docker", level: 94 },
        { name: "Kubernetes", level: 15 },
        { name: "GraphQL", level: 85 },
        { name: "Git", level: 95 }
      ],
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 93 },
        { name: "Flutter", level: 88 },
        { name: "Swift", level: 82 },
        { name: "Kotlin", level: 67 },
        { name: "Progressive Web Apps", level: 59 }
      ],
      color: "text-white"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">SKILLS</span>
          </h2>
          <p className="text-2xl text-accent/80 max-w-4xl mx-auto leading-relaxed">
            Mastering the art of technology across multiple domains. Each skill honed through 
            countless hours of practice and real-world application.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass-morphism p-8 rounded-3xl hover:glow-blue transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? `slide-in-up delay-${index * 100}` : 'opacity-0'
              }`}
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mr-6">
                  <category.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className={`text-2xl font-bold ${category.color}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-medium text-accent/90">{skill.name}</span>
                        {skill.beginner && (
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                            Beginner
                          </span>
                        )}
                      </div>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-2000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 100) + (skillIndex * 200)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className={`mt-20 text-center ${isVisible ? 'slide-in-up delay-1000' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-12 text-white">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {[
              'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 
              'TensorFlow', 'ROS', 'MongoDB', 'Redis', 'GraphQL', 'Git', 'Linux', 'Arduino', 'Raspberry Pi'
            ].map((tech, index) => (
              <div 
                key={tech}
                className="glass-morphism px-6 py-3 rounded-full hover:glow-white transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${1200 + index * 50}ms` }}
              >
                <span className="text-accent font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};