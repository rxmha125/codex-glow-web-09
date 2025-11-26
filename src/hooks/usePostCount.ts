import { useState, useEffect } from 'react';
import { getPostCount } from '@/lib/postStorageDB';

export const usePostCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = async () => {
      const postCount = await getPostCount();
      setCount(postCount);
    };

    updateCount();
    window.addEventListener('posts-updated', updateCount);
    return () => window.removeEventListener('posts-updated', updateCount);
  }, []);

  return count;
};
