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
    
    if (password !== 'Mimi mithila') {
      toast.error('Invalid credentials');
      return;
    }

    setLoading(true);

    try {
      const result = await identifyUser(true);
      
      if (result && result.fingerprintId) {
        setIsAdmin(true);
        localStorage.setItem('is_admin', 'true');
        toast.success('Admin access granted');
        navigate('/system/point/dashboard/admin/load');
      } else {
        console.error('No fingerprint ID returned:', result);
        toast.error('Authentication system error. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error(`Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="relative">
          {/* Decorative blur circles */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border/50 shadow-2xl">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30">
                  <Lock className="h-10 w-10 text-primary" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
              System Access
            </h1>
            <p className="text-center text-muted-foreground mb-8 text-sm">
              Restricted area • Authentication required
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-foreground/80">
                  Administrator Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your credentials"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                  required
                  autoFocus
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg shadow-primary/20 transition-all"
                disabled={loading || !password}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin" />
                    Authenticating...
                  </span>
                ) : (
                  'Access System'
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border/30">
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                This is a secure administrative area.<br />
                Unauthorized access attempts are logged and monitored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAccess;
