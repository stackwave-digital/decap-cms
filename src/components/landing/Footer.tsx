import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import logo from "@/assets/stackwave-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "https://x.com/stackwavedigital", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/stackwave-digital", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/stackwavedigital", label: "Instagram" },
    { icon: Github, href: "https://github.com/stackwavedigital", label: "GitHub" }
  ];

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img
              src={logo.src ?? logo}
              alt="Stackwave Digital web design agency Ghana logo"
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold text-foreground font-higuen">Stackwave Digital</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Stackwave Digital. Accra, Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
