import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    // Check if user is admin from localStorage
    const adminStatus = localStorage.getItem('is_admin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('is_admin');
    // Redirect to home and reload to reset state
    window.location.href = '/';
  };

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
