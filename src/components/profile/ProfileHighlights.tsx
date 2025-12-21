import { Trophy, Building2, Cpu, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfileHighlights = () => {
  const achievements = [
    {
      icon: Building2,
      title: 'Founded Rx Codex AI',
      description: 'Started an AI company at age 14',
      gradient: 'from-primary to-purple-500',
    },
    {
      icon: Cpu,
      title: 'Developed AI Models',
      description: '5+ custom AI models created',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: FileText,
      title: 'Research Publications',
      description: 'Published AI research papers',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      icon: Users,
      title: 'Community Builder',
      description: 'Growing AI community in Bangladesh',
      gradient: 'from-orange-500 to-amber-400',
    },
  ];

  return (
    <Card className="glass-card border-border/30 bg-card/30 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="w-5 h-5 text-primary" />
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Highlights
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden p-4 rounded-xl bg-muted/20 border border-border/20 hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative flex items-start gap-3">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${achievement.gradient} shadow-lg`}>
                  <achievement.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHighlights;
