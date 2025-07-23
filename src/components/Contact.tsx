import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Saya akan merespon dalam 24 jam.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "fajar.daussfajar28@gmail.com",
      link: "mailto:daussfajar28@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 895-0818-3980",
      link: "tel:+6289508183980"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Depok, Indonesia",
      link: "#"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Chat",
      link: "https://wa.me/6289508183980"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">
              Let's Connect & Collaborate
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t hesitate to get in touch with me. Whether you have a question, a project idea, or just want to say hi, I&apos;m here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-heading font-semibold mb-8 text-foreground">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-gradient border-0 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-smooth underline-animated"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional info */}
            <Card className="card-gradient border-0 mt-8 p-6">
              <CardContent className="p-0">
                <h4 className="font-heading font-semibold mb-4 text-foreground">
                  Response Time
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I usually respond to emails and messages within 24 hours.
                  For urgent discussions, please contact me via WhatsApp for a quicker response.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="card-gradient border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-muted focus:border-primary transition-smooth"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-muted focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-muted focus:border-primary transition-smooth"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-background border-muted focus:border-primary transition-smooth resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 rounded-full transition-bounce group"
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-0 max-w-4xl mx-auto p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-gradient">
                Let's Work Together
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From concept to deployment, I'm ready to help you develop a website or web application
                that meets your business needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-3 rounded-full transition-bounce"
                  onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                >
                  Chat via WhatsApp
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 rounded-full transition-bounce"
                  onClick={() => window.open("mailto:fajar.firdaus@pegadaian.co.id", "_blank")}
                >
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;