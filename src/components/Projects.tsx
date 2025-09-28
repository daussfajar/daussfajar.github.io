import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import spa from "@/assets/projects/upj/upj-spa.jpeg";
import mbkm from "@/assets/projects/upj/upj-mbkm.png";
import studentPortal from "@/assets/projects/upj/upj-student-portal.png";
import siuk from "@/assets/projects/upj/upj-siuk.png";
import eOffice from "@/assets/projects/upj/upj-e-office.png";
import careerCenter from "@/assets/projects/upj/uc-career-center.jpg";
import incadUC from "@/assets/projects/upj/upj-incad-uc.png";
import upjSimpul from "@/assets/projects/upj/upj-simpul.png";
import mentorkita from "@/assets/projects/upj/mentorkita.png";
import ucOcw from "@/assets/projects/upj/uc-ocw.png";

const Projects = () => {
  const [imageLoading, setImageLoading] = useState<{[key: number]: boolean}>({});
  
  useEffect(() => {
    // Simulate image loading for each project
    const loadingStates: {[key: number]: boolean} = {};
    for (let i = 0; i < 6; i++) {
      loadingStates[i] = true;
    }
    setImageLoading(loadingStates);
    
    // Simulate images loading with different delays
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setImageLoading(prev => ({ ...prev, [i]: false }));
      }, 1000 + (i * 200));
    }
  }, []);

  const projects = [
    {
      title: "Sistem Pencairan Anggaran",
      description: "Designing and developing a budget disbursement system at Universitas Pembangunan Jaya that is used to manage the annual budget disbursement process.",
      technologies: ["JQuery", "Codeigniter 3", "MySQL", "PHP", "Bootstrap 4", "JavaScript", "HTML", "CSS"],
      image: spa,
      category: "Full Stack",
      status: "Production"
    },
    {
      title: "MBKM Management System",
      description: "Developing a comprehensive MBKM management system for Universitas Pembangunan Jaya to facilitate student internships and community service programs.",
      technologies: ["JQuery", "Codeigniter 3", "MySQL", "PHP", "Bootstrap 4", "JavaScript", "HTML", "CSS"],
      image: mbkm,
      category: "Full Stack",
      status: "Production"
    },
    {
      title: "Student Portal",
      description: "Creating a student portal for Universitas Pembangunan Jaya that provides students with access to academic resources, schedules, and personal information.",
      technologies: ["JQuery", "Codeigniter 3", "MySQL", "PHP", "Bootstrap 4", "JavaScript", "HTML", "CSS"],
      image: studentPortal,
      category: "Full Stack",
      status: "Production"
    },
    {
      title: "Sistem Informasi Uji Kompetensi",
      description: "Developing an information system for competency testing to streamline the process of scheduling, conducting, and evaluating competency tests.",
      technologies: ["JQuery", "Codeigniter 3", "MySQL", "PHP", "Bootstrap 4", "JavaScript", "HTML", "CSS"],
      image: siuk,
      category: "Full Stack",
      status: "Development"
    },
    {
      title: "E-Office Application",
      description: "Designing and building an E-Office system at Pembangunan Jaya University which is used to manage the process of borrowing infrastructure, borrowing equipment and submitting documents.",
      technologies: ["JQuery", "Codeigniter 3", "MySQL", "PHP", "Bootstrap 4", "JavaScript", "HTML", "CSS"],
      image: eOffice,
      category: "Full Stack",
      status: "Development"
    },
    {
      title: "Career Center System",
      description: "Creating a career center system for Universitas Pembangunan Jaya to assist students and alumni in finding job opportunities and career development resources.",
      technologies: ["JQuery", "Codeigniter 3", "MySQL", "PHP", "Bootstrap 4", "JavaScript", "HTML", "CSS"],
      image: careerCenter,
      category: "Full Stack",
      status: "Production"
    },
    {
      title: "INCAD UC",
      description: "Designing and building the INCAD (Indonesia Capacity Development) application for Ciputra University. The application which is used to provide a Repository and Information about workshops. The application is designed to be user-friendly and easy to navigate, with a focus on providing high-quality workshop content.",
      technologies: ["JQuery", "Codeigniter 3", "MySQL", "PHP", "Bootstrap 4", "JavaScript", "HTML", "CSS"],
      image: incadUC,
      category: "Full Stack",
      status: "Production"
    },
    {
      title: "SIMPUL",
      description: "Designing and building Sistem Kepegawaian Unggul system at Universitas Pembangunan Jaya which is used to manage personnel processes, such as Attendance, Leave and Permit Application, KPI Assessment Process and Form Submission.",
      technologies: ["JQuery", "Codeigniter 3", "MySQL", "PHP", "Bootstrap 4", "JavaScript", "HTML", "CSS"],
      image: upjSimpul,
      category: "Full Stack",
      status: "Production"
    },
    {
      title: "MentorKita",
      description: "Creating a web-based platform that connects mentors and mentees for career development and personal growth. The platform allows users to create profiles, search for mentors/mentees, and schedule mentoring sessions.",
      technologies: ["Laravel", "MySQL", "PHP", "Bootstrap 5", "JavaScript", "HTML", "CSS"],
      image: mentorkita,
      category: "Full Stack",
      status: "Completed"
    },
    {
      title: "UC OCW (Open Course Ware)",
      description: "Developing an Open Course Ware (OCW) platform for Ciputra University to provide free access to educational resources and course materials for students and the public.",
      technologies: ["Laravel", "MySQL", "PHP", "Bootstrap 5", "JavaScript", "HTML", "CSS"],
      image: ucOcw,
      category: "Full Stack",
      status: "Completed"
    },
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
                {/* Project image with skeleton loading */}
                <div className="h-48 relative overflow-hidden">
                  {imageLoading[index] ? (
                    <Skeleton className="h-full w-full" />
                  ) : (
                    <>
                      <div className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 relative">
                        {typeof project.image === "string" && project.image.startsWith("bg-") ? (
                          <div className={`h-full w-full ${project.image}`}></div>
                        ) : (
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="h-full w-full object-cover"
                          />
                        )}

                        {/* Category badge */}
                        <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold text-white rounded bg-gray-500">
                          {project.category}
                        </span>
                        
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
                    </>
                  )}
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