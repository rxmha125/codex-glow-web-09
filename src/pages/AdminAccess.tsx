import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { identifyUser } from '@/lib/fingerprint';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Lock } from 'lucide-react';

const AdminAccess = () => {
  const { setIsAdmin, isAdmin } = useAdmin();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingExisting, setCheckingExisting] = useState(true);

  useEffect(() => {
    // Check if already logged in as admin
    const checkExistingAdmin = async () => {
      const result = await identifyUser(false);
      if (result.isAdmin) {
        setIsAdmin(true);
        toast.success('Admin access granted');
        navigate('/system/point/dashboard/admin/load');
      } else {
        setCheckingExisting(false);
      }
    };

    checkExistingAdmin();
  }, [setIsAdmin, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check - you can enhance this with backend verification
    if (password !== 'admin123') {
      toast.error('Invalid credentials');
      return;
    }

    setLoading(true);

    try {
      // Mark this fingerprint as admin
      const result = await identifyUser(true);
      
      if (result.fingerprintId) {
        setIsAdmin(true);
        localStorage.setItem('is_admin', 'true');
        toast.success('Admin access granted');
        navigate('/system/point/dashboard/admin/load');
      } else {
        toast.error('Failed to register admin access');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  if (checkingExisting) {
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
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-foreground mb-2">
            System Access
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Enter admin credentials to continue
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading || !password}
            >
              {loading ? 'Authenticating...' : 'Access System'}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            This is a secure admin area. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminAccess;
