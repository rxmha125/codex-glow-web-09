import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, Repeat2, Heart, BarChart3, Bookmark, Share, MoreHorizontal, Trash2 } from 'lucide-react';
import { Post, deletePost, getDisplayDate } from '@/lib/postStorage';
import { format } from 'date-fns';
import { useAdmin } from '@/contexts/AdminContext';
import { toast } from 'sonner';
import teamMemberImage from '@/assets/team-member.jpg';
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

  const handleDelete = () => {
    deletePost(post.id);
    toast.success('Post deleted');
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
    <div className="border-b border-border p-4 hover:bg-muted/30 transition-colors">
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
            <div className="mt-3 rounded-lg overflow-hidden border border-border">
              <img
                src={post.imageUrl}
                alt="Post image"
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          )}
          
          <div className="flex items-center justify-between mt-3 max-w-md text-muted-foreground">
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-green-500">
              <Repeat2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-red-500">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <BarChart3 className="w-4 h-4" />
              <span className="text-xs ml-1">88</span>
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
