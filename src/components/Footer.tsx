import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-glow/20 to-transparent"></div>
      </div>
      
      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Alex Morgan</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Digital marketing expert and entrepreneur specializing in AI-powered 
                business solutions for tech startups and digital agencies.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-primary-foreground/60 text-sm">Let's build something amazing together</p>
              <Button 
                variant="secondary"
                onClick={() => scrollToSection("contact")}
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                Start Your Project
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-underline"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">Email</p>
                <a 
                  href="mailto:alex@alexmorgan.dev" 
                  className="text-primary-foreground hover:text-primary-glow transition-colors"
                >
                  alex@alexmorgan.dev
                </a>
              </div>
              
              <div>
                <p className="text-primary-foreground/60 text-sm mb-1">Response Time</p>
                <p className="text-primary-foreground/80">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-primary-foreground/60 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>using React, TypeScript & AI</span>
            </div>
            
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} Alex Morgan. All rights reserved.
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;