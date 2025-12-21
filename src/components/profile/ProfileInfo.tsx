import { Link2, Cake, CalendarDays, BadgeCheck } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import teamMemberImage from '@/assets/team-member.jpg';

const ProfileInfo = () => {
  const { isAdmin } = useAdmin();

  return (
    <div className="px-4 pb-6">
      {/* Profile photo - overlapping banner */}
      <div className="relative -mt-16 mb-4 flex justify-between items-end">
        <div className="relative">
          <Avatar className="w-32 h-32 border-4 border-background ring-4 ring-primary/10 shadow-xl">
            <AvatarImage src={teamMemberImage} alt="Rx MHA profile photo" />
            <AvatarFallback className="text-3xl">RM</AvatarFallback>
          </Avatar>
        </div>
        
        {isAdmin && (
          <Button variant="outline" className="rounded-full font-semibold px-5 border-border/50 hover:bg-muted/50">
            Edit profile
          </Button>
        )}
      </div>
      
      {/* Name & Username */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5">
          <h2 className="text-xl font-bold text-foreground">Rx MHA</h2>
          <BadgeCheck className="w-5 h-5 text-primary fill-primary/20" />
        </div>
        <p className="text-muted-foreground">@rxmha_</p>
      </div>
      
      {/* Bio */}
      <p className="text-foreground leading-relaxed">
        AI Developer | Founder of Rx Codex AI |{' '}
        <a 
          href="https://rxcodexai.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline transition-all"
        >
          https://www.rxcodexai.com
        </a>
        {' '}| The future is gonna be awesome.
      </p>
      
      {/* Info Row */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-sm text-muted-foreground">
        <a 
          href="https://rxcodexai.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-primary transition-colors"
        >
          <Link2 className="w-4 h-4" />
          <span className="text-primary">rxcodexai.com</span>
        </a>
        <span className="flex items-center gap-1.5">
          <Cake className="w-4 h-4" />
          Born November 4, 2010
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarDays className="w-4 h-4" />
          Joined January 2025
        </span>
      </div>
      
      {/* Following/Followers */}
      <div className="flex gap-5 mt-4 text-sm">
        <button className="hover:underline transition-all group">
          <strong className="text-foreground group-hover:text-primary transition-colors">2</strong>{' '}
          <span className="text-muted-foreground">Following</span>
        </button>
        <button className="hover:underline transition-all group">
          <strong className="text-foreground group-hover:text-primary transition-colors">2</strong>{' '}
          <span className="text-muted-foreground">Followers</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
