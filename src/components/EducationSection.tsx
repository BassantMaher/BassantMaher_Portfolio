import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = {
  degree: 'Bachelor of Science in Computer and Systems Engineering (CSE)',
  university: 'Helwan University Faculty of Engineering',
  period: 'August 2020 - July 2025',
  grade: 'Excellent',
  location: 'Cairo, Egypt'
};

// const certifications = [
//   {
//     title: 'React Native',
//     provider: 'Udemy by Maximilian Schwarzmüller',
//     description: 'Built cross-platform mobile applications using React Native, mastering navigation, native device features, state management, and deployment best practices.',
//     skills: ['React Native', 'Mobile Development', 'Cross-platform', 'State Management', 'Navigation']
//   },
//   {
//     title: 'NodeJS The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
//     provider: 'Udemy by Maximilian Schwarzmüller',
//     description: 'Mastered Node.js fundamentals, Express.js, RESTful APIs, GraphQL, authentication, file handling, and MVC architecture for backend development.',
//     skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'MVC', 'Authentication']
//   },
//   {
//     title: 'The Web Development Challenger Track',
//     provider: 'Ministry of Communications and Information Technology (MCIT), Egypt Udemy',
//     description: 'Developed responsive websites and implemented client-server interactions using HTML, CSS, JavaScript, and modern web frameworks.',
//     skills: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'Responsive Design']
//   },
//   {
//     title: 'ReactJs',
//     provider: 'ITI Summer',
//     description: 'Built dynamic single-page applications using React.js, focusing on components, hooks, state management, and API integration.',
//     skills: ['React.js', 'SPA', 'Hooks', 'State Management', 'API Integration']
//   },
// ];

export const EducationSection = () => {
  return (
    <section id="education">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through formal education and professional development courses
          </p>
        </div>

        {/* University Education */}
        <Card className="card-gradient border-0 shadow-lg ">
          <CardHeader className="pb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl font-heading font-semibold text-foreground mb-2">
                  {education.degree}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  {education.university}
                </CardDescription>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                  <span>{education.period}</span>
                  <span>•</span>
                  <span>{education.location}</span>
                </div>
              </div>
              <div className="text-right">
                <Badge className="bg-primary text-white mb-2">
                  <Award className="w-3 h-3 mr-1" />
                  {education.grade}
                </Badge>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Certifications */}
        {/* <div>
          <h3 className="font-heading text-2xl font-semibold mb-8 text-center">
            Professional <span className="text-gradient">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-gradient border-0 shadow-lg h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-heading font-semibold text-foreground leading-tight mb-2">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {cert.provider}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-primary text-sm">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-xs bg-muted hover:bg-accent hover:text-white transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};