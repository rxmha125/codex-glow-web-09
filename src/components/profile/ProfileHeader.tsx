import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { usePostCount } from '@/hooks/usePostCount';

const ProfileHeader = () => {
  const navigate = useNavigate();
  const postCount = usePostCount();

  return (
    <header className="sticky top-20 z-20 backdrop-blur-xl bg-background/70 border-b border-border/20">
      <div className="flex items-center gap-6 px-4 py-3">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="hover:bg-muted/50 rounded-full"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="font-bold text-foreground text-lg">Rx MHA</h1>
          <p className="text-xs text-muted-foreground">
            {postCount} {postCount === 1 ? 'post' : 'posts'}
          </p>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
