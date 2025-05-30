import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams(); // get product id from URL params
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

  const [images, setImages] = useState([]); // new images to upload
  const [imagePreviews, setImagePreviews] = useState([]); // previews of new images
  const [existingImages, setExistingImages] = useState([]); // already uploaded images from product

  useEffect(() => {
    // Fetch product by id and fill form data
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://spices-backend-uii6.onrender.com/api/products/${id}`);
        const product = res.data;

        setFormData({
          name: product.name || '',
          description: product.description || '',
          price: product.price || '',
          discount: product.discount || '',
          gst: product.gst || '',
          status: product.status || '',
          availability: product.availability || '',
        });

        setExistingImages(product.images || []);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        alert('Failed to fetch product data');
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle new image uploads
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 4); // max 4 images
    setImages(files);

    // Generate previews for new images
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Optional: Handle removing existing images from the list before update
  const handleRemoveExistingImage = (index) => {
    const newExisting = existingImages.filter((_, i) => i !== index);
    setExistingImages(newExisting);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      // Append text fields
      for (const key in formData) {
        data.append(key, formData[key]);
      }

      // Append existing images that user did not remove
      existingImages.forEach((img) => {
        data.append('existingImages', img);
      });

      // Append new images
      images.forEach((image) => {
        data.append('images', image);
      });

      // PUT or PATCH request to update product by id
      await axios.put(`https://spices-backend-uii6.onrender.com/api/products/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Product updated successfully!');
      navigate('/admin/dashboard'); // redirect back to admin dashboard
    } catch (err) {
      console.error('Failed to update product:', err);
      alert('Failed to update product');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Edit Product</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow" encType="multipart/form-data">
        {/* Product Name */}
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

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Enter product description"
          />
        </div>

        {/* Price, Discount, GST, Status */}
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

        {/* Availability */}
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

        {/* Existing Images with remove option */}
        {existingImages.length > 0 && (
          <div className="mb-3">
            <label className="form-label">Existing Images</label>
            <div className="d-flex gap-2 flex-wrap">
              {existingImages.map((img, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <img
                    src={`https://spices-backend-uii6.onrender.com/uploads/${img}`}
                    alt={`existing-${idx}`}
                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px', border: '1px solid #ddd' }}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveExistingImage(idx)}
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      background: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                    }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

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

        <button type="submit" className="btn btn-primary w-100">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
