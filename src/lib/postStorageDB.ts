import { supabase } from '@/integrations/supabase/client';
import { getPosts as getLocalPosts, createPost as createLocalPost, deletePost as deleteLocalPost, getPostCount as getLocalPostCount } from './postStorage';

export interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  displayDate: Date;
  createdAt: Date;
  dateOffset: number;
}

// Migrate localStorage posts to database
export const migrateLocalStoragePosts = async (): Promise<void> => {
  const stored = localStorage.getItem('rxcodex_posts');
  if (!stored) return;

  try {
    const localPosts = JSON.parse(stored);
    
    for (const post of localPosts) {
      const { error } = await supabase
        .from('posts')
        .upsert({
          id: post.id,
          content: post.content,
          image_url: post.imageUrl,
          display_date: post.displayDate,
          created_at: post.createdAt,
          date_offset: post.dateOffset
        }, { onConflict: 'id' });

      if (error) {
        console.error('Error migrating post:', error);
      }
    }

    console.log('Posts migrated successfully');
    localStorage.removeItem('rxcodex_posts');
  } catch (e) {
    console.error('Failed to migrate posts:', e);
  }
};

// Get all posts from database or fallback to localStorage
export const getPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return getLocalPosts();
  }

  return (data || []).map((post: any) => ({
    id: post.id,
    content: post.content,
    imageUrl: post.image_url,
    displayDate: new Date(post.display_date),
    createdAt: new Date(post.created_at),
    dateOffset: post.date_offset,
  }));
};

// Create a new post
export const createPost = async (
  content: string,
  imageUrl?: string,
  customDate?: Date
): Promise<Post | null> => {
  const now = new Date();
  const displayDate = customDate || now;
  const dateOffset = Math.floor((displayDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  const newPost = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    content,
    image_url: imageUrl,
    display_date: displayDate.toISOString(),
    created_at: now.toISOString(),
    date_offset: dateOffset,
  };

  const { data, error } = await supabase
    .from('posts')
    .insert(newPost)
    .select()
    .single();

  if (error) {
    console.error('Error creating post:', error);
    return createLocalPost(content, imageUrl, customDate);
  }

  return {
    id: data.id,
    content: data.content,
    imageUrl: data.image_url,
    displayDate: new Date(data.display_date),
    createdAt: new Date(data.created_at),
    dateOffset: data.date_offset,
  };
};

// Delete a post
export const deletePost = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting post:', error);
    deleteLocalPost(id);
    return false;
  }

  return true;
};

// Get post count
export const getPostCount = async (): Promise<number> => {
  const { count, error } = await supabase
    .from('posts')
    .select('id', { count: 'exact', head: true });

  if (error) {
    console.error('Error getting post count:', error);
    return getLocalPostCount();
  }

  return count || 0;
};

// Get display date (with offset applied)
export const getDisplayDate = (post: Post): Date => {
  const now = new Date();
  const result = new Date(now);
  result.setDate(result.getDate() + post.dateOffset);
  return result;
};
