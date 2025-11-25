import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { usePostCount } from '@/hooks/usePostCount';

const ProfileHeader = () => {
  const navigate = useNavigate();
  const postCount = usePostCount();

  return (
    <header className="sticky top-20 z-10 backdrop-blur-xl bg-background/30 border-b border-border/50">
      <div className="flex items-center justify-between px-4 py-3">
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
            <p className="text-xs text-muted-foreground">
              {postCount} {postCount === 1 ? 'post' : 'posts'}
            </p>
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
