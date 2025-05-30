import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      if (!token) return setLoading(false);
      const res = await axios.get('https://spices-backend-uii6.onrender.com/api/wishlist/items', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishlistItems(res.data);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (wishlistItemId) => {
    try {
      await axios.delete(`https://spices-backend-uii6.onrender.com/api/wishlist/${wishlistItemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishlistItems((prev) => prev.filter((item) => item._id !== wishlistItemId));
      toast.success('Item removed from wishlist');
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      const res = await axios.post(
        'https://spices-backend-uii6.onrender.com/api/cart',
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success(res.data.message || 'Added to cart');
    } catch (error) {
      if (error.response?.status === 409) {
        toast.info('Item already in cart');
      } else {
        toast.error('Failed to add to cart');
      }
    }
  };

  const wishlistTotal = wishlistItems.reduce((sum, item) => {
    const product = item.productId || {};
    const price = product.price || 0;
    const discount = product.discount || 0;
    const gst = product.gst || 0;

    const discountedPrice = price - (price * discount) / 100;
    const finalPrice = discountedPrice + (discountedPrice * gst) / 100;

    return sum + finalPrice;
  }, 0);

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <HeaderSection />
      <ToastContainer position="top-right" autoClose={3000} />

      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">Shop</h1>
            <ul className="page-breadcrumb">
              <li><a href="/">Home</a></li>
              <li>Wishlist</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-5 flex-grow-1">
        {wishlistItems.length === 0 ? (
          <div className="text-center">
            <h4 className="text-muted">Your wishlist is empty.</h4>
            <a href="/shop" className="btn btn-outline-primary mt-3">Start Shopping</a>
          </div>
        ) : (
          <>
            <h2 className="mb-4">Your Wishlist</h2>
            <div className="table-responsive shadow-sm rounded">
              <table className="table table-bordered align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Remove</th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Add to Cart</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => {
                    const product = item.productId || {};
                    const price = product.price || 0;
                    const discount = product.discount || 0;
                    const gst = product.gst || 0;
                    const discountedPrice = price - (price * discount) / 100;
                    const finalPrice = discountedPrice + (discountedPrice * gst) / 100;

                    return (
                      <tr key={item._id}>
                        <td className="text-center">
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleRemove(item._id)}
                          >
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                        <td>
                          <img
                            src={
                              product.images?.[0]
                                ? `http://localhost:5000/uploads/${product.images[0]}`
                                : '/assets/images/resource/products/placeholder.png'
                            }
                            alt={product.name || 'Product'}
                            className="img-thumbnail"
                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                          />
                        </td>
                        <td>
                          <strong>{product.name || 'Unnamed Product'}</strong>
                          <p className="mb-0 text-muted small">{product.description?.slice(0, 60)}</p>
                        </td>
                        <td>₹{finalPrice.toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => handleAddToCart(product._id)}
                          >
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="row mt-5 justify-content-end">
              <div className="col-md-6 col-lg-5">
                <div className="card border-0 shadow">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Wishlist Summary</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Total Wishlist Value</span>
                        <strong>₹{wishlistTotal.toFixed(2)}</strong>
                      </li>
                    </ul>
                    <a href="/shop-cart" className="btn btn-outline-primary w-100">
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      <FooterSection />
    </div>
  );
};

export default ShopWishlist;
