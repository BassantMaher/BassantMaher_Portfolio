import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Backend Development',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Python',
      'RESTful APIs',
      'JWT & Authentication',
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      'React.js',
      'React Native',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
      'UI/UX Design',
    ],
  },
  {
    title: 'Databases',
    skills: [
      'MongoDB',
      'MySQL',
      'Firebase Firestore',
      'Mongoose',
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'Machine Learning',
      'Data Science',
    ],
  },
];

const tools = [
  'GitHub', 'Postman', 'Visual Studio', 'MongoDB Compass', 'MySQL Workbench',
  'MATLAB', 'Android Studio', 'Anaconda', 'Adobe Photoshop', 'Adobe Illustrator',
  'Adobe XD', 'Figma', 'Cursor', 'Hugging Face'
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in modern web development, AI solutions, and scalable system architecture
          </p>
        </div>

        {/* Skill Categories as Badges */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <Card key={category.title} className="card-gradient border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-card hover:bg-primary hover:text-white transition-colors duration-300 cursor-default shadow"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="font-heading text-2xl font-semibold mb-8">
            Tools & <span className="text-gradient">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-card hover:bg-primary hover:text-white transition-colors duration-300 cursor-default shadow"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};