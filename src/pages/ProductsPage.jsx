import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductsPage = () => {
   const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://spices-backend-uii6.onrender.com/api/products/${id}`);
        const productData = res.data;
        setProduct(productData);
        // Set first image if images exist
        if (productData.images && productData.images.length > 0) {
          setSelectedImage(`https://spices-backend-uii6.onrender.com/uploads/${productData.images[0]}`);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  // Calculate discounted price
  const discountAmount = (product.price * (product.discount || 0)) / 100;
  const gstAmount = (product.price * (product.gst || 0)) / 100;
  const finalPrice = product.price - discountAmount + gstAmount;

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Left - Images */}
        <div className="col-md-6">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt={product.name}
              className="img-fluid rounded border"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          ) : (
            <div className="border rounded d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
              <span className="text-muted">No Image Available</span>
            </div>
          )}

          <div className="d-flex mt-3 gap-2 flex-wrap">
            {product.images &&
              product.images.map((img, index) => (
                <img
                  key={index}
                  src={`https://spices-backend-uii6.onrender.com/uploads/${img}`}
                  alt={`thumb-${index}`}
                  className={`img-thumbnail ${`https://spices-backend-uii6.onrender.com/uploads/${img}` === selectedImage ? 'border-primary' : ''}`}
                  style={{ width: '80px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
                  onClick={() => setSelectedImage(`https://spices-backend-uii6.onrender.com/uploads/${img}`)}
                />
              ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>

          <h4 className="text-success">
            ${finalPrice.toFixed(2)}{' '}
            {product.discount ? (
              <small className="text-decoration-line-through text-muted ms-2">
                ${product.price.toFixed(2)}
              </small>
            ) : null}
          </h4>

          <p>
            <strong>Discount:</strong> {product.discount || 0}%
          </p>
          <p>
            <strong>GST:</strong> {product.gst || 0}%
          </p>

          <p>
            <strong>Status:</strong> {product.status || 'N/A'}
          </p>
          <p>
            <strong>Availability:</strong>{' '}
            <span className={product.availability.toLowerCase().includes('store') ? 'text-success' : 'text-danger'}>
              {product.availability}
            </span>
          </p>

          <div className="my-3">
            <button className="btn btn-outline-secondary me-2">
              <i className="bi bi-heart"></i> Add to Wishlist
            </button>
            <button className="btn btn-primary">
              <i className="bi bi-cart-plus"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;


//  <div className="col-md-12 mt-60">
//               <div className="payment-method">
//                 <h3>Choose a Payment Method</h3>
//                 <ul className="accordion-box">
//                   <li className="accordion block active-block">
//                     <div className="acc-btn active">
//                       <div className="icon-outer"><i className="lnr-icon-chevron-down" /></div>
//                       Credir Card / Debit Card
//                     </div>
//                     <div className="acc-content current">
//                       <div className="payment-info">
//                         <div className="row clearfix">
//                           <div className="col-lg-6 col-md-6 col-sm-12 column">
//                             <div className="field-input mb-3">
//                               <input type="text" className="form-control" name="name" placeholder="Name on the Card" required />
//                             </div>
//                           </div>
//                           <div className="col-lg-6 col-md-6 col-sm-12 column">
//                             <div className="field-input mb-3">
//                               <input type="text" className="form-control" name="number" placeholder="Card Number" required />
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-6 col-sm-12 column">
//                             <div className="field-input mb-3">
//                               <input type="text" className="form-control" name="date" placeholder="Expiry Date" required />
//                             </div>
//                           </div>
//                           <div className="col-lg-3 col-md-6 col-sm-12 column">
//                             <div className="field-input mb-3">
//                               <input type="text" className="form-control" name="code" placeholder="Security Code" required />
//                             </div>
//                           </div>
//                           <div className="col-lg-6 col-md-12 col-sm-12 column">
//                             <div className="field-input message-btn">
//                               <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Make Payment</span></button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li className="accordion block">
//                     <div className="acc-btn">
//                       <div className="icon-outer"><i className="lnr-icon-chevron-down" /></div>
//                       Direct Bank Transfer
//                     </div>
//                     <div className="acc-content">
//                       <div className="payment-info">
//                         <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
//                       </div>
//                     </div>
//                   </li>
//                   <li className="accordion block">
//                     <div className="acc-btn">
//                       <div className="icon-outer"><i className="lnr-icon-chevron-down" /></div>
//                       Cheque Payment
//                     </div>
//                     <div className="acc-content">
//                       <div className="payment-info">
//                         <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
//                       </div>
//                     </div>
//                   </li>
//                   <li className="accordion block">
//                     <div className="acc-btn">
//                       <div className="icon-outer"><i className="lnr-icon-chevron-down" /></div>
//                       Other Payment
//                     </div>
//                     <div className="acc-content">
//                       <div className="payment-info">
//                         <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </form>