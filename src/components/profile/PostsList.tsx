import { useState, useEffect } from 'react';
import { getPosts, Post } from '@/lib/postStorage';
import PostItem from './PostItem';

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = () => {
      setPosts(getPosts());
    };

    loadPosts();
    window.addEventListener('posts-updated', loadPosts);
    return () => window.removeEventListener('posts-updated', loadPosts);
  }, []);

  if (posts.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-muted-foreground">No posts yet</p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
