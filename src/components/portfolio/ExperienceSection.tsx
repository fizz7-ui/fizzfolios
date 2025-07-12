import { useEffect, useState } from "react";
import { Building, Calendar, MapPin, Trophy } from "lucide-react";

export const ExperienceSection = () => {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Founder & CEO",
      company: "HollowAI",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Founded and leading a revolutionary smart home AI platform. Scaled from concept to 10K+ active users.",
      achievements: [
        "Built AI-driven home automation systems for over 100,000 users",
        "Developed proprietary IoT communication protocols",
        "Achieved 40% month-over-month user growth",
        "Featured in TechCrunch and Forbes"
      ],
      type: "current"
    },    
    {
      title: "Full Stack Developer",
      company: "Software Arena Limited",
      location: "Dhaka, Bangladesh",
      period: "2021 - 2025",
      description: "Developed scalable web applications serving millions of users. Specialized in React, Node.js, and distributed systems.",
      achievements: [
        "Optimized app performance by 60%",
        "Built microservices handling 1M+ requests/day",
        "Mentored 5 junior developers",
        "Led migration to cloud-native architecture"
      ],
      type: "past"
    },
     
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-br from-secondary/5 to-background">
      <div className="container mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">EXPERIENCE</span>
          </h2>
          <p className="text-2xl text-accent/80 max-w-4xl mx-auto leading-relaxed">
            A journey through innovation at the world's most cutting-edge technology companies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-primary"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
                } md:w-1/2 ${
                  isVisible ? `slide-in-${index % 2 === 0 ? 'right' : 'left'} delay-${index * 200}` : 'opacity-0'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute ${
                  index % 2 === 0 ? 'md:-left-4' : 'md:-right-4'
                } left-0 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background flex items-center justify-center ${
                  exp.type === 'current' ? 'glow-electric' : ''
                }`}>
                  {exp.type === 'current' ? (
                    <div className="w-3 h-3 bg-background rounded-full animate-pulse"></div>
                  ) : (
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  )}
                </div>

                {/* Content card */}
                <div className={`glass-morphism p-8 rounded-3xl ml-12 md:ml-0 hover:glow-blue transition-all duration-500 transform hover:-translate-y-2 ${
                  exp.type === 'current' ? 'border-2 border-primary/30' : ''
                }`}>
                  {exp.type === 'current' && (
                    <div className="inline-block px-4 py-2 bg-gradient-primary rounded-full text-black font-bold text-sm mb-6">
                      CURRENT POSITION
                    </div>
                  )}
                  
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center text-primary text-xl font-semibold mb-3">
                        <Building className="w-5 h-5 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right text-accent/80">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-accent/80 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-3 flex-shrink-0"></div>
                          <span className="text-accent/90 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};