import { useState, useEffect } from 'react';
import { getPosts, Post } from '@/lib/postStorageDB';
import PostItem from './PostItem';

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    loadPosts();
    window.addEventListener('posts-updated', loadPosts);
    return () => window.removeEventListener('posts-updated', loadPosts);
  }, []);

  if (posts.length === 0) {
    return (
      <div className="p-12 text-center animate-fade-in">
        <p className="text-muted-foreground text-lg">No posts yet</p>
        <p className="text-muted-foreground/60 text-sm mt-2">Share your thoughts to get started</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {posts.map((post, index) => (
        <div 
          key={post.id}
          style={{ animationDelay: `${index * 50}ms` }}
          className="animate-fade-in"
        >
          <PostItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostsList;
