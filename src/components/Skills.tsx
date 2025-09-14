import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  TrendingUp, 
  Zap, 
  Database, 
  Palette, 
  BarChart3, 
  Megaphone,
  Search,
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      skills: [
        "ChatGPT & GPT-4 Integration",
        "Claude AI Development", 
        "Midjourney & AI Art Generation",
        "Zapier & Make Automation",
        "Machine Learning Models",
        "Natural Language Processing"
      ]
    },
    {
      title: "Web Development",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30", 
      skills: [
        "React & Next.js",
        "TypeScript & JavaScript",
        "Tailwind CSS & UI/UX",
        "Node.js & APIs",
        "Database Design",
        "Performance Optimization"
      ]
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      color: "text-green-600", 
      bgColor: "bg-green-50 dark:bg-green-950/30",
      skills: [
        "Growth Strategy & Funnels",
        "SEO & Content Marketing",
        "Paid Advertising (Google/Meta)",
        "Email Marketing Automation",
        "Analytics & Attribution",
        "Conversion Rate Optimization"
      ]
    }
  ];

  const tools = [
    "OpenAI", "Anthropic", "Figma", "Webflow", "HubSpot", "Google Analytics",
    "Facebook Ads", "Google Ads", "Mailchimp", "Notion", "Airtable", "Slack"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Badge variant="outline" className="skill-tag">
            Skills & Expertise
          </Badge>
          <h2 className="gradient-text">
            The Tools & Technologies I Master
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skillset combining AI innovation, technical development, 
            and strategic marketing to deliver complete business solutions.
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-elegant group slide-up">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="text-sm text-muted-foreground bg-muted/50 rounded-full px-3 py-1 hover:bg-muted transition-colors"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="space-y-8 scale-in">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Tools & Platforms I Work With</h3>
            <p className="text-muted-foreground">
              Industry-leading software and services for maximum efficiency and results
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="skill-tag text-sm py-2 px-4 hover:scale-105 transition-transform cursor-default"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Process Highlight */}
        <div className="mt-16 bg-gradient-card border border-border rounded-2xl p-8 fade-in">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold">Research & Strategy</h4>
              <p className="text-sm text-muted-foreground">Deep market analysis and competitive intelligence</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold">Implementation</h4>
              <p className="text-sm text-muted-foreground">Custom solutions built with cutting-edge technology</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold">Optimization</h4>
              <p className="text-sm text-muted-foreground">Continuous testing and performance improvement</p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold">Scale & Automate</h4>
              <p className="text-sm text-muted-foreground">Sustainable growth through smart automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;