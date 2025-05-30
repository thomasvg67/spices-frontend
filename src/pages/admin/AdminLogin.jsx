import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // make sure to install jwt-decode

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://spices-backend-uii6.onrender.com/api/admin-login', {
        email,
        password,
      });

      if (res.status === 200 && res.data.token) {
        // Decode token to get user info
        const decoded = jwtDecode(res.data.token);

        if (decoded.role === 'admin') {
          // Save token and admin email in localStorage
          localStorage.setItem('token', res.data.token);
          navigate('/admin/dashboard');
        } else {
          alert('You are not authorized to access the admin panel.');
        }
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Admin Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
