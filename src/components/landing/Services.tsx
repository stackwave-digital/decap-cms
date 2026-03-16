import { Palette, Code2, Cloud, Sparkles, SearchCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "User-centric prototypes and mobile-first wireframing that convert visitors into customers.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "High-speed sites built from scratch. No bloated templates, just clean, performant code.",
    features: ["React & Astro", "Headless CMS", "API Integration", "Performance Optimization"]
  },
  {
    icon: Sparkles,
    title: "Website Revamps",
    description: "Modernize your outdated digital presence with fresh designs and upgraded architectures.",
    features: ["Codebase Refactoring", "Design Overhauls", "Speed Optimization", "SEO Improvements"]
  },
  {
    icon: SearchCheck,
    title: "Website & UX Audits",
    description: "Comprehensive review of existing sites with actionable feedback on improving design, conversion rates, and performance.",
    features: ["UX Consultation", "Performance Profiling", "Conversion Analysis", "Actionable Roadmaps"]
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description: "Reliable hosting, SSL, and DNS management for worry-free operations.",
    features: ["Cloud Hosting", "SSL Certificates", "DNS Management", "CI/CD Pipelines"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions crafted for performance and scalability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
