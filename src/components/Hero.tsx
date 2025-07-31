import { ArrowDown, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background dark:bg-slate-900">      
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-primary/5 to-muted/20 dark:from-slate-900/50 dark:via-blue-900/30 dark:to-indigo-900/40"></div>
            
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      <div className="absolute top-60 left-1/2 w-16 h-16 bg-teal-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '3.5s' }}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main content */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-slate-700 dark:text-slate-100 lg:text-4xl mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r lg:text-5xl from-blue-500 via-sky-400 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Fajar Firdaus, S.Kom.
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 mb-4">
            Backend Developer at <span className="text-primary font-semibold">Pusat Gadai Indonesia</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating modern, scalable web applications with cutting-edge technologies. 
            Specialized in full-stack development with a focus on user experience and clean code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group"
            >
              Show Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Contact Me
            </Button>
            
            {/* Download CV Button - Uncomment if needed */}
            <Button
              onClick={() => window.open("/Fajar-Resume.pdf", "_blank")}
              variant="secondary"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/daussfajar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-cyan-400 hover:text-cyan-400 text-slate-300 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/daussfajar28/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-blue-400 hover:text-blue-400 text-slate-300 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/daussfajar28/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-pink-400 hover:text-pink-400 text-slate-300 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            >
              <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:daussfajar28@gmail.com"
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-indigo-400 hover:text-indigo-400 text-slate-300 transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;