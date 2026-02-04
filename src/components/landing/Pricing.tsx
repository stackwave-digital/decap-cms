import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Starter Site",
    price: "GHS 3,500",
    description: "Perfect for small businesses and startups",
    popular: false,
    features: [
      "Custom responsive design",
      "Up to 5 pages",
      "Basic SEO setup",
      "Contact form",
      "Social media links",
      "SSL certificate",
    ],
  },
  {
    name: "Professional Business",
    price: "GHS 6,000",
    description: "For growing businesses that need more",
    popular: true,
    features: [
      "Custom responsive design",
      "Up to 10 pages",
      "Advanced SEO optimization",
      "Contact form integration",
      "Social media links",
      "SSL certificate",
      "1 month free support",
      "Performance optimization",
    ],
  },
  {
    name: "Enterprise Solution",
    price: "GHS 12,000",
    description: "Full-scale digital presence for large brands",
    popular: false,
    features: [
      "Custom responsive design",
      "Unlimited pages",
      "Full SEO strategy",
      "CMS integration",
      "E-commerce ready",
      "SSL certificate",
      "3 months free support",
      "Priority performance optimization",
      "Analytics dashboard",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mx-auto">
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
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
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

        <p className="text-center text-sm text-muted-foreground mt-8">
          Custom quotes available for larger projects
        </p>
      </div>
    </section>
  );
};

export default Pricing;
