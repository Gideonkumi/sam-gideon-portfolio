import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // This would trigger a resume download in a real implementation
    console.log("Resume download triggered");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent font-medium">
                <Sparkles className="w-5 h-5" />
                <span>AI-Powered Business Solutions</span>
              </div>
              
              <h1 className="hero-title">
                Transforming Ideas Into
                <span className="block">Digital Success</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Digital marketing expert and entrepreneur helping tech startups and agencies 
                scale with AI-powered solutions, modern web development, and data-driven strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-6 text-lg group"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={downloadResume}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
              <img
                src={heroPortrait}
                alt="Alex Morgan - Digital Marketing and AI Solutions Expert"
                className="relative rounded-2xl shadow-elegant w-full max-w-lg mx-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card scale-in">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for Projects</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-card scale-in">
              <div className="text-center">
                <div className="text-lg font-bold text-accent">AI Expert</div>
                <div className="text-xs text-muted-foreground">Machine Learning & Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;