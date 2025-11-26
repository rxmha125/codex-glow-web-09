import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, Repeat2, Heart, BarChart3, Bookmark, Share, MoreHorizontal, Trash2 } from 'lucide-react';
import { Post, deletePost, getDisplayDate } from '@/lib/postStorage';
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
  const [isLiked, setIsLiked] = useState(false);

  const handleDelete = () => {
    deletePost(post.id);
    toast.success('Post deleted');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? 'Removed like' : 'Liked!');
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
      <div className="group border-b border-border/50 p-4 hover:bg-muted/20 transition-all duration-200">
        <div className="flex gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={teamMemberImage} />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 text-sm">
              <span className="font-bold text-foreground">Rx MHA</span>
              <span className="text-muted-foreground">@rxmha_</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">
                {format(displayDate, 'MMM d')}
              </span>
            </div>
            
            {isAdmin && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
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
          
          <p className="text-foreground mt-1 whitespace-pre-wrap break-words">
            {renderContent(post.content)}
          </p>
          
          {post.imageUrl && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-border/50 shadow-lg">
              <img
                src={post.imageUrl}
                alt="Post image"
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          )}
          
          <div className="flex items-center justify-between mt-3 max-w-md text-muted-foreground">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all group/btn"
            >
              <MessageCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-green-500 hover:bg-green-500/10 hover:scale-110 transition-all group/btn"
            >
              <Repeat2 className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLike}
              className={`hover:scale-110 transition-all group/btn ${
                isLiked ? 'text-red-500' : 'hover:text-red-500 hover:bg-red-500/10'
              }`}
            >
              <Heart 
                className={`w-4 h-4 group-hover/btn:scale-110 transition-all ${
                  isLiked ? 'fill-red-500' : ''
                }`} 
              />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all"
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-xs ml-1">88</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all group/btn"
            >
              <Bookmark className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowShareModal(true)}
              className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all group/btn"
            >
              <Share className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>

      <ShareModal
        open={showShareModal} 
        onClose={() => setShowShareModal(false)} 
        postId={post.id} 
      />
    </>
  );
};

export default PostItem;
