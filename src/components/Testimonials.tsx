import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Solutions",
      company: "Y Combinator Startup",
      content: "Alex transformed our marketing approach completely. The AI-powered automation system he built increased our conversion rate by 85% and saved us 20 hours per week. His technical expertise combined with deep marketing knowledge is unmatched.",
      rating: 5,
      avatar: "SC",
      industry: "SaaS"
    },
    {
      name: "Marcus Rodriguez", 
      role: "Founder & CTO",
      company: "DataFlow Analytics",
      content: "Working with Alex was a game-changer. He didn't just deliver what we asked for—he identified opportunities we hadn't even considered. The growth platform he developed generated $1.2M in additional revenue in our first year.",
      rating: 5,
      avatar: "MR",
      industry: "Data Analytics"
    },
    {
      name: "Emily Watson",
      role: "Marketing Director", 
      company: "Digital Innovations Agency",
      content: "Alex's automation suite revolutionized our agency operations. We went from struggling with manual processes to delivering projects 150% faster. Our clients love the results, and our team can focus on strategy instead of busywork.",
      rating: 5,
      avatar: "EW", 
      industry: "Digital Agency"
    },
    {
      name: "David Kumar",
      role: "VP of Growth",
      company: "CloudScale Technologies",
      content: "The level of insight Alex brings to both technical implementation and business strategy is remarkable. His work on our customer acquisition funnel reduced our CAC by 40% while doubling our monthly recurring revenue.",
      rating: 5,
      avatar: "DK",
      industry: "Cloud Computing"
    },
    {
      name: "Lisa Thompson",
      role: "Co-founder",
      company: "EcoTech Innovations",
      content: "Alex doesn't just build solutions—he partners with you to understand your vision and challenges. The sustainability tracking platform he created helped us secure $3M in Series A funding by demonstrating clear impact metrics.",
      rating: 5,
      avatar: "LT",
      industry: "GreenTech"
    },
    {
      name: "James Morrison",
      role: "Head of Operations",
      company: "FinanceForward",
      content: "Exceptional work ethic and incredible attention to detail. Alex's automated reporting system transformed how we handle client communications and compliance. The ROI was visible within the first month of implementation.",
      rating: 5,
      avatar: "JM",
      industry: "FinTech"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Badge variant="outline" className="skill-tag">
            Client Testimonials
          </Badge>
          <h2 className="gradient-text">
            What Partners Say About Working With Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from founders, CTOs, and marketing leaders who've seen 
            the impact of AI-driven solutions on their business growth.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 scale-in">
          <div className="text-center p-6 bg-gradient-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">5.0</div>
            <div className="flex justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Project Success Rate</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-card border border-border rounded-xl">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Repeat Business</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elegant slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-muted-foreground/30" />
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-accent font-medium">{testimonial.company}</div>
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center space-y-8 fade-in">
          <h3 className="text-2xl font-semibold">Trusted By Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="text-center text-muted-foreground font-semibold">
              Y Combinator<br />
              <span className="text-sm font-normal">Startups</span>
            </div>
            <div className="text-center text-muted-foreground font-semibold">
              Series A+<br />
              <span className="text-sm font-normal">Scale-ups</span>
            </div>
            <div className="text-center text-muted-foreground font-semibold">
              Digital Agencies<br />
              <span className="text-sm font-normal">Growth Partners</span>
            </div>
            <div className="text-center text-muted-foreground font-semibold">
              Fortune 500<br />
              <span className="text-sm font-normal">Enterprises</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;