import { Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProfileSkills = () => {
  const skills = [
    { name: 'Artificial Intelligence', level: 'Expert' },
    { name: 'Machine Learning', level: 'Expert' },
    { name: 'Deep Learning', level: 'Advanced' },
    { name: 'Python', level: 'Expert' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'TensorFlow', level: 'Advanced' },
    { name: 'NLP', level: 'Advanced' },
    { name: 'Computer Vision', level: 'Intermediate' },
    { name: 'UI/UX Design', level: 'Advanced' },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30';
      case 'Advanced':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30';
      default:
        return 'bg-muted/40 text-muted-foreground border-border/30 hover:bg-muted/60';
    }
  };

  return (
    <Card className="glass-card border-border/30 bg-card/30 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Zap className="w-5 h-5 text-primary" />
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index}
              variant="outline"
              className={`${getLevelColor(skill.level)} px-3 py-1.5 text-sm font-medium transition-all duration-300 cursor-default`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border/20">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Expert</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-muted-foreground">Advanced</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-muted-foreground" />
            <span className="text-muted-foreground">Intermediate</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSkills;
