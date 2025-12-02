import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';
import { LogOut, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface User {
  id: string;
  user_hash: string;
  created_at: string;
  login_count: number;
  is_admin: boolean;
  ip_address: string;
  timezone: string;
  platform: string;
  login_history: any[];
}

const Admin = () => {
  const { isAdmin, logout } = useAdmin();
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/system/point/access/admin/load');
      return;
    }
    fetchUsers();
  }, [isAdmin, navigate]);

  const fetchUsers = async () => {
    if (!supabase) return;
    
    const { data, error } = await supabase.functions.invoke('get-all-users');
    
    if (error) {
      console.error('Error fetching users:', error);
      toast.error('Failed to load users');
    } else {
      setUsers(data.users || []);
    }
    setLoading(false);
  };

  const deleteUser = async (userId: string) => {
    if (!supabase) return;
    
    const { error } = await supabase.functions.invoke('delete-user', {
      body: { userId }
    });
    
    if (error) {
      toast.error('Failed to delete user');
    } else {
      toast.success('User deleted');
      fetchUsers();
      setSelectedUser(null);
    }
  };

  const getUserLabel = (user: User) => {
    if (user.is_admin) return { label: 'ADMIN', color: 'text-purple-500' };
    
    // Simple bot detection based on suspicious patterns
    const isSuspicious = 
      !user.ip_address || 
      user.login_count > 100 ||
      (user.login_history && user.login_history.length > 50);
    
    if (isSuspicious) return { label: 'BOT', color: 'text-red-500' };
    
    const isUncertain = user.login_count < 3;
    if (isUncertain) return { label: 'UNCERTAIN', color: 'text-yellow-500' };
    
    return { label: 'USER', color: 'text-green-500' };
  };

  const getMatchScore = (loginEntry: any, originalData: any) => {
    let matches = 0;
    const total = 8;
    
    if (loginEntry.fingerprint) {
      if (loginEntry.fingerprint.timezone === originalData.timezone) matches++;
      if (loginEntry.fingerprint.platform === originalData.platform) matches++;
      if (loginEntry.fingerprint.screenResolution === originalData.screen_resolution) matches++;
      if (loginEntry.fingerprint.canvasHash === originalData.canvas_hash) matches++;
      if (loginEntry.fingerprint.webglRenderer === originalData.webgl_renderer) matches++;
      if (loginEntry.fingerprint.userAgent === originalData.user_agent) matches++;
      if (loginEntry.fingerprint.hardwareConcurrency === originalData.hardware_concurrency) matches++;
      if (loginEntry.fingerprint.ipAddress === originalData.ip_address) matches++;
    }
    
    const percentage = (matches / total) * 100;
    return { matches, total, percentage };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-gradient">
        <Navbar />
        <div className="flex items-center justify-center pt-32">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
          <Button onClick={logout} variant="outline" className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        {selectedUser ? (
          <div className="bg-background/50 rounded-lg p-6 border border-border">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">User Details</h2>
                <p className="text-muted-foreground text-sm">ID: {selectedUser.id}</p>
              </div>
              <Button onClick={() => setSelectedUser(null)} variant="outline">
                Back to List
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Original Data</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Created:</span> {new Date(selectedUser.created_at).toLocaleString()}</p>
                  <p><span className="text-muted-foreground">Total Logins:</span> {selectedUser.login_count}</p>
                  <p><span className="text-muted-foreground">IP:</span> {selectedUser.ip_address || 'N/A'}</p>
                  <p><span className="text-muted-foreground">Timezone:</span> {selectedUser.timezone}</p>
                  <p><span className="text-muted-foreground">Platform:</span> {selectedUser.platform}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Login History</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto">
                  {selectedUser.login_history?.map((login, index) => {
                    const matchScore = getMatchScore(login, selectedUser);
                    const isMatch = matchScore.percentage >= 60;
                    
                    return (
                      <div key={index} className="border border-border rounded p-3">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-xs text-muted-foreground">
                            {new Date(login.timestamp).toLocaleString()}
                          </p>
                          <span className={`text-xs font-semibold ${isMatch ? 'text-green-500' : 'text-red-500'}`}>
                            {isMatch ? 'CONNECTED' : 'NOT CONNECTED'}
                          </span>
                        </div>
                        <p className="text-xs">
                          Match Score: {matchScore.matches}/{matchScore.total} ({matchScore.percentage.toFixed(0)}%)
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button 
                onClick={() => deleteUser(selectedUser.id)} 
                variant="destructive"
                className="gap-2"
              >
                <Trash2 className="h-4 w-4" />
                Delete User
              </Button>
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">USERS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map((user) => {
                const userLabel = getUserLabel(user);
                
                return (
                  <div
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className="bg-background/50 rounded-lg p-4 border border-border hover:border-primary transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-xs text-muted-foreground font-mono truncate">
                        {user.id.slice(0, 8)}...
                      </p>
                      <span className={`text-xs font-bold ${userLabel.color}`}>
                        {userLabel.label}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Logins:</span> {user.login_count}</p>
                      <p><span className="text-muted-foreground">Platform:</span> {user.platform}</p>
                      <p className="text-xs text-muted-foreground">
                        Created: {new Date(user.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteUser(user.id);
                      }}
                      variant="ghost"
                      size="sm"
                      className="w-full mt-3 text-red-500 hover:text-red-600 hover:bg-red-500/10"
                    >
                      <Trash2 className="h-3 w-3 mr-2" />
                      Delete
                    </Button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
