import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Lock, Loader2, KeyRound } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
import ogLogo from '/og-logo.png';

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
    if (isAdmin) {
      navigate('/system/point/dashboard/admin/load');
    } else {
      setCheckingExisting(false);
    }
  }, [isAdmin, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password === 'Mimi mithila') {
      localStorage.setItem('is_admin', 'true');
      setIsAdmin(true);
      toast.success('Welcome back!');
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
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground text-sm mt-3">Verifying...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="bg-card/60 backdrop-blur-md border border-border/40 rounded-xl p-6 shadow-xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img src={ogLogo} alt="Rx Codex AI" className="w-12 h-12 mb-3" />
            <h1 className="text-xl font-semibold text-foreground">Admin Access</h1>
            <p className="text-muted-foreground text-sm mt-1">Rx Codex AI Dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="pl-10 h-10 bg-background/40 border-border/50 focus:border-primary/50 transition-colors rounded-lg"
                  disabled={loading}
                  autoFocus
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-10 font-medium rounded-lg"
              disabled={loading || !password.trim()}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <KeyRound className="w-4 h-4 mr-2" />
                  Access
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAccess;
