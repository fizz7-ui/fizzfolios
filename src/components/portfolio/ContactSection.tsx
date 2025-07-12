import { useEffect, useState } from "react";
import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:fizz@example.com",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-secondary/10 to-background">
      <div className="container mx-auto text-center">
        <div className={`mb-16 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing together? Let's discuss your next project.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'scale-in delay-300' : 'opacity-0'}`}>
          <div className="glass-morphism p-8 lg:p-12 rounded-3xl glow-primary">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Contact Info */}
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-muted-foreground">
                    Whether you're looking for a collaborator on cutting-edge projects, 
                    need technical consulting, or want to discuss innovative ideas in 
                    software development and robotics.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>fizz@hollowai.com</span>
                  </div>
                </div>

                <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:glow-primary">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Follow My Journey</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center space-x-3 p-4 glass-morphism rounded-xl transition-all duration-300 ${social.color} hover:glow-accent ${
                        isVisible ? 'slide-in-right' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-border ${isVisible ? 'slide-in-up delay-700' : 'opacity-0'}`}>
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 FIZZ. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};