import { Link2, Cake, CalendarDays, BadgeCheck, MapPin } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAdmin } from '@/contexts/AdminContext';
import teamMemberImage from '@/assets/team-member.jpg';

const ProfileInfo = () => {
  const { isAdmin } = useAdmin();

  const roles = [
    { label: 'Founder & CEO', primary: true },
    { label: 'AI Architect', primary: false },
    { label: 'Researcher', primary: false },
  ];

  return (
    <div className="relative px-4 sm:px-6 pb-6">
      {/* Profile photo - overlapping banner with glow effect */}
      <div className="relative -mt-20 sm:-mt-24 mb-6 flex justify-between items-end">
        <div className="relative group">
          {/* Glow effect behind avatar */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-purple-500/50 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity scale-110" />
          <Avatar className="relative w-32 h-32 sm:w-40 sm:h-40 border-4 border-background ring-4 ring-primary/20 shadow-2xl shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
            <AvatarImage src={teamMemberImage} alt="Rx MHA profile photo" />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-primary to-purple-500 text-white">RM</AvatarFallback>
          </Avatar>
        </div>
        
        {isAdmin && (
          <Button variant="outline" className="rounded-full font-semibold px-5 border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted/50 hover:border-primary/50 transition-all">
            Edit profile
          </Button>
        )}
      </div>
      
      {/* Name & Username with gradient */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Rx MHA
          </h2>
          <div className="relative">
            <BadgeCheck className="w-6 h-6 text-primary fill-primary/20" />
            <div className="absolute inset-0 bg-primary/30 blur-md rounded-full animate-pulse" />
          </div>
        </div>
        <p className="text-muted-foreground text-lg">@rxmha_</p>
      </div>
      
      {/* Role badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {roles.map((role, index) => (
          <Badge 
            key={index}
            variant={role.primary ? "default" : "outline"}
            className={role.primary 
              ? "bg-gradient-to-r from-primary to-purple-500 text-white border-0 px-3 py-1" 
              : "border-border/50 bg-muted/30 text-muted-foreground px-3 py-1 hover:bg-muted/50"
            }
          >
            {role.label}
          </Badge>
        ))}
      </div>
      
      {/* Bio */}
      <p className="text-foreground leading-relaxed text-base sm:text-lg">
        AI Developer | Founder of Rx Codex AI | Building the future of artificial intelligence from Bangladesh 🇧🇩 | The future is gonna be awesome.
      </p>
      
      {/* Info Row - Enhanced styling */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm text-muted-foreground">
        <a 
          href="https://rxcodexai.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-primary transition-colors group"
        >
          <Link2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span className="text-primary">rxcodexai.com</span>
        </a>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          Bangladesh
        </span>
        <span className="flex items-center gap-1.5">
          <Cake className="w-4 h-4" />
          Born November 4, 2010
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarDays className="w-4 h-4" />
          Joined January 2025
        </span>
      </div>
      
      {/* Following/Followers - Enhanced styling */}
      <div className="flex gap-5 mt-5 text-sm">
        <button className="hover:underline transition-all group">
          <strong className="text-foreground group-hover:text-primary transition-colors text-lg">2</strong>{' '}
          <span className="text-muted-foreground">Following</span>
        </button>
        <button className="hover:underline transition-all group">
          <strong className="text-foreground group-hover:text-primary transition-colors text-lg">2</strong>{' '}
          <span className="text-muted-foreground">Followers</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
