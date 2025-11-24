import { useState, useRef } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Image, Settings } from 'lucide-react';
import { createPost } from '@/lib/postStorage';
import { toast } from 'sonner';
import PostSettingsModal from './PostSettingsModal';
import teamMemberImage from '@/assets/team-member.jpg';

const PostComposer = () => {
  const [content, setContent] = useState('');
  const [imagePreview, setImagePreview] = useState<string>();
  const [customDate, setCustomDate] = useState<Date>();
  const [showSettings, setShowSettings] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (!content.trim()) {
      toast.error('Please write something');
      return;
    }

    createPost(content, imagePreview, customDate);
    setContent('');
    setImagePreview(undefined);
    setCustomDate(undefined);
    toast.success('Post created successfully');
  };

  return (
    <>
      <div className="border-b border-border p-4">
        <div className="flex gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={teamMemberImage} />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="min-h-[100px] resize-none border-0 p-0 focus-visible:ring-0 text-base"
            />
            
            {imagePreview && (
              <div className="mt-3 relative">
                <img
                  src={imagePreview}
                  alt="Upload preview"
                  className="rounded-lg max-h-[300px] w-full object-cover"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => setImagePreview(undefined)}
                >
                  Remove
                </Button>
              </div>
            )}
            
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
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
                >
                  <Image className="w-5 h-5 text-primary" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings 
                    className="w-5 h-5 text-primary"
                    onClick={() => setShowSettings(true)}
                  />
                </Button>
              </div>
              
              <Button
                onClick={handlePost}
                disabled={!content.trim()}
                className="rounded-full px-6"
              >
                Post
              </Button>
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
