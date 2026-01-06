import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Share } from 'lucide-react';
import { Post, getDisplayDate } from '@/lib/postStorageDB';
import { format } from 'date-fns';
import teamMemberImage from '@/assets/team-member.jpg';
import ShareModal from './ShareModal';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const displayDate = getDisplayDate(post);
  const [showShareModal, setShowShareModal] = useState(false);

  const renderContent = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      <article className="group border-b border-border/20 p-4 hover:bg-muted/5 transition-colors">
        <div className="flex gap-3">
          <Avatar className="w-10 h-10 ring-2 ring-border/20 flex-shrink-0">
            <AvatarImage src={teamMemberImage} />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-sm">
                <span className="font-semibold text-foreground">Rx MHA</span>
                <span className="text-muted-foreground text-xs">@rxmha_</span>
                <span className="text-muted-foreground text-xs">·</span>
                <time className="text-muted-foreground text-xs">
                  {format(displayDate, 'MMM d')}
                </time>
              </div>
            </div>
            
            <p className="text-foreground mt-1.5 whitespace-pre-wrap break-words text-sm leading-relaxed">
              {renderContent(post.content)}
            </p>
            
            {post.imageUrl && (
              <div className="mt-3 rounded-xl overflow-hidden border border-border/30">
                <img
                  src={post.imageUrl}
                  alt="Post image"
                  className="w-full h-auto object-contain max-h-[400px]"
                />
              </div>
            )}
            
            {/* Interaction buttons */}
            <div className="flex items-center gap-1 mt-3 text-muted-foreground/60">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowShareModal(true)}
                className="hover:text-primary hover:bg-primary/10 transition-all h-7 px-2 text-xs gap-1"
              >
                <Share className="w-3.5 h-3.5" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </article>

      <ShareModal
        open={showShareModal} 
        onClose={() => setShowShareModal(false)} 
        postId={post.id} 
      />
    </>
  );
};

export default PostItem;
