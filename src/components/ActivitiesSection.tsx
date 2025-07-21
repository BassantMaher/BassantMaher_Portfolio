import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Paintbrush, Megaphone, Palette, Rocket } from 'lucide-react';

const activities = [
  {
    title: 'Graphic Design Head',
    organization: 'PIXELS',
    period: 'Aug 2023 - Aug 2024',
    type: 'Leadership',
    icon: Paintbrush,
    description: 'Led a team of designers to produce high-quality visual content for engineering events and workshops at Helwan University Faculty of Engineering.',
    achievements: [
      'Managed a creative team of graphic designers',
      'Delivered visual content for major engineering events',
      'Established design standards and workflows',
      'Mentored junior designers in creative processes'
    ],
    skills: ['Team Leadership', 'Graphic Design', 'Event Marketing', 'Creative Direction']
  },
  {
    title: 'Media Vice Head',
    organization: 'Launtech',
    period: 'Dec 2022 - Aug 2023',
    type: 'Leadership',
    icon: Users,
    description: 'Co-managed the media team to deliver promotional materials, event coverage, and branding assets at Helwan University.',
    achievements: [
      'Co-led media team operations and strategy',
      'Delivered comprehensive event coverage',
      'Developed branding guidelines and assets',
      'Coordinated cross-functional team projects'
    ],
    skills: ['Team Management', 'Event Coverage', 'Brand Development', 'Strategic Planning']
  },
  {
    title: 'Media Member',
    organization: 'Google Developer Student Club',
    period: 'Jun 2022 - Aug 2023',
    type: 'Community',
    icon: Megaphone,
    description: 'Created and edited visual content, including social media posts and event banners, at Helwan University Faculty of Engineering.',
    achievements: [
      'Created engaging social media content',
      'Designed promotional materials for tech events',
      'Increased club engagement through visual storytelling',
      'Collaborated with development teams on branding'
    ],
    skills: ['Social Media Design', 'Content Creation', 'Brand Identity', 'Community Engagement']
  },

  {
    title: 'UI/UX Designer',
    organization: 'Launtech',
    period: 'Jan 2023 - Aug 2023',
    type: 'Design',
    icon: Palette,
    description: 'Designed intuitive and user-friendly interfaces for student-led web and mobile applications at Helwan University.',
    achievements: [
      'Designed user interfaces for multiple applications',
      'Conducted user experience research and testing',
      'Created design systems and component libraries',
      'Collaborated with developers on implementation'
    ],
    skills: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems']
  },
  // {
  //   title: 'Media Vice Head',
  //   organization: 'Live in Mars',
  //   period: 'Jan 2023 - Aug 2023',
  //   type: 'Leadership',
  //   icon: Rocket,
  //   description: 'Directed visual content creation and team coordination for student-led science and tech initiatives at Helwan University.',
  //   achievements: [
  //     'Led visual content strategy for science initiatives',
  //     'Coordinated multimedia production teams',
  //     'Developed educational content for tech programs',
  //     'Managed creative projects from concept to completion'
  //   ],
  //   skills: ['Creative Leadership', 'Science Communication', 'Educational Content', 'Project Management']
  // }
];

const getIconColor = (type: string) => {
  switch (type) {
    case 'Leadership': return 'text-primary';
    case 'Community': return 'text-accent';
    case 'Design': return 'text-tech-teal';
    default: return 'text-muted-foreground';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Leadership': return 'bg-primary/10 text-primary';
    case 'Community': return 'bg-accent/10 text-accent';
    case 'Design': return 'bg-tech-teal/10 text-tech-teal';
    default: return 'bg-muted text-muted-foreground';
  }
};

export const ActivitiesSection = () => {
  return (
    <section id="activities" className="section-padding bg-muted/20">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Activities & <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Active involvement in university organizations, leading creative teams and driving innovation in design and technology
          </p>
        </div>

        <div className="grid gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="card-gradient border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-${activity.type === 'Leadership' ? 'primary' : activity.type === 'Community' ? 'accent' : 'tech-teal'}/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <activity.icon className={`w-6 h-6 ${getIconColor(activity.type)}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4">
                      <div>
                        <CardTitle className="text-xl font-heading font-semibold text-foreground">
                          {activity.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-primary mt-1">
                          {activity.organization}
                        </CardDescription>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{activity.period}</span>
                        <Badge className={getTypeColor(activity.type)}>
                          {activity.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {activity.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {activity.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activity.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-xs bg-muted hover:bg-primary hover:text-white transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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