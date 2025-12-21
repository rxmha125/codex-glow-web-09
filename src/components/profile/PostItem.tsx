import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, Repeat2, Heart, BarChart3, Bookmark, Share, MoreHorizontal, Trash2 } from 'lucide-react';
import { Post, deletePost, getDisplayDate } from '@/lib/postStorageDB';
import { format } from 'date-fns';
import { useAdmin } from '@/contexts/AdminContext';
import { toast } from 'sonner';
import teamMemberImage from '@/assets/team-member.jpg';
import ShareModal from './ShareModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const { isAdmin } = useAdmin();
  const displayDate = getDisplayDate(post);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleDelete = async () => {
    const success = await deletePost(post.id);
    if (success) {
      toast.success('Post deleted');
      window.dispatchEvent(new Event('posts-updated'));
    } else {
      toast.error('Failed to delete post');
    }
  };

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
      <article className="group border-b border-border/30 p-4 hover:bg-muted/5 transition-all duration-300">
        <div className="flex gap-3">
          <Avatar className="w-12 h-12 ring-2 ring-border/20">
            <AvatarImage src={teamMemberImage} />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-sm">
                <span className="font-bold text-foreground hover:underline cursor-pointer">Rx MHA</span>
                <span className="text-muted-foreground">@rxmha_</span>
                <span className="text-muted-foreground">·</span>
                <time className="text-muted-foreground hover:underline cursor-pointer">
                  {format(displayDate, 'MMM d')}
                </time>
              </div>
              
              {isAdmin && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
            
            <p className="text-foreground mt-2 whitespace-pre-wrap break-words leading-relaxed">
              {renderContent(post.content)}
            </p>
            
            {post.imageUrl && (
              <div className="mt-3 rounded-2xl overflow-hidden border border-border/30 shadow-lg">
                <img
                  src={post.imageUrl}
                  alt="Post image"
                  className="w-full h-auto object-contain max-h-[500px] transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            )}
            
            {/* Interaction buttons - all disabled except Share */}
            <div className="flex items-center justify-between mt-3 max-w-md text-muted-foreground/50">
              <Button 
                variant="ghost" 
                size="sm" 
                disabled
                className="cursor-not-allowed opacity-50"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs ml-1">0</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                disabled
                className="cursor-not-allowed opacity-50"
              >
                <Repeat2 className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                disabled
                className="cursor-not-allowed opacity-50"
              >
                <Heart className="w-4 h-4" />
                <span className="text-xs ml-1">0</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                disabled
                className="cursor-not-allowed opacity-50"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="text-xs ml-1">0</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                disabled
                className="cursor-not-allowed opacity-50"
              >
                <Bookmark className="w-4 h-4" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowShareModal(true)}
                className="hover:text-primary hover:bg-primary/10 transition-all"
              >
                <Share className="w-4 h-4" />
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
