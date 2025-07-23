import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Software Engineer
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Bassant Maher</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Highly motivated Software Engineer with expertise in backend and full-stack development. 
              Passionate about building scalable APIs, AI/IoT solutions, and innovative user-focused applications.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>bassanthafez12@gmail.com</span>
              </div>
             
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Cairo, Egypt</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="hero-gradient text-white px-8 py-3 text-lg font-medium"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 text-lg font-medium border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
            <a
                  href="https://www.linkedin.com/in/bassant-maher-66b1651b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Linkedin size={20} />
                  </Button>
                </a>
                <a
                  href="https://github.com/BassantMaher"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Github size={20} />
                  </Button>
                </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-scale-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <img
                  src="https://res.cloudinary.com/dzgtcsjjg/image/upload/v1753277061/bassant_yw5m6q.jpg"
                  alt="Bassant Maher Ibrahim Sayed"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/60 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};