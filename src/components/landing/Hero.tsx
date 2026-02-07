import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Digital Agency Based in Dallas Fort Worth, US</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Innovate.</span>{" "}
          <span className="text-foreground">Develop.</span>{" "}
          <span className="text-gradient">Transform.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80 sm:text-muted-foreground mb-10 leading-relaxed">
          Bespoke digital solutions for brands that demand performance. 
          Custom code, seamless deployment, and zero-compromise design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-border text-foreground hover:bg-secondary hover:text-foreground font-semibold text-lg px-8 py-6"
          >
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">100%</div>
            <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">5+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;