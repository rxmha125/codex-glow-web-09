import { User, Lightbulb, Rocket, Code, Brain, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProfileAbout = () => {
  const highlights = [
    { icon: Brain, label: 'AI Architecture', description: 'Designing intelligent systems' },
    { icon: Code, label: 'Web Development', description: 'Building modern web experiences' },
    { icon: Lightbulb, label: 'Research', description: 'Pushing AI boundaries' },
    { icon: Palette, label: 'Design', description: 'Creating beautiful interfaces' },
  ];

  return (
    <Card className="glass-card border-border/30 bg-card/30 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <User className="w-5 h-5 text-primary" />
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            About
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          I'm Rx MHA, the 15-year-old founder and CEO of Rx Codex AI. I'm passionate about 
          building the future of artificial intelligence and creating technologies that 
          make a real difference. From Bangladesh, I'm on a mission to democratize AI 
          and make it accessible to everyone.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group flex items-start gap-3 p-3 rounded-xl bg-muted/20 border border-border/20 hover:bg-muted/40 hover:border-primary/30 transition-all duration-300"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileAbout;
