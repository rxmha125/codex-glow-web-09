import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageCircle, Repeat2, Heart, BarChart3, Bookmark, Share, MoreHorizontal, Trash2, Send } from 'lucide-react';
import { Post, deletePost, getDisplayDate } from '@/lib/postStorageDB';
import { format } from 'date-fns';
import { useAdmin } from '@/contexts/AdminContext';
import { toast } from 'sonner';
import teamMemberImage from '@/assets/team-member.jpg';
import ShareModal from './ShareModal';
import { usePostInteractions } from '@/hooks/usePostInteractions';
import { useComments } from '@/hooks/useComments';
import { useViews } from '@/hooks/useViews';
import { useFingerprint } from '@/hooks/useFingerprint';
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
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { fingerprintId } = useFingerprint();
  const { likeCount, userLiked, loading, toggleLike } = usePostInteractions(post.id);
  const { comments, loading: commentsLoading, addComment, deleteComment } = useComments(post.id);
  const { viewCount, loading: viewsLoading } = useViews(post.id);

  const handleDelete = async () => {
    const success = await deletePost(post.id);
    if (success) {
      toast.success('Post deleted');
      window.dispatchEvent(new Event('posts-updated'));
    } else {
      toast.error('Failed to delete post');
    }
  };

  const handleLike = async () => {
    await toggleLike();
  };

  const handleAddComment = async () => {
    if (!commentText.trim()) return;
    await addComment(commentText);
    setCommentText('');
    toast.success('Comment added');
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
              onClick={() => setShowComments(!showComments)}
              className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all group/btn"
            >
              <MessageCircle className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              {commentsLoading ? '' : comments.length > 0 && <span className="text-xs ml-1">{comments.length}</span>}
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
              disabled={loading}
              className={`hover:scale-110 transition-all group/btn ${
                userLiked ? 'text-red-500' : 'hover:text-red-500 hover:bg-red-500/10'
              }`}
            >
              <Heart 
                className={`w-4 h-4 group-hover/btn:scale-110 transition-all ${
                  userLiked ? 'fill-red-500' : ''
                }`} 
              />
              {likeCount > 0 && <span className="text-xs ml-1">{likeCount}</span>}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all"
            >
              <BarChart3 className="w-4 h-4" />
              {viewsLoading ? '' : viewCount > 0 && <span className="text-xs ml-1">{viewCount}</span>}
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

      {showComments && (
        <div className="border-t border-border/30 pt-4 mt-4 px-4">
          <div className="space-y-4 mb-4">
            {comments.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="bg-background/30 rounded-lg p-3">
                  <div className="flex justify-between items-start">
                    <p className="text-sm text-foreground">{comment.content}</p>
                    {comment.fingerprint_id === fingerprintId && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteComment(comment.id)}
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(comment.created_at).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              placeholder="Write a comment..."
              className="flex-1 px-3 py-2 bg-background/50 border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <Button 
              onClick={handleAddComment}
              size="sm"
              disabled={!commentText.trim()}
              className="gap-2"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
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
