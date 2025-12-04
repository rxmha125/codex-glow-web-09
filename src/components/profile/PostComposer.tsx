import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Image, Settings, Calendar, X } from 'lucide-react';
import { createPost, migrateLocalStoragePosts } from '@/lib/postStorageDB';
import { toast } from 'sonner';
import PostSettingsModal from './PostSettingsModal';
import teamMemberImage from '@/assets/team-member.jpg';
import { format } from 'date-fns';

const MAX_CHARS = 500;

const PostComposer = () => {
  const [content, setContent] = useState('');
  const [imagePreview, setImagePreview] = useState<string>();
  const [customDate, setCustomDate] = useState<Date>();
  const [showSettings, setShowSettings] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    migrateLocalStoragePosts();
  }, []);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image must be less than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = async () => {
    if (!content.trim()) {
      toast.error('Please write something');
      return;
    }

    setIsPosting(true);
    const post = await createPost(content, imagePreview, customDate);
    
    if (post) {
      setContent('');
      setImagePreview(undefined);
      setCustomDate(undefined);
      toast.success('Post created!');
      window.dispatchEvent(new Event('posts-updated'));
    } else {
      toast.error('Failed to create post');
    }
    setIsPosting(false);
  };

  const charsRemaining = MAX_CHARS - content.length;
  const isOverLimit = charsRemaining < 0;

  return (
    <>
      <div className="p-4">
        <div className="flex gap-3">
          <Avatar className="w-12 h-12 ring-2 ring-border/20">
            <AvatarImage src={teamMemberImage} />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="min-h-[120px] resize-none border-0 p-0 focus-visible:ring-0 text-lg placeholder:text-muted-foreground/40 bg-transparent"
            />
            
            {imagePreview && (
              <div className="mt-3 relative group">
                <img
                  src={imagePreview}
                  alt="Upload preview"
                  className="rounded-2xl max-h-[300px] w-full object-cover border border-border/30"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
                  onClick={() => setImagePreview(undefined)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}

            {customDate && (
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 rounded-xl px-4 py-2.5 border border-primary/20">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Display date: <strong className="text-foreground">{format(customDate, 'PPP')}</strong></span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto h-6 w-6"
                  onClick={() => setCustomDate(undefined)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
              <div className="flex gap-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                  accept="image/*"
                  className="hidden"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => fileInputRef.current?.click()}
                  className="hover:bg-primary/10 hover:text-primary transition-all rounded-full"
                >
                  <Image className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowSettings(true)}
                  className="hover:bg-primary/10 hover:text-primary transition-all rounded-full"
                >
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="flex items-center gap-3">
                {content.length > 0 && (
                  <span className={`text-sm ${isOverLimit ? 'text-destructive' : charsRemaining < 50 ? 'text-yellow-500' : 'text-muted-foreground'}`}>
                    {charsRemaining}
                  </span>
                )}
                <Button
                  onClick={handlePost}
                  disabled={!content.trim() || isOverLimit || isPosting}
                  className="rounded-full px-6 font-semibold"
                >
                  {isPosting ? 'Posting...' : 'Post'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PostSettingsModal
        open={showSettings}
        onClose={() => setShowSettings(false)}
        onDateSelect={setCustomDate}
        selectedDate={customDate}
      />
    </>
  );
};

export default PostComposer;
