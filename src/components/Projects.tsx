import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Web Application",
      description: "Sistem manajemen komprehensif untuk Pusat Gadai Indonesia dengan fitur inventory management, customer portal, dan real-time reporting dashboard.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Redux", "Express.js"],
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      category: "Full Stack",
      status: "Production"
    },
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce modern dengan payment gateway integration, inventory management, dan admin dashboard yang user-friendly.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe API", "Tailwind CSS"],
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      category: "E-Commerce",
      status: "Development"
    },
    {
      title: "Real-Time Chat Application",
      description: "Aplikasi chat real-time dengan fitur group messaging, file sharing, dan video call integration menggunakan WebRTC technology.",
      technologies: ["Vue.js", "Socket.io", "Node.js", "Redis", "WebRTC"],
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      category: "Web App",
      status: "Completed"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Dashboard analytics untuk visualisasi data business intelligence dengan real-time charts dan customizable reports.",
      technologies: ["React.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      category: "Analytics",
      status: "Production"
    },
    {
      title: "Mobile-First PWA",
      description: "Progressive Web Application dengan offline capabilities, push notifications, dan responsive design untuk optimal mobile experience.",
      technologies: ["React.js", "PWA", "Service Workers", "IndexedDB", "Firebase"],
      image: "bg-gradient-to-br from-cyan-500 to-blue-600",
      category: "PWA",
      status: "Completed"
    },
    {
      title: "API Gateway System",
      description: "Microservices architecture dengan API gateway, rate limiting, authentication, dan comprehensive logging system.",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "JWT"],
      image: "bg-gradient-to-br from-indigo-500 to-purple-600",
      category: "Backend",
      status: "Production"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-green-500";
      case "Development": return "bg-yellow-500";
      case "Completed": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase project-project terbaru yang telah saya kembangkan menggunakan teknologi modern dan best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-gradient border-0 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                {/* Project image placeholder with gradient */}
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Hover overlay with action buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-gray-800 hover:bg-white">
                      <Eye className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 text-gray-800 hover:bg-white">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-heading font-semibold mb-3 text-foreground">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex space-x-2 w-full">
                  <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-0 max-w-2xl mx-auto p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gradient">
                Interested in My Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your ideas to life! Whether you need a full-stack application, a modern web app, or an e-commerce platform, I'm here to help.
              </p>
              <Button 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-3 rounded-full transition-bounce"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;