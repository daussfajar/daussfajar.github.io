import { Code, Database, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import FajarPicture from "@/assets/images/fajar-photo.png";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: Database,
      title: "Full Stack",
      description: "From frontend to backend, database design to deployment"
    },
    {
      icon: Globe,
      title: "Modern Tech",
      description: "Using latest technologies and frameworks for optimal performance"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Creative solutions for complex technical challenges"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">
              About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated full stack developer with a passion for creating innovative and user-friendly web solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About text */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
              Fullstack Developer
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an experienced Full Stack Web Developer specializing in developing modern and scalable web applications. Currently working at <span className="text-primary font-semibold">Pusat Gadai Indonesia</span> as a <span className="text-primary font-semibold">Backend Developer</span>. As a backend developer, I contribute to building digital systems that support the company's operations.
              </p>
              <p>
                With expertise in frontend and backend development, I am passionate about creating exceptional user experiences and optimal application performance. I always keep up with the latest technological developments and apply best practices in every project.
              </p>
              <p>
                My focus is on developing applications that are not only functional but also maintainable, scalable, and provide real value to users and businesses.
              </p>
            </div>
          </div>

          {/* Profile card placeholder */}
          <div className="animate-slide-in-right">
            <Card className="card-gradient border-0 p-8 text-center">
              <CardContent className="p-0">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <img src={FajarPicture} alt="Fajar Firdaus" className="w-full h-full rounded-full object-cover" />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-2">Fajar Firdaus</h4>
                <p className="text-primary font-medium mb-4">
                  Backend Developer
                </p>
                <p className="text-sm text-muted-foreground">
                  Pusat Gadai Indonesia
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 p-6 text-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-heading font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;