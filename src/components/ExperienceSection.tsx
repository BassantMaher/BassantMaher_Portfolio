import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  // {
  //   title: 'Software Engineer',
  //   company: 'Deal.ai',
  //   location: 'Cairo, Egypt',
  //   period: 'August 2020 - July 2025',
  //   type: 'Full-time',
  //   description: 'Contributed to customizing a fork of Grapes.JS as the CMS for Deal.ai, enhancing content management capabilities.',
  //   achievements: [
  //     'Customized Grapes.JS framework for enhanced CMS functionality',
  //     'Improved content management workflows and user experience',
  //     'Collaborated with cross-functional teams on product development'
  //   ],
  //   technologies: ['JavaScript', 'Grapes.JS', 'CMS Development', 'Frontend Development']
  // },
  {
    title: 'Machine Learning Intern',
    company: 'Microsoft Digital Egypt Pioneers Initiative (DEPI)',
    location: 'Cairo, Egypt',
    period: 'June 2024 - January 2025',
    type: 'Internship',
    description: 'Comprehensive machine learning program focusing on AI fundamentals, MLOps, and practical applications.',
    achievements: [
      'Mastered statistics, linear algebra, and data science with Python',
      'Built and deployed basic GANs for generative AI applications',
      'Developed NLP models with attention mechanisms',
      'Gained expertise in Azure AI services and MLOps workflows',
      'Applied Agile and Scrum methodologies in team projects'
    ],
    technologies: ['Python', 'Machine Learning', 'Azure AI', 'MLflow', 'Hugging Face', 'GANs', 'NLP', 'MLOps']
  },
  {
    title: 'Summer Training',
    company: 'Helwan University',
    location: 'Cairo, Egypt',
    period: 'June 2022 - July 2022',
    type: 'Training',
    description: 'Intensive summer training program covering foundational programming concepts and web development technologies.',
    achievements: [
      'Completed comprehensive Python and OOP training',
      'Gained proficiency in VHDL for hardware design',
      'Developed web applications using HTML, CSS, JavaScript, and PHP',
      'Built strong foundation in software development principles'
    ],
    technologies: ['Python', 'OOP', 'VHDL', 'HTML', 'CSS', 'JavaScript', 'PHP']
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through diverse roles in software engineering, AI development, and innovative technology solutions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-gradient border-0 shadow-lg overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-heading font-semibold text-foreground">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary mt-1">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {experience.period}
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-muted hover:bg-primary hover:text-white transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};