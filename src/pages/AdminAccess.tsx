import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { useFingerprint } from '@/hooks/useFingerprint';
import { toast } from 'sonner';

const AdminAccess = () => {
  const { setIsAdmin, isAdmin } = useAdmin();
  const { fingerprintId, isAdmin: fingerprintIsAdmin, loading } = useFingerprint(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (fingerprintIsAdmin) {
        setIsAdmin(true);
        toast.success('Admin access granted');
        navigate('/admin');
      } else if (fingerprintId) {
        toast.error('Access denied - not recognized as admin');
        navigate('/');
      }
    }
  }, [loading, fingerprintIsAdmin, fingerprintId, setIsAdmin, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-gradient flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verifying access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Access</h1>
          <p className="text-muted-foreground">Checking credentials...</p>
        </div>
      </div>
    </div>
  );
};

export default AdminAccess;
