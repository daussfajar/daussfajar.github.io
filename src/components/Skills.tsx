import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript", 
        "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "SASS/SCSS"
      ],
      color: "bg-primary"
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Express.js", "PHP", "Laravel", "Python", 
        "Django", "RESTful APIs", "GraphQL", "Socket.io", "JWT"
      ],
      color: "bg-secondary"
    },
    {
      title: "Database & DevOps",
      skills: [
        "MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", 
        "AWS", "Git", "CI/CD", "Linux", "Nginx"
      ],
      color: "bg-accent"
    },
    {
      title: "Tools & Others",
      skills: [
        "VS Code", "Figma", "Postman", "Webpack", "Vite", 
        "Jest", "Testing", "Agile", "Scrum", "Project Management"
      ],
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I use to develop modern and scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="card-gradient border-0 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  <CardTitle className="text-xl font-heading text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience summary */}
        <div className="mt-16 text-center">
          <Card className="card-gradient border-0 max-w-4xl mx-auto p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-gradient">
                Experience & Achievements
              </h3>
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-primary mb-2">5+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-secondary mb-2">20+</h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-accent mb-2">15+</h4>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;