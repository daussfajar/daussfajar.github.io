import { Heart, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/daussfajar", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/daussfajar28", label: "LinkedIn" },
    { icon: Mail, href: "mailto:daussfajar28@gmail.com", label: "Email" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-gradient">
              Fajar Firdaus
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer at Pusat Gadai Indonesia. Passionate about building modern web applications with a focus on user experience and performance.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Depok, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm underline-animated"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass-effect hover:bg-primary hover:text-primary-foreground transition-smooth group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Available for freelance opportunities and collaboration
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center">
              © {currentYear} Fajar Firdaus. Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
              and modern web technologies
            </p>
            <p className="text-sm text-muted-foreground">
              Pusat Gadai Indonesia • Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;