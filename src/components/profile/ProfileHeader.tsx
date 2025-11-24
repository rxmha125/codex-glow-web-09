import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ProfileHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left: Back button + Name/Posts */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-bold text-foreground">Rx MHA</h1>
            <p className="text-xs text-muted-foreground">17 posts</p>
          </div>
        </div>
        
        {/* Right: Search */}
        <Button variant="ghost" size="icon" aria-label="Search">
          <Search className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default ProfileHeader;
