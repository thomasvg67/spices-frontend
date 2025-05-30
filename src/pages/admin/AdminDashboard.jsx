import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5" style={{ fontWeight: '700' }}>
        Admin Dashboard
      </h2>
      <div className="row justify-content-center g-4">

        <div className="col-md-4 text-center">
          <button
            className="btn btn-primary btn-lg px-5 py-4 rounded-3 shadow"
            onClick={() => navigate('/admin/add-product')}
          >
            <i className="fa fa-plus-circle me-2"></i> Add Product
          </button>
        </div>

        <div className="col-md-4 text-center">
          <button
            className="btn btn-success btn-lg px-5 py-4 rounded-3 shadow"
            onClick={() => navigate('/admin/prdtlst')}
          >
            <i className="fa fa-list me-2"></i> Product List
          </button>
        </div>

        <div className="col-md-4 text-center">
          <button
            className="btn btn-warning btn-lg px-5 py-4 rounded-3 shadow"
            onClick={() => navigate('/admin/admRvw')}
          >
            <i className="fa fa-star me-2"></i> Reviews
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
