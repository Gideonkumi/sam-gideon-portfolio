import Navigation from "@/components/Navigation";
import Calculator from "@/components/Calculator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator as CalcIcon, Zap, Shield, Smartphone } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant calculations with smooth animations and responsive design"
    },
    {
      icon: Shield,
      title: "Error Handling",
      description: "Smart error detection and user-friendly error messages"
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Perfectly optimized for all devices and screen sizes"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Section */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <Badge variant="outline" className="skill-tag">
                <CalcIcon className="w-4 h-4 mr-2" />
                Modern Calculator
              </Badge>
              
              <h1 className="text-5xl font-bold leading-tight">
                Calculate with
                <span className="gradient-text block">Style & Precision</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                A beautiful, modern calculator built with React and TypeScript. 
                Perform basic arithmetic operations with elegant design and smart error handling.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="card-elegant group">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Calculator */}
          <div className="slide-up">
            <Calculator />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center space-y-6 scale-in">
          <h2 className="text-3xl font-bold">Ready to Calculate?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Try out the calculator above! It supports addition, subtraction, multiplication, 
            division, decimal numbers, and includes comprehensive error handling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;