import { useState, useEffect } from 'react';
import { supabase, checkSupabaseAvailable } from '@/lib/supabaseClient';
import { useFingerprint } from './useFingerprint';

export interface Comment {
  id: string;
  post_id: string;
  fingerprint_id: string;
  content: string;
  created_at: string;
}

export const useComments = (postId: string) => {
  const { fingerprintId } = useFingerprint();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    if (!checkSupabaseAvailable() || !supabase) {
      setComments([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.functions.invoke('get-comments', {
      body: { postId }
    });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data.comments || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  const addComment = async (content: string) => {
    if (!checkSupabaseAvailable() || !supabase || !fingerprintId) return;

    const { data, error } = await supabase.functions.invoke('comment-post', {
      body: { postId, fingerprintId, content, action: 'create' }
    });

    if (!error && data.comment) {
      setComments([...comments, data.comment]);
    }
  };

  const deleteComment = async (commentId: string) => {
    if (!checkSupabaseAvailable() || !supabase || !fingerprintId) return;

    const { error } = await supabase.functions.invoke('comment-post', {
      body: { postId, fingerprintId, commentId, action: 'delete' }
    });

    if (!error) {
      setComments(comments.filter(c => c.id !== commentId));
    }
  };

  return { comments, loading, addComment, deleteComment, refetch: fetchComments };
};
