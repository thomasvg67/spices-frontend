import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    discount: '',
    gst: '',
    status: '',
    availability: '',
  });

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4); // max 4 images
    setImages(files);

    // Generate previews
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      // Append text fields
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      // Append images
      images.forEach((image, index) => {
        data.append('images', image); // backend should expect 'images' as array
      });

      // POST to backend
      await axios.post('https://spices-backend-uii6.onrender.com/api/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Product added successfully!');
      navigate('/admin/dashboard'); // or wherever your admin dashboard is
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Add Product</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow" encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>

        <div className="row">
          <div className="col-md-3 mb-3">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              name="price"
              step="0.01"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
              required
              placeholder="Price"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Discount (%)</label>
            <input
              type="number"
              name="discount"
              step="0.01"
              className="form-control"
              value={formData.discount}
              onChange={handleChange}
              placeholder="Discount"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">GST (%)</label>
            <input
              type="number"
              name="gst"
              step="0.01"
              className="form-control"
              value={formData.gst}
              onChange={handleChange}
              placeholder="GST"
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Status</label>
            <select
              name="status"
              className="form-select"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Availability</label>
          <select
            name="availability"
            className="form-select"
            value={formData.availability}
            onChange={handleChange}
            required
          >
            <option value="">Select Availability</option>
            <option value="In Store">In Store</option>
            <option value="Online Only">Online Only</option>
          </select>
        </div>

        {/* Upload New Images (max 4) with clickable previews */}
        <div className="mb-3">
          <label className="form-label">Upload New Images (max 4)</label>
          <div className="d-flex flex-wrap gap-3">
            {Array(4).fill('').map((_, index) => (
              <label key={index} htmlFor={`image${index}`} style={{ cursor: 'pointer' }}>
                <input
                  accept="image/*"
                  type="file"
                  id={`image${index}`}
                  hidden
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (!file) return;

                    const updatedImages = [...images];
                    updatedImages[index] = file;
                    setImages(updatedImages);

                    const previewUrl = URL.createObjectURL(file);
                    const updatedPreviews = [...imagePreviews];
                    updatedPreviews[index] = previewUrl;
                    setImagePreviews(updatedPreviews);
                  }}
                />
                <img
                  className="border rounded"
                  src={
                    imagePreviews[index] ||
                    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png'
                  }
                  alt={`upload-${index}`}
                  width={100}
                  height={100}
                  style={{ objectFit: 'cover' }}
                />
              </label>
            ))}
          </div>
        </div>


        {/* Image previews */}
        {imagePreviews.length > 0 && (
          <div className="mb-3 d-flex gap-2 flex-wrap">
            {imagePreviews.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`preview-${idx}`}
                style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px', border: '1px solid #ddd' }}
              />
            ))}
          </div>
        )}

        <button type="submit" className="btn btn-success w-100">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
