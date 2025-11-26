import { useState, useEffect } from 'react';
import { identifyUser } from '@/lib/fingerprint';

export const useFingerprint = () => {
  const [fingerprintId, setFingerprintId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const identify = async () => {
      const id = await identifyUser();
      setFingerprintId(id);
      setLoading(false);
    };

    identify();
  }, []);

  return { fingerprintId, loading };
};
