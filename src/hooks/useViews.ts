import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useFingerprint } from './useFingerprint';

export const useViews = (postId: string) => {
  const { fingerprintId } = useFingerprint();
  const [viewCount, setViewCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!fingerprintId) {
      setViewCount(0);
      setLoading(false);
      return;
    }

    const trackView = async () => {
      const { data, error } = await supabase.functions.invoke('track-view', {
        body: { postId, fingerprintId }
      });

      if (!error) {
        setViewCount(data.viewCount || 0);
      }
      setLoading(false);
    };

    trackView();
  }, [postId, fingerprintId]);

  return { viewCount, loading };
};
