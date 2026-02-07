import logo from "@/assets/stackwave-logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo.src ?? logo}
              alt="Stackwave Digital web design agency US logo"
              className="h-10 w-auto"
            />
            <span className="hidden sm:inline text-xl font-bold text-foreground font-higuen">Stackwave</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Start Your Project
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
