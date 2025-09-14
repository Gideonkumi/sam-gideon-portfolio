import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Calendar, 
  Linkedin, 
  Github, 
  Twitter, 
  Download, 
  Send,
  MessageSquare,
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "alex@alexmorgan.dev",
      action: "Send Email",
      link: "mailto:alex@alexmorgan.dev",
      color: "text-blue-600"
    },
    {
      icon: Calendar, 
      title: "Schedule a Call",
      description: "Book a 30-min discovery call",
      action: "Book Now",
      link: "#",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Quick Chat",
      description: "Telegram or WhatsApp",
      action: "Start Chat", 
      link: "#",
      color: "text-purple-600"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", link: "#" },
    { icon: Github, label: "GitHub", link: "#" },
    { icon: Twitter, label: "Twitter", link: "#" }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16 fade-in">
          <Badge variant="outline" className="skill-tag">
            Get In Touch
          </Badge>
          <h2 className="gradient-text">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI-powered solutions? Whether you're a startup 
            looking to scale or an agency seeking automation, I'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-8 slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
              <p className="text-muted-foreground">
                Tell me about your project and I'll get back to you within 24 hours.
              </p>
            </div>
            
            <Card className="card-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name *</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, and timeline..."
                      rows={5}
                      required
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 slide-up">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Other Ways to Connect</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="card-elegant group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <method.icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{method.title}</h4>
                          <p className="text-muted-foreground text-sm">{method.description}</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <Card className="card-elegant bg-gradient-primary text-primary-foreground border-none">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <Download className="w-12 h-12 mx-auto opacity-80" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Download My Resume</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Get a detailed overview of my experience, skills, and achievements
                    </p>
                  </div>
                  <Button 
                    variant="secondary"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Download PDF Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="card-elegant">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-semibold mb-1">Quick Response Time</h4>
                    <p className="text-muted-foreground text-sm">
                      I typically respond to all inquiries within 24 hours, often much sooner
                    </p>
                  </div>
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <social.icon className="w-4 h-4 mr-2" />
                    {social.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;