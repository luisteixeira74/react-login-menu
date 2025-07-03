// AuthProvider.tsx (ou AuthContext.tsx, se preferir)
import { useState, type ReactNode } from 'react';
import { hardcodedUser } from '../utils/AuthHelpers'
import { AuthContext, type AuthContextType } from './AuthContextObject'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    if (username !== hardcodedUser.email || password !== hardcodedUser.password) {
      throw new Error('Invalid credentials');
    }
    setIsAuthenticated(true);
  };

  const logout = () => setIsAuthenticated(false);

  const contextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
