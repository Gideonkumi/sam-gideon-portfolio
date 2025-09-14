import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Genuinely excited about leveraging technology to solve real business challenges"
    },
    {
      icon: Target,
      title: "Results-Focused", 
      description: "Every strategy is designed to deliver measurable outcomes and ROI"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Always exploring cutting-edge AI tools and emerging technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building lasting partnerships through transparent communication"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            <div className="space-y-4">
              <Badge variant="outline" className="skill-tag">
                About Me
              </Badge>
              
              <h2 className="gradient-text">
                From Marketing Enthusiast to AI Innovation Leader
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  My journey began five years ago with a simple fascination: how can technology 
                  make marketing more effective and businesses more successful? What started as 
                  curiosity quickly became a career-defining passion.
                </p>
                
                <p>
                  Today, I bridge the gap between cutting-edge AI capabilities and real-world 
                  business needs. I don't just implement solutions—I craft strategic approaches 
                  that transform how companies connect with their audiences and optimize their operations.
                </p>
                
                <p>
                  Working with tech startups and digital agencies has taught me that the best 
                  innovations happen when technical expertise meets deep business understanding. 
                  That's the sweet spot where I thrive.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">150%</div>
                <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">AI Tools Mastered</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="space-y-6 slide-up">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-4">What Drives Me</h3>
              <p className="text-muted-foreground">
                The values that guide every project and partnership
              </p>
            </div>
            
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card key={index} className="card-elegant group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;