import { useState, useEffect } from 'react';
import { identifyUser } from '@/lib/fingerprint';

export const useFingerprint = (isAdminLogin: boolean = false) => {
  const [fingerprintId, setFingerprintId] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginCount, setLoginCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const identify = async () => {
      const result = await identifyUser(isAdminLogin);
      setFingerprintId(result.fingerprintId);
      setIsAdmin(result.isAdmin);
      setLoginCount(result.loginCount);
      setLoading(false);
    };

    identify();
  }, [isAdminLogin]);

  return { fingerprintId, isAdmin, loginCount, loading };
};
