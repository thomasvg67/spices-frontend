import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AdmPrdtLst = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://spices-backend-uii6.onrender.com/api/products'); // Update to match your backend route
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(`https://spices-backend-uii6.onrender.com/api/products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  const handleAddProduct = () => {
    navigate('/admin/add-product');
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-success" onClick={handleAddProduct}>
          + Add Product
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price ($)</th>
              <th>Discount (%)</th>
              <th>GST (%)</th>
              <th>Status</th>
              <th>Availability</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="10">No products found.</td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={
  product.images && product.images.length > 0
    ? `https://spices-backend-uii6.onrender.com/uploads/${product.images[0]}`
    : 'https://via.placeholder.com/50'
}
                      alt={product.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.discount || 0}%</td>
                  <td>{product.gst || 0}%</td>
                  <td>{product.status || 'Active'}</td>
                  <td>{product.availability || 'No'}</td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(product._id)}>
                      <FaEdit />
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product._id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmPrdtLst;
