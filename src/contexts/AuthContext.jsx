import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const admin = localStorage.getItem('isAdmin') === 'true';
    setIsLoggedIn(loggedIn);
    setIsAdmin(admin);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, setIsLoggedIn, setIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);