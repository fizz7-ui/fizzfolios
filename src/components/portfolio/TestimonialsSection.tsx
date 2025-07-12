import { useEffect, useState } from "react";
import { Quote, Star, User } from "lucide-react";

export const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechCorp",
      company: "Fortune 500 Company",
      image: "👩‍💻",
      rating: 5,
      text: "FIZZ is an exceptional engineer who consistently delivers innovative solutions. His work on our robotics platform exceeded all expectations and transformed our entire approach to automation.",
      highlight: "Transformed our entire approach"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Head of AI Research",
      company: "Stanford University",
      image: "👨‍🔬",
      rating: 5,
      text: "Having worked with FIZZ on several research projects, I can confidently say he's one of the most brilliant minds I've encountered. His ability to bridge theory and practical implementation is remarkable.",
      highlight: "Most brilliant minds I've encountered"
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "Meta",
      image: "👩‍💼",
      rating: 5,
      text: "FIZZ's technical expertise combined with his ability to understand user needs made him invaluable to our team. He single-handedly optimized our platform to serve millions of users more efficiently.",
      highlight: "Single-handedly optimized our platform"
    },
    {
      name: "James Park",
      role: "Founder & CEO",
      company: "RoboTech Innovations",
      image: "👨‍💼",
      rating: 5,
      text: "As a client of HollowAI, I've witnessed FIZZ's vision come to life. The smart home platform they've built is years ahead of the competition. Truly revolutionary technology.",
      highlight: "Years ahead of the competition"
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Robotics Professor",
      company: "MIT",
      image: "👩‍🏫",
      rating: 5,
      text: "FIZZ's contributions to the robotics field are outstanding. His research papers have been cited hundreds of times, and his practical implementations have set new industry standards.",
      highlight: "Set new industry standards"
    },
    {
      name: "Alex Kumar",
      role: "Senior Developer",
      company: "Google",
      image: "👨‍💻",
      rating: 5,
      text: "Working alongside FIZZ was an incredible learning experience. His code quality is impeccable, and his mentorship helped me grow tremendously as an engineer.",
      highlight: "Incredible learning experience"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-t from-secondary/10 to-background">
      <div className="container mx-auto">
        <div className={`text-center mb-20 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent">TESTIMONIALS</span>
          </h2>
          <p className="text-2xl text-accent/80 max-w-4xl mx-auto leading-relaxed">
            What industry leaders and collaborators say about working with me.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`max-w-6xl mx-auto mb-16 ${isVisible ? 'scale-in delay-300' : 'opacity-0'}`}>
          <div className="glass-morphism p-12 rounded-3xl glow-blue relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/30" />
            
            <div className="text-center">
              {/* User Avatar */}
              <div className="w-24 h-24 text-6xl mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                {testimonials[activeTestimonial].image}
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 italic">
                "{testimonials[activeTestimonial].text}"
              </blockquote>

              {/* Highlight */}
              <div className="inline-block px-6 py-3 bg-gradient-primary rounded-full text-black font-bold mb-6">
                "{testimonials[activeTestimonial].highlight}"
              </div>

              {/* Author Info */}
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-primary">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-lg text-accent/80">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="text-accent/60">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className={`flex justify-center space-x-4 mb-16 ${isVisible ? 'slide-in-up delay-500' : 'opacity-0'}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === activeTestimonial 
                  ? 'bg-primary scale-125' 
                  : 'bg-secondary hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-morphism p-6 rounded-2xl hover:glow-white transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                index === activeTestimonial ? 'border-2 border-primary/30' : ''
              } ${
                isVisible ? `slide-in-up delay-${700 + index * 100}` : 'opacity-0'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 text-2xl bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h5 className="font-bold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-accent/70">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-accent/80 text-sm leading-relaxed">
                "{testimonial.text.substring(0, 120)}..."
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className={`mt-20 text-center ${isVisible ? 'slide-in-up delay-1000' : 'opacity-0'}`}>
          <div className="glass-morphism p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8">Industry Recognition</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-black text-primary mb-2">500+</div>
                <div className="text-accent/80">LinkedIn Recommendations</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary mb-2">50+</div>
                <div className="text-accent/80">Client Projects</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary mb-2">98%</div>
                <div className="text-accent/80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary mb-2">25+</div>
                <div className="text-accent/80">Industry Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};