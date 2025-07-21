import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Shopping Cart (SSC) System',
    description: 'AI-powered Smart Shopping Cart system with personalized recommendations, indoor navigation, real-time cart tracking, and seamless transaction processing.',
    features: [
      'RESTful API with Node.js and Express.js',
      'A* pathfinding algorithm for indoor navigation',
      'Real-time cart tracking with Socket.IO',
      'Secure JWT authentication and admin dashboard',
      'Hardware integration for sensors and actuators'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Redis', 'Stripe'],
    github: '#',
    featured: true
  },
  {
    title: 'SHAREKNY - Social Platform',
    description: 'Real-time social networking platform enabling users to create, view, edit, and delete posts with a live feed and robust authentication.',
    features: [
      'Real-time post management',
      'Live feed updates',
      'Secure user authentication',
      'Input validation across all features'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'EJS', 'Socket.io'],
    github: '#',
    
  },
  {
    title: 'Smart Lab Dashboard',
    description: 'Real-time React admin dashboard for IoT lab inventory control with Firebase integration and live monitoring capabilities.',
    features: [
      'Real-time inventory monitoring',
      'Event logs and analytics',
      'Chart visualizations',
      'Embedded camera feed integration',
      'Secure admin access control'
    ],
    technologies: ['React.js', 'FastAPI', 'Firebase', 'Firebase Auth', 'Hugging Face'],
    github: '#',
    
  },
  {
    title: 'E-Commerce Backend',
    description: 'Comprehensive e-commerce platform with user authentication, product catalog management, shopping cart, and integrated payment systems.',
    features: [
      'Complete user authentication system',
      'Product catalog management',
      'Shopping cart functionality',
      'Order processing workflow',
      'Payment gateway integration'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'EJS'],
    github: '#',
    
  },
  {
    title: 'Nexus Book Reselling',
    description: 'Book reselling platform with comprehensive catalog using books API, supporting cart management and purchases of new or pre-owned books.',
    features: [
      'External books API integration',
      'Shopping cart management',
      'New and pre-owned book categories',
      'User-friendly interface'
    ],
    technologies: ['React.js', 'Books API', 'CSS3', 'JavaScript'],
    github: '#',
    
  },
  {
    title: 'Hangman Game',
    description: 'Interactive Hangman game with dual themes and graphical interface, featuring progress tracking and user feedback systems.',
    features: [
      'Two distinct game themes',
      'Graphical user interface',
      'Player progress tracking',
      'Real-time feedback system'
    ],
    technologies: ['Python', 'PyQt', 'GUI Design'],
    github: '#',
    
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative applications spanning web development, AI integration, and IoT solutions
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`project-card border-0 shadow-lg overflow-hidden ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : ''} gap-1`}>
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-heading font-semibold mb-2">
                        {project.title}
                        {project.featured && (
                          <Badge className="ml-2 bg-primary text-white">Graduation Project</Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-muted hover:bg-primary hover:text-white transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  
                </CardHeader>

                <CardContent className={project.featured ? "p-6" : "px-6 pb-6"}>
                  <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
                  href="https://github.com/BassantMaher"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};