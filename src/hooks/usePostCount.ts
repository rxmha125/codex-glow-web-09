import { useState, useEffect } from 'react';
import { getPostCount } from '@/lib/postStorage';

export const usePostCount = () => {
  const [count, setCount] = useState(getPostCount());

  useEffect(() => {
    const updateCount = () => {
      setCount(getPostCount());
    };

    window.addEventListener('posts-updated', updateCount);
    return () => window.removeEventListener('posts-updated', updateCount);
  }, []);

  return count;
};
