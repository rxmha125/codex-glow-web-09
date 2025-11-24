import { Link2, Cake, CalendarDays } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import teamMemberImage from '@/assets/team-member.jpg';

const ProfileInfo = () => {
  return (
    <div className="px-4 pb-4">
      {/* Profile photo - overlapping banner */}
      <div className="relative -mt-16 mb-4 flex justify-between items-end">
        <Avatar className="w-32 h-32 border-4 border-background">
          <AvatarImage src={teamMemberImage} alt="Rx MHA profile photo" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        
        {/* Edit Profile button */}
        <Button variant="outline" className="rounded-full font-semibold px-4">
          Edit profile
        </Button>
      </div>
      
      {/* Name & Username */}
      <div className="mb-3">
        <h2 className="text-xl font-bold text-foreground">Rx MHA</h2>
        <p className="text-muted-foreground">@rxmha_</p>
      </div>
      
      {/* Bio */}
      <p className="mt-3 text-foreground">
        AI Developer | Founder of Rx Codex AI |{' '}
        <a 
          href="https://rxcodexai.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          https://www.rxcodexai.com
        </a>
        {' '}| The future is gonna be awesome.
      </p>
      
      {/* Info Row */}
      <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Link2 className="w-4 h-4" />
          <a 
            href="https://rxcodexai.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            rxcodexai.com
          </a>
        </span>
        <span className="flex items-center gap-1">
          <Cake className="w-4 h-4" />
          Born November 4, 2010
        </span>
        <span className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4" />
          Joined January 2025
        </span>
      </div>
      
      {/* Following/Followers */}
      <div className="flex gap-4 mt-3 text-sm">
        <button className="hover:underline">
          <strong className="text-foreground">2</strong>{' '}
          <span className="text-muted-foreground">Following</span>
        </button>
        <button className="hover:underline">
          <strong className="text-foreground">2</strong>{' '}
          <span className="text-muted-foreground">Followers</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
