import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Users, Zap, Bot } from "lucide-react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import saasImage from "@/assets/project-saas.jpg";
import agencyImage from "@/assets/project-agency.jpg";
import learningImage from "@/assets/project-learning.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Growth Platform",
      description: "Built a comprehensive marketing automation system that increased client revenue by 240% through personalized customer journeys, predictive analytics, and automated campaign optimization.",
      image: ecommerceImage,
      tags: ["React", "OpenAI API", "Python", "PostgreSQL", "Stripe"],
      results: [
        { metric: "Revenue Increase", value: "240%" },
        { metric: "Conversion Rate", value: "+65%" },
        { metric: "Customer Retention", value: "+90%" }
      ],
      features: [
        "AI-driven product recommendations",
        "Automated email sequences",
        "Real-time analytics dashboard",
        "Custom CRM integration"
      ],
      category: "AI & Marketing",
      icon: Bot,
      link: "#",
      github: "#"
    },
    {
      title: "SaaS Startup Marketing Engine",
      description: "Developed a complete digital marketing infrastructure for a B2B SaaS startup, resulting in 10x lead generation growth and $2M+ in attributed revenue within 12 months.",
      image: saasImage,
      tags: ["Next.js", "HubSpot API", "Google Analytics", "Facebook Ads"],
      results: [
        { metric: "Lead Generation", value: "1000%" },
        { metric: "CAC Reduction", value: "45%" },
        { metric: "Revenue Attribution", value: "$2M+" }
      ],
      features: [
        "Multi-channel attribution modeling",
        "Automated lead scoring",
        "Content personalization engine",
        "Sales funnel optimization"
      ],
      category: "Growth Strategy",
      icon: TrendingUp,
      link: "#",
      github: "#"
    },
    {
      title: "Agency Workflow Automation Suite",
      description: "Created an end-to-end automation platform for a digital agency, reducing manual tasks by 75% and improving client delivery speed by 150% through AI-powered project management.",
      image: agencyImage,
      tags: ["TypeScript", "Zapier", "Airtable", "Slack API", "OpenAI"],
      results: [
        { metric: "Time Savings", value: "75%" },
        { metric: "Delivery Speed", value: "+150%" },
        { metric: "Client Satisfaction", value: "98%" }
      ],
      features: [
        "Intelligent task routing",
        "Automated reporting system",
        "Client communication hub",
        "Resource allocation optimizer"
      ],
      category: "Automation",
      icon: Zap,
      link: "#",
      github: "#"
    },
    {
      title: "Community-Driven Learning Platform",
      description: "Built a modern learning management system with AI-powered content curation, resulting in 300% higher engagement rates and 85% course completion rate.",
      image: learningImage,
      tags: ["React", "Node.js", "MongoDB", "AWS", "Machine Learning"],
      results: [
        { metric: "User Engagement", value: "+300%" },
        { metric: "Completion Rate", value: "85%" },
        { metric: "User Retention", value: "+120%" }
      ],
      features: [
        "Adaptive learning paths",
        "Community features",
        "Progress analytics",
        "Mobile-first design"
      ],
      category: "Web Development", 
      icon: Users,
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Badge variant="outline" className="skill-tag">
            Featured Projects
          </Badge>
          <h2 className="gradient-text">
            Real Solutions, Measurable Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered marketing platforms to custom automation tools, here are some 
            projects that showcase the intersection of technology and business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-elegant group overflow-hidden slide-up">
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.category} project showcase`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-8">
                  {/* Project Header */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="text-lg font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-light"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 scale-in">
          <Card className="card-elegant bg-gradient-primary text-primary-foreground border-none">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Ready to Build Something Amazing?</h3>
                <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                  Let's discuss how we can leverage AI and modern technology to solve your 
                  business challenges and drive real growth.
                </p>
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start Your Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;