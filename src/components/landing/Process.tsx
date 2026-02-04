import { Search, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business goals, audience, and vision to craft a tailored strategy."
  },
  {
    number: "02",
    icon: Wrench,
    title: "Development",
    description: "Our team builds your solution with clean code, modern frameworks, and rigorous testing."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch",
    description: "We deploy your project with optimized performance, security, and ongoing support."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The <span className="text-gradient">Stackwave</span> Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results, every time
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary group-hover:glow transition-all duration-300">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="text-5xl font-bold text-primary/20 mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
