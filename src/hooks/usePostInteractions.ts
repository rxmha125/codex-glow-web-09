import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useFingerprint } from './useFingerprint';

interface PostInteractions {
  likeCount: number;
  userLiked: boolean;
  loading: boolean;
}

export const usePostInteractions = (postId: string) => {
  const { fingerprintId } = useFingerprint();
  const [interactions, setInteractions] = useState<PostInteractions>({
    likeCount: 0,
    userLiked: false,
    loading: true,
  });

  useEffect(() => {
    if (!fingerprintId) return;

    const fetchInteractions = async () => {
      const { data, error } = await supabase.functions.invoke('get-post-interactions', {
        body: { postId, fingerprintId }
      });

      if (error) {
        console.error('Error fetching interactions:', error);
        setInteractions(prev => ({ ...prev, loading: false }));
        return;
      }

      setInteractions({
        likeCount: data.likeCount || 0,
        userLiked: data.userLiked || false,
        loading: false,
      });
    };

    fetchInteractions();
  }, [postId, fingerprintId]);

  const toggleLike = async () => {
    if (!fingerprintId) return;

    const action = interactions.userLiked ? 'unlike' : 'like';
    
    // Optimistic update
    setInteractions(prev => ({
      ...prev,
      userLiked: !prev.userLiked,
      likeCount: prev.userLiked ? prev.likeCount - 1 : prev.likeCount + 1,
    }));

    const { data, error } = await supabase.functions.invoke('like-post', {
      body: { postId, fingerprintId, action }
    });

    if (error) {
      console.error('Error toggling like:', error);
      // Revert on error
      setInteractions(prev => ({
        ...prev,
        userLiked: !prev.userLiked,
        likeCount: prev.userLiked ? prev.likeCount + 1 : prev.likeCount - 1,
      }));
      return;
    }

    // Update with server response
    setInteractions(prev => ({
      ...prev,
      likeCount: data.likeCount || prev.likeCount,
    }));
  };

  return { ...interactions, toggleLike };
};
