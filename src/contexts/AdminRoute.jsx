// components/AdminRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust path as needed

const AdminRoute = ({ children }) => {
  const { isAdmin, isLoggedIn } = useAuth();

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default AdminRoute;
