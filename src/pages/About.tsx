import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Palette, Shield, Smartphone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const technologies = [
    "React 18", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide Icons", "Vite"
  ];

  const features = [
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Built with the latest React 18, TypeScript for type safety, and Tailwind CSS for beautiful styling."
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Clean, modern interface with smooth animations, hover effects, and a responsive design system."
    },
    {
      icon: Shield,
      title: "Error Handling",
      description: "Comprehensive error detection including division by zero, invalid operations, and overflow protection."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Perfectly optimized for desktop, tablet, and mobile devices with touch-friendly buttons."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16 fade-in">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Calculator</span>
              </Link>
            </Button>
            
            <Badge variant="outline" className="skill-tag">
              About This Project
            </Badge>
            
            <h1 className="text-4xl font-bold">
              Modern Calculator
              <span className="gradient-text block">Built with React & TypeScript</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of modern web development practices, combining beautiful design 
              with robust functionality and comprehensive error handling.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies */}
          <Card className="card-elegant scale-in">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                  <p className="text-muted-foreground">
                    Built with modern tools and best practices for optimal performance and maintainability
                  </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="skill-tag text-sm py-2 px-4 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Details */}
          <div className="mt-16 space-y-8 fade-in">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Project Highlights</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">Advanced State Management</h3>
                    <p className="text-muted-foreground">
                      Implements sophisticated state management for handling calculator operations, 
                      display updates, and error states with React hooks.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">Error Prevention</h3>
                    <p className="text-muted-foreground">
                      Includes comprehensive error handling for division by zero, invalid operations, 
                      and number overflow with user-friendly toast notifications.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">Accessibility Features</h3>
                    <p className="text-muted-foreground">
                      Built with accessibility in mind, featuring proper ARIA labels, keyboard navigation, 
                      and screen reader support for all calculator functions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary">Performance Optimized</h3>
                    <p className="text-muted-foreground">
                      Optimized React components with proper memoization, efficient re-renders, 
                      and smooth animations powered by CSS transitions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;