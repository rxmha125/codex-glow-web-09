import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { toast } from 'sonner';

const AdminAccess = () => {
  const [password, setPassword] = useState('');
  const { login, isAdmin } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate('/company/teams/profiles/rxmha');
    }
  }, [isAdmin, navigate]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (login(password)) {
        toast.success('Admin access granted');
        navigate('/company/teams/profiles/rxmha');
      } else {
        toast.error('Invalid password');
        setPassword('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark-gradient flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Access</h1>
          <p className="text-muted-foreground">Enter password to continue</p>
        </div>
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Type password and press Enter"
          autoFocus
        />
      </div>
    </div>
  );
};

export default AdminAccess;
