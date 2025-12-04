import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import Navbar from '@/components/Navbar';
import PostComposer from '@/components/profile/PostComposer';
import { getPosts, deletePost, Post } from '@/lib/postStorageDB';
import { Button } from '@/components/ui/button';
import { Trash2, LogOut, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const Admin = () => {
  const { isAdmin, logout } = useAdmin();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/system/point/access/admin/load');
      return;
    }
    loadPosts();
  }, [isAdmin, navigate]);

  const loadPosts = async () => {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener('posts-updated', loadPosts);
    return () => window.removeEventListener('posts-updated', loadPosts);
  }, []);

  const handleDelete = async (postId: string) => {
    const success = await deletePost(postId);
    if (success) {
      toast.success('Post deleted');
      loadPosts();
    } else {
      toast.error('Failed to delete post');
    }
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-24 px-4 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage your posts</p>
          </div>
          <Button 
            variant="outline" 
            onClick={logout}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Post Composer */}
        <div className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden mb-8">
          <div className="px-4 py-3 border-b border-border/30">
            <h2 className="font-semibold text-foreground">Create New Post</h2>
          </div>
          <PostComposer />
        </div>

        {/* Posts List */}
        <div className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border/30 flex items-center justify-between">
            <h2 className="font-semibold text-foreground">All Posts</h2>
            <span className="text-sm text-muted-foreground">{posts.length} posts</span>
          </div>
          
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Loading posts...</div>
          ) : posts.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No posts yet</p>
              <p className="text-sm text-muted-foreground/60 mt-1">Create your first post above</p>
            </div>
          ) : (
            <div className="divide-y divide-border/30">
              {posts.map((post) => (
                <div key={post.id} className="p-4 hover:bg-muted/10 transition-colors group">
                  <div className="flex gap-4">
                    {post.imageUrl && (
                      <img 
                        src={post.imageUrl} 
                        alt="Post thumbnail"
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground line-clamp-2">{post.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {format(new Date(post.createdAt), 'PPP')}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(post.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
