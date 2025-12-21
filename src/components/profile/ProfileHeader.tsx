import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { usePostCount } from '@/hooks/usePostCount';

const ProfileHeader = () => {
  const navigate = useNavigate();
  const postCount = usePostCount();

  return (
    <header className="sticky top-20 z-20 bg-card/80 backdrop-blur-md border-b border-border/30">
      <div className="flex items-center gap-4 px-4 py-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="hover:bg-muted/50 rounded-full h-9 w-9"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="font-bold text-foreground text-lg leading-tight">Rx MHA</h1>
          <p className="text-xs text-muted-foreground">
            {postCount} {postCount === 1 ? 'post' : 'posts'}
          </p>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
