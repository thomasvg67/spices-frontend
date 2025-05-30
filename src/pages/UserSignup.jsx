import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserSignup = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    // Pass userData via state or context for AddAddress page
    navigate('/add-address', { state: { userData } });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-5 shadow" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">User Signup</h3>
        <form onSubmit={handleContinue}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 mb-3">
            Continue
          </button>
        </form>
        <div className="text-center">
          Already have an account?{' '}
          <Link to="/login" style={{ fontWeight: '600', textDecoration: 'none' }}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
