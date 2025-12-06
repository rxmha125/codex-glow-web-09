import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Lock, Loader2, Shield } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

// Add noindex meta tag for admin pages
const useNoIndex = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
};

const AdminAccess = () => {
  useNoIndex();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checkingExisting, setCheckingExisting] = useState(true);
  const navigate = useNavigate();
  const { setIsAdmin, isAdmin } = useAdmin();

  useEffect(() => {
    // Check if already admin
    if (isAdmin) {
      navigate('/system/point/dashboard/admin/load');
    } else {
      setCheckingExisting(false);
    }
  }, [isAdmin, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple password check
    if (password === 'Mimi mithila') {
      localStorage.setItem('is_admin', 'true');
      setIsAdmin(true);
      toast.success('Welcome back, Admin!');
      navigate('/system/point/dashboard/admin/load');
    } else {
      toast.error('Invalid credentials');
    }
    
    setLoading(false);
  };

  if (checkingExisting) {
    return (
      <div className="min-h-screen bg-dark-gradient flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground mt-4">Verifying access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-2 ring-primary/20">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Admin Access</h1>
            <p className="text-muted-foreground text-sm mt-2">Enter credentials to continue</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="pl-10 h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                  disabled={loading}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Authenticating...
                </>
              ) : (
                'Access Dashboard'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAccess;
