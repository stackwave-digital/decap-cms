import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Starter Site",
    price: "$ 499",
    description: "High-performance custom build for emerging startups.",
    popular: false,
    features: [
      "Custom responsive design",
      "Up to 5 pages",
      "Basic SEO setup",
      "Contact & lead forms",
      "Social media integration",
      "SSL & Cloudflare setup",
    ],
  },
  {
    name: "Website Revamp",
    price: "$ 799",
    description: "Modernize your outdated digital presence with fresh designs and upgraded tech.",
    popular: false,
    features: [
      "Full Codebase Refactoring",
      "Design Overhauls",
      "Speed Optimization",
      "SEO Improvements",
      "Performance optimization score 90+",
      "1 month post-launch support",
    ],
  },
  {
    name: "Professional Business",
    price: "$ 999",
    description: "The sweet spot for growing companies needing a serious presence.",
    popular: true,
    features: [
      "Tailored UI/UX design",
      "Up to 10 custom pages",
      "Advanced technical SEO",
      "CRM & API integrations",
      "Speed optimization score 90+",
      "1 month post-launch support",
      "Custom animations & interactions",
      "Analytics & tracking setup",
    ],
  },
  {
    name: "Enterprise Solution",
    price: "$ 1,999",
    description: "Full-scale digital platform architecture for top-tier brands.",
    popular: false,
    features: [
      "Premium tailored design system",
      "Unlimited pages architecture",
      "Headless CMS integration",
      "E-commerce capabilities",
      "Priority performance optimization",
      "3 months post-launch support",
      "Complex custom animations",
      "Dedicated account manager",
      "Advanced security protocols",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transparent <span className="text-gradient">Investment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic pricing designed for ambitious startups and enterprise brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`bg-card relative overflow-hidden ${
                pkg.popular 
                  ? "border-primary/50 glow-strong" 
                  : "border-border hover:border-primary/30 transition-colors"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold">
                  Popular
                </div>
              )}
              <CardHeader className="text-center pb-6 pt-8">
                <CardDescription className="text-muted-foreground uppercase tracking-wider mb-2">
                  {pkg.name}
                </CardDescription>
                <CardTitle className="text-foreground">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground text-base font-normal ml-2">starting</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg" 
                  className={`w-full font-semibold ${
                    pkg.popular 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground/60 mt-12 font-medium tracking-wide">
          Need a custom enterprise architecture? Let's talk.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
