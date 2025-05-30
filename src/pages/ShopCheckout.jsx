import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";

const ShopCheckout = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user addresses on mount
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const token = localStorage.getItem("token"); // Adjust if your token is stored elsewhere
        if (!token) throw new Error("User not authenticated");

        const response = await axios.get("https://spices-backend-uii6.onrender.com/api/user/addresses", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const fetchedAddresses = response.data || [];
        setAddresses(fetchedAddresses);
        if (fetchedAddresses.length > 0) {
          setSelectedAddressId(fetchedAddresses[0]._id); // Default select first address
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load addresses");
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  const handleAddressSelect = (id) => {
    setSelectedAddressId(id);
  };

  return (
    <div>
      <div className="page-wrapper">
        {/* Preloader */}
        <div className="preloader" />
        {/* Main Header */}
        <HeaderSection />
        {/*End Main Header */}
        {/* Start main-content */}
        <section
          className="page-title"
          style={{ backgroundImage: "url(/assets/images/background/6.jpg)" }}
        >
          <div className="auto-container">
            <div className="title-outer">
              <h1 className="title">Checkout</h1>
              <ul className="page-breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Shop</li>
              </ul>
            </div>
          </div>
        </section>
        {/* end main-content */}
        {/*checkout Start*/}
        <section>
          <div className="container pt-70">
            <div className="section-content">
              <form id="checkout-form" action="#">
                <div className="row mt-30">
                  <div className="col-md-6">
                    <div className="billing-details">
                      <h3 className="mb-30">Billing Details</h3>
                      {/* You can add billing form inputs here */}
                       {loading && <p>Loading addresses...</p>}
                    {error && <p className="text-danger">{error}</p>}

                    {!loading && addresses.length === 0 && (
                      <p>No saved addresses found.</p>
                    )}

                    {!loading && addresses.length > 0 && (
                      <ul className="list-group mb-3">
                        {addresses.map((addr) => (
                          <li
                            className="list-group-item d-flex align-items-center"
                            key={addr._id}
                          >
                            <input
                              type="radio"
                              name="billingAddress"
                              id={`addr_${addr._id}`}
                              value={addr._id}
                              checked={selectedAddressId === addr._id}
                              onChange={() => handleAddressSelect(addr._id)}
                              className="me-3"
                            />
                            <label htmlFor={`addr_${addr._id}`} className="mb-0 flex-grow-1">
                              {addr.houseNo}, {addr.city}, {addr.state} - {addr.pincode}
                              <br />
                              <small>{addr.location}</small>
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                    </div>
                  </div>

                  {/* Address Info with radio buttons */}
                  <div className="col-md-6">
                    <h4>Additional Informations</h4>

                    
                  </div>
                </div>

                {/* Rest of your order summary, payment method, etc. here */}
                {/* ... keep your existing order summary and payment method code unchanged ... */}

                <div className="col-md-12 mt-30">
                  <h3>Your order</h3>
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <a href="shop-product-details.html">
                            <img
                              alt="product"
                              src="/assets/images/resource/products/thumb-1.jpg"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="shop-product-details.html">Bananas</a> x 2
                        </td>
                        <td>
                          <span className="amount">$36.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <a href="shop-product-details.html">
                            <img
                              alt="product"
                              src="/assets/images/resource/products/thumb-2.jpg"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="shop-product-details.html">Potatos</a> x 3
                        </td>
                        <td>
                          <span className="amount">$115.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <a href="shop-product-details.html">
                            <img
                              alt="product"
                              src="/assets/images/resource/products/thumb-3.jpg"
                            />
                          </a>
                        </td>
                        <td className="product-name">
                          <a href="shop-product-details.html">Apples</a> x 1
                        </td>
                        <td>
                          <span className="amount">$68.00</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>&nbsp;</td>
                        <td>$180.00</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handling</td>
                        <td>&nbsp;</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Order Total</td>
                        <td>&nbsp;</td>
                        <td>$250.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-12 mt-60">
                  <div className="payment-method">
                    {/* ... keep your existing payment method code here ... */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*checkout End*/}
        {/* Main Footer */}
        <FooterSection />
        {/*End Main Footer */}
      </div>
      {/* End Page Wrapper */}
    </div>
  );
};

export default ShopCheckout;
