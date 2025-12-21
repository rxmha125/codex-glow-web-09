import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { usePostCount } from '@/hooks/usePostCount';

const ProfileHeader = () => {
  const navigate = useNavigate();
  const postCount = usePostCount();

  return (
    <header className="sticky top-20 z-20 backdrop-blur-xl bg-background/60 border-b border-border/20">
      <div className="flex items-center gap-6 px-4 sm:px-6 py-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="hover:bg-muted/50 rounded-full transition-all hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="font-bold text-foreground text-xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Rx MHA
          </h1>
          <p className="text-sm text-muted-foreground">
            {postCount} {postCount === 1 ? 'post' : 'posts'}
          </p>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
