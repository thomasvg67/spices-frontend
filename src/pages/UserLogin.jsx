import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://spices-backend-uii6.onrender.com/api/users/login', {
        email,
        password,
      });

      if (res.status === 200 && res.data.user.role === 'user') {
        localStorage.setItem('token', res.data.token);
        navigate('/');

      } else {
        alert('Invalid credentials or unauthorized role');
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}
    >
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">User Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="user@example.com"
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

          <button type="submit" className="btn btn-success w-100 mb-3">
            Login
          </button>
        </form>

        <div className="text-center">
          <Link to="/forgot-password" className="d-block mb-2" style={{ textDecoration: 'none' }}>
            Forgot Password?
          </Link>
          <span>
            Don't have an account?{' '}
            <Link to="/signup" style={{ fontWeight: '600', textDecoration: 'none' }}>
              Create Account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
