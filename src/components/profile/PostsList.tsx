import { useState, useEffect } from 'react';
import { getPosts, Post } from '@/lib/postStorageDB';
import PostItem from './PostItem';
import { FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
      setLoading(false);
    };

    loadPosts();
    window.addEventListener('posts-updated', loadPosts);
    return () => window.removeEventListener('posts-updated', loadPosts);
  }, []);

  if (loading) {
    return (
      <Card className="glass-card border-border/30 bg-card/30 backdrop-blur-xl">
        <CardContent className="p-12 text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground mt-4">Loading posts...</p>
        </CardContent>
      </Card>
    );
  }

  if (posts.length === 0) {
    return (
      <Card className="glass-card border-border/30 bg-card/30 backdrop-blur-xl">
        <CardContent className="p-16 text-center">
          <FileText className="w-12 h-12 mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground text-lg">No posts yet</p>
          <p className="text-muted-foreground/60 text-sm mt-2">Check back later for updates</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card border-border/30 bg-card/30 backdrop-blur-xl overflow-hidden">
      <CardHeader className="pb-4 border-b border-border/20">
        <CardTitle className="flex items-center gap-2 text-lg">
          <FileText className="w-5 h-5 text-primary" />
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Recent Posts
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        {posts.map((post, index) => (
          <div 
            key={post.id}
            style={{ animationDelay: `${index * 50}ms` }}
            className="animate-fade-in"
          >
            <PostItem post={post} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PostsList;
