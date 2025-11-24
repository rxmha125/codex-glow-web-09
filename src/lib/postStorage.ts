export interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  displayDate: Date;
  createdAt: Date;
  dateOffset: number;
}

const STORAGE_KEY = 'rxcodex_posts';

export const getPosts = (): Post[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  const posts = JSON.parse(stored);
  return posts.map((post: any) => ({
    ...post,
    displayDate: new Date(post.displayDate),
    createdAt: new Date(post.createdAt),
  }));
};

export const createPost = (
  content: string,
  imageUrl?: string,
  customDate?: Date
): Post => {
  const now = new Date();
  const displayDate = customDate || now;
  const dateOffset = Math.floor((displayDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  const newPost: Post = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    content,
    imageUrl,
    displayDate,
    createdAt: now,
    dateOffset,
  };
  
  const posts = getPosts();
  posts.unshift(newPost);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  
  window.dispatchEvent(new Event('posts-updated'));
  return newPost;
};

export const deletePost = (id: string): void => {
  const posts = getPosts();
  const filtered = posts.filter(post => post.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  window.dispatchEvent(new Event('posts-updated'));
};

export const getPostCount = (): number => {
  return getPosts().length;
};

export const getDisplayDate = (post: Post): Date => {
  const now = new Date();
  const result = new Date(now);
  result.setDate(result.getDate() + post.dateOffset);
  return result;
};
