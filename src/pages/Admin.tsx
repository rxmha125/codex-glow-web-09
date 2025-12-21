import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import Navbar from '@/components/Navbar';
import PostComposer from '@/components/profile/PostComposer';
import { getPosts, deletePost, Post } from '@/lib/postStorageDB';
import { Button } from '@/components/ui/button';
import { Trash2, LogOut, FileText, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

// Add noindex meta tag for admin pages
const useNoIndex = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
};

const Admin = () => {
  useNoIndex();
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
      <div className="max-w-2xl mx-auto pt-24 px-4 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-0.5">Manage posts</p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              asChild
              className="gap-1.5 rounded-lg"
            >
              <Link to="/company/teams/profiles/rxmha">
                <ExternalLink className="w-3.5 h-3.5" />
                View Profile
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={logout}
              className="gap-1.5 rounded-lg text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </Button>
          </div>
        </div>

        {/* Post Composer */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden mb-6">
          <div className="px-4 py-2.5 border-b border-border/30 bg-card/30">
            <h2 className="font-medium text-foreground text-sm">New Post</h2>
          </div>
          <PostComposer />
        </div>

        {/* Posts List */}
        <div className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-border/30 flex items-center justify-between bg-card/30">
            <h2 className="font-medium text-foreground text-sm">All Posts</h2>
            <span className="text-xs text-muted-foreground">{posts.length} total</span>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-muted-foreground text-sm mt-3">Loading...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="p-10 text-center">
              <FileText className="w-10 h-10 mx-auto text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground text-sm">No posts yet</p>
              <p className="text-xs text-muted-foreground/60 mt-1">Create your first post above</p>
            </div>
          ) : (
            <div className="divide-y divide-border/30">
              {posts.map((post) => (
                <div key={post.id} className="p-3 hover:bg-muted/10 transition-colors group">
                  <div className="flex gap-3 items-start">
                    {post.imageUrl && (
                      <img 
                        src={post.imageUrl} 
                        alt="Post thumbnail"
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground text-sm line-clamp-2">{post.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {format(new Date(post.createdAt), 'MMM d, yyyy')}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(post.id)}
                      className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-all h-8 w-8 flex-shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
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
