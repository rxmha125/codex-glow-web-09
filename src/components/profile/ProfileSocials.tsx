import { Globe, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProfileSocials = () => {
  const socials = [
    {
      icon: Globe,
      label: 'Website',
      href: 'https://rxcodexai.com',
      color: 'hover:bg-primary/20 hover:text-primary hover:border-primary/40',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rxmha',
      color: 'hover:bg-gray-500/20 hover:text-gray-300 hover:border-gray-500/40',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rxmha',
      color: 'hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/40',
    },
    {
      icon: Twitter,
      label: 'X (Twitter)',
      href: 'https://twitter.com/rxmha_',
      color: 'hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/40',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@rxcodexai.com',
      color: 'hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/40',
    },
  ];

  return (
    <Card className="glass-card border-border/30 bg-card/30 backdrop-blur-xl">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Globe className="w-5 h-5 text-primary" />
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Connect
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {socials.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              asChild
              className={`border-border/40 bg-muted/20 transition-all duration-300 ${social.color}`}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="w-4 h-4 mr-2" />
                {social.label}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSocials;
