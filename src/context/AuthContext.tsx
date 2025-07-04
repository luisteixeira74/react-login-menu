// AuthProvider.tsx (ou AuthContext.tsx, se preferir)
import { useState, type ReactNode } from 'react';
import { hardcodedUser } from '../utils/AuthHelpers'
import { AuthContext } from './AuthContextObject'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const stored = localStorage.getItem("isAuthenticated");
    return stored === "true";
  });

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  const login = (username: string, password: string) => {
    // Simular autenticação
    if (username !== hardcodedUser.email || password !== hardcodedUser.password) {
      throw new Error('Invalid credentials');
    }
    setIsAuthenticated(true);
    setEmail(username);

    // Persistir no localStorage
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", username);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setEmail("");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
