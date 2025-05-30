import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';

const ShopCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      if (!token) {
        setLoading(false);
        return;
      }
      const res = await axios.get('https://spices-backend-uii6.onrender.com/api/cart/items', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(res.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (cartItemId) => {
    try {
      await axios.delete(`https://spices-backend-uii6.onrender.com/api/cart/${cartItemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems((prev) => prev.filter((item) => item._id !== cartItemId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleQuantityChange = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      const res = await axios.patch(
        `https://spices-backend-uii6.onrender.com/api/cart/${cartItemId}/quantity`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItems((prev) =>
        prev.map((item) =>
          item._id === cartItemId ? { ...item, quantity: res.data.quantity } : item
        )
      );
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  // Calculate subtotal with dynamic discountPercent and gstPercent
  const cartSubtotal = cartItems.reduce((sum, item) => {
    const product = item.productId || {};
    const price = product.price || 0;
    const discountPercent = product.discount || 0; // percentage, e.g. 20 for 20%
    const gstPercent = product.gst || 0;           // percentage, e.g. 5 for 5%
    const quantity = item.quantity || 1;

    const discountAmount = (discountPercent / 100) * price;
    const discountedPrice = price - discountAmount;
    const gstAmount = (gstPercent / 100) * discountedPrice;
    const finalPrice = discountedPrice + gstAmount;

    return sum + finalPrice * quantity;
  }, 0);

  const shippingHandling = 40;
  const orderTotal = cartSubtotal + shippingHandling;

  return (
    <div className="page-wrapper d-flex flex-column min-vh-100">
      <HeaderSection />

      <section
        className="page-title"
        style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}
      >
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">Shop</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-5 flex-grow-1">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h4 className="text-muted">🛒 Your cart is empty.</h4>
            <a href="/shop" className="btn btn-outline-primary mt-3">
              Start Shopping
            </a>
          </div>
        ) : (
          <>
            <h2 className="mb-4">Your Shopping Cart</h2>
            <div className="table-responsive shadow-sm rounded">
              <table className="table table-bordered align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Remove</th>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th style={{ width: '150px' }}>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => {
                    const product = item.productId || {};
                    const quantity = item.quantity || 1;
                    const price = product.price || 0;
                    const discountPercent = product.discount || 0;
                    const gstPercent = product.gst || 0;

                    const discountAmount = (discountPercent / 100) * price;
                    const discountedPrice = price - discountAmount;
                    const gstAmount = (gstPercent / 100) * discountedPrice;
                    const finalPrice = discountedPrice + gstAmount;

                    return (
                      <tr key={item._id}>
                        <td className="text-center">
                          <button
                            className="btn btn-sm btn-outline-danger"
                            title="Remove item"
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
                          <p className="mb-0 text-muted small">
                            {product.description?.slice(0, 60)}
                          </p>
                        </td>
                        <td>₹{finalPrice.toFixed(2)}</td>
                        <td>
                          <div className="input-group input-group-sm">
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => handleQuantityChange(item._id, quantity - 1)}
                            >
                              -
                            </button>
                            <input
                              type="number"
                              className="form-control text-center"
                              value={quantity}
                              readOnly
                            />
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => handleQuantityChange(item._id, quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>₹{(finalPrice * quantity).toFixed(2)}</td>
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
                    <h5 className="card-title mb-3">Order Summary</h5>
                    <ul className="list-group list-group-flush mb-3">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Subtotal</span>
                        <strong>₹{cartSubtotal.toFixed(2)}</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Shipping & Handling</span>
                        <strong>₹{shippingHandling.toFixed(2)}</strong>
                      </li>
                      <li className="list-group-item d-flex justify-content-between text-primary">
                        <span>
                          <strong>Total</strong>
                        </span>
                        <strong>₹{orderTotal.toFixed(2)}</strong>
                      </li>
                    </ul>
                    <a href="/shop-checkout" className="btn btn-primary w-100">
                      Proceed to Checkout
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

export default ShopCart;
