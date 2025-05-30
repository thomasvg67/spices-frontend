import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddAddress = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // User data passed from signup
  const { userData } = location.state || {};

  const [addressData, setAddressData] = useState({
    state: '',
    city: '',
    houseNo: '',
    pincode: '',
    location: '',
  });

  const handleChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!userData) {
      toast.error('No user data found. Please sign up first.');
      navigate('/signup');
      return;
    }

    // Combine user info and address info
    const fullUserData = {
      ...userData,
      address: addressData,
    };

    try {
      const res = await axios.post('https://spices-backend-uii6.onrender.com/api/users/signup', fullUserData);
      toast.success('User registered successfully!');
      navigate('/login'); // Redirect to login after signup
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-5 shadow" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Add Address</h3>
        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="State"
              value={addressData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="City"
              value={addressData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="houseNo"
              className="form-control"
              placeholder="House No"
              value={addressData.houseNo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="pincode"
              className="form-control"
              placeholder="Pincode"
              value={addressData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              name="location"
              className="form-control"
              placeholder="Location"
              value={addressData.location}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;
