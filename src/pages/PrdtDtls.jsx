import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import HeaderSection from '../components/HeaderSection';
import FooterSection from '../components/FooterSection';

const PrdtDtls = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [activeTab, setActiveTab] = useState("tab-1");
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    review: '',
    rating: 0
  });
  const [visibleCount, setVisibleCount] = useState(3); // Start by showing 3

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 10); // Show 10 more on each click
  };

  const token = localStorage.getItem('token');
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const approvedReviewCount = reviews.length;
  const averageRating = approvedReviewCount
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / approvedReviewCount
    : 0;

  const renderStars = () => {
    const fullStars = Math.floor(averageRating);
    const halfStar = averageRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fa fa-star text-warning" />
        ))}
        {halfStar && <i className="fa fa-star-half-o text-warning" />}
        {[...Array(emptyStars)].map((_, i) => (
          <i key={`empty-${i}`} className="fa fa-star-o text-warning" />
        ))}
      </>
    );
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (rating) => {
    setReviewForm(prev => ({ ...prev, rating }));
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (reviewForm.rating < 1 || reviewForm.rating > 5) {
      return toast.error('Please select a rating');
    }
    if (!reviewForm.name.trim()) {
      return toast.error('Name is required');
    }
    if (!reviewForm.review.trim()) {
      return toast.error('Review message is required');
    }

    try {
      await axios.post(`https://spices-backend-uii6.onrender.com/api/reviews/${productId}`, reviewForm, axiosConfig);
      toast.success('Review submitted!');
      setReviewForm({ name: '', email: '', review: '', rating: 0 });
    } catch (error) {
      console.error('Failed to submit review:', error);
      const errMsg = error.response?.data?.message || 'Failed to submit review';
      toast.error(errMsg);
    }
  };




  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://spices-backend-uii6.onrender.com/api/products/${productId}`);
        const productData = res.data;
        setProduct(productData);
        if (productData.images?.length > 1) {
          setSelectedImage(`https://spices-backend-uii6.onrender.com/uploads/${productData.images[1]}`);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Failed to fetch product');
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://spices-backend-uii6.onrender.com/api/reviews/${productId}`);
        setReviews(res.data);
      } catch (error) {
        console.error("Failed to fetch reviews", error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchReviews();
    }
  }, [activeTab, productId]);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [cartRes, wishlistRes] = await Promise.all([
          axios.get('https://spices-backend-uii6.onrender.com/api/cart/count', axiosConfig),
          axios.get('https://spices-backend-uii6.onrender.com/api/wishlist/count', axiosConfig),
        ]);
        setCartCount(cartRes.data.count);
        setWishlistCount(wishlistRes.data.count);
      } catch (error) {
        console.error('Failed to fetch counts:', error);
      }
    };

    if (token) fetchCounts();
  }, [token]);

  useEffect(() => {
    if (!product?.images?.length) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [product?.images?.length]);

  const handleAddToCart = async () => {
    try {
      await axios.post('https://spices-backend-uii6.onrender.com/api/cart', { productId, quantity: quantity || 1 }, axiosConfig);
      toast.success('Added to cart!');
      setCartCount(prev => prev + 1);
    } catch (error) {
      const errMsg = error.response?.data?.message;
      toast.error(errMsg?.includes('already in cart') ? 'This item is already in your cart' : errMsg || 'Add to cart failed');
    }
  };

  const handleAddToWishlist = async () => {
    try {
      await axios.post('https://spices-backend-uii6.onrender.com/api/wishlist', { productId }, axiosConfig);
      toast.success('Added to wishlist!');
      setWishlistCount(prev => prev + 1);
    } catch (error) {
      const errMsg = error.response?.data?.message;
      toast.error(errMsg?.includes('already in wishlist') ? 'This item is already in your wishlist' : errMsg || 'Add to wishlist failed');
    }
  };

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  const discountAmount = (product.price * (product.discount || 0)) / 100;
  const discountedPrice = product.price - discountAmount;
  const gstAmount = (discountedPrice * (product.gst || 0)) / 100;
  const finalPrice = discountedPrice + gstAmount;

  const images = product.images.slice(1).map(img => `https://spices-backend-uii6.onrender.com/uploads/${img}`);


  return (
    <div>
      <HeaderSection cartCount={cartCount} wishlistCount={wishlistCount} />
      {/* Start main-content */}
      <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">Product Details</h1>
            <ul className="page-breadcrumb">
              <li><a href="index.html">Home</a></li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
      </section>
      {/* end main-content */}
      {/*Product Details Start*/}
      <section className="product-details">
        <div className="container pb-70">
          <div className="row">
            {/* Image Slider */}
            <div className="col-lg-6 col-xl-6">
              <div className="bxslider">
                <div className="slider-content">
                  <figure className="image-box">
                    <a
                      href={images[activeIndex]}
                      className="lightbox-image"
                      data-fancybox="gallery"
                    >
                      <img src={images[activeIndex]} alt="" />
                    </a>
                  </figure>

                  <div className="slider-pager">
                    <ul className="thumb-box">
                      {product.images &&
                        product.images.slice(1).map((img, index) => (
                          <li key={index}>
                            <a
                              className={index === activeIndex ? 'active' : ''}
                              href="#!"
                              onClick={(e) => {
                                e.preventDefault(); // Prevent default anchor behavior
                                setActiveIndex(index); // Change large image
                              }}
                            >

                              <figure>
                                <img src={`https://spices-backend-uii6.onrender.com/uploads/${img}`} alt={`thumb-${index}`} />
                              </figure>
                            </a>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6 col-xl-6 product-info">
              <div className="product-details__top">
                <h3 className="product-details__title">
                  {product.name} <span>₹{finalPrice.toFixed(2)}{' '}</span>
                </h3>
              </div>
              <div className="product-details__reveiw">
                {renderStars()}
                <span>{approvedReviewCount} Customer Review{approvedReviewCount !== 1 ? 's' : ''}</span>
              </div>
              <div className="product-details__content">
                <p className="product-details__content-text1">
                  {product.description}
                </p>
                <p className="product-details__content-text2">
                  <strong>REF.</strong> 4231/406 <br />
                  Available {product.availability}
                </p>
              </div>

              <div className="product-details__quantity">
                <h3 className="product-details__quantity-title">Choose quantity</h3>
                <div className="quantity-box">
                  <button
                    type="button"
                    className="sub"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    min={1}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      if (!isNaN(val) && val >= 1) {
                        setQuantity(val);
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="add"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>

              <div className="product-details__buttons">
                <div className="product-details__buttons-1">
                  <button className="theme-btn btn-style-one">
                    <span className="btn-title" onClick={handleAddToCart}>Add to Cart</span>
                  </button>
                </div>
                <div className="product-details__buttons-2">
                  <a href="#" className="theme-btn btn-style-one">
                    <span className="btn-title" onClick={handleAddToWishlist}>Add to Wishlist</span>
                  </a>
                </div>
              </div>

              <div className="product-details__social">
                <div className="title">
                  <h3>Share with friends</h3>
                </div>
                <ul className="social-icon-one">
                  <li><a href="#"><i className="fab fa-twitter" /></a></li>
                  <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                  <li><a href="#"><i className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Product Description Start*/}
      <section className="product-description">
        <div className="container pt-0 pb-90">
          <div className="product-discription">

            <div className="tabs-box">
              <div className="tab-btn-box text-center">
                <ul className="tab-btns tab-buttons clearfix">
                  <li
                    className={`tab-btn ${activeTab === "tab-1" ? "active-btn" : ""}`}
                    onClick={() => setActiveTab("tab-1")}
                  >
                    Description
                  </li>
                  <li
                    className={`tab-btn ${activeTab === "tab-2" ? "active-btn" : ""}`}
                    onClick={() => setActiveTab("tab-2")}
                  >
                    Reviews
                  </li>
                </ul>
              </div>

              <div className="tabs-content">
                {activeTab === "tab-1" && (
                  <div className="tab active-tab" id="tab-1">
                    <div className="text">
                      <h3 className="product-description__title">Description</h3>
                      <p className="product-description__text1">
                        Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum...
                      </p>
                      <div className="product-description__list">
                        <ul className="list-unstyled">
                          <li><p><span className="fa fa-arrow-right" /> Nam at elit nec neque suscipit gravida.</p></li>
                          <li><p><span className="fa fa-arrow-right" /> Aenean egestas orci eu maximus tincidunt.</p></li>
                          <li><p><span className="fa fa-arrow-right" /> Curabitur vel turpis id tellus cursus laoreet.</p></li>
                        </ul>
                      </div>
                      <p className="product-description__tex2">
                        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks...
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "tab-2" && (
                  <div className="tab active-tab" id="tab-2">
                    <div className="customer-comment">
                      <div className="row clearfix">
                        {loading ? (
                          <div className="text-center">Loading reviews...</div>
                        ) : reviews.length === 0 ? (
                          <div className="text-center">No reviews found.</div>
                        ) : (
                          reviews.slice(0, visibleCount).map((review) => (
                            <div key={review._id} className="col-12 comment-column">
                              <div className="single-comment-box">
                                <div className="inner-box">
                                  <figure className="comment-thumb">
                                    <img
                                      src="/assets/images/resource/user.jpg"
                                      alt={review.name}
                                    />
                                  </figure>
                                  <div className="inner">
                                    <ul className="rating clearfix">
                                      {[...Array(5)].map((_, i) => (
                                        <li key={i}>
                                          <i className={`fas fa-star ${i < review.rating ? '' : 'text-muted'}`} />
                                        </li>
                                      ))}
                                    </ul>
                                    <h5>
                                      {review.name},{" "}
                                      <span>
                                        {new Date(review.createdAt).toLocaleDateString('en-US', {
                                          day: '2-digit',
                                          month: 'short',
                                          year: 'numeric'
                                        })} .{" "}
                                        {new Date(review.createdAt).toLocaleTimeString([], {
                                          hour: '2-digit',
                                          minute: '2-digit'
                                        })}
                                      </span>
                                    </h5>
                                    <p>{review.review}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>

                      {/* View More Button */}
                      {!loading && visibleCount < reviews.length && (
                        <div className="text-center mt-4">
                          <button
                            onClick={handleViewMore}
                            className="btn btn-primary"
                            style={{
                              backgroundColor: '#90ee90', // light green
                              border: 'none',
                              color: '#000',
                              padding: '10px 20px',
                              borderRadius: '5px',
                              // fontWeight: 'bold',
                              cursor: 'pointer',
                            }}
                          >
                            View More
                          </button>
                        </div>
                      )}
                    </div>


                    {/* Review Form */}
                    <div className="comment-box">
                      <h3>Add Your Comments</h3>
                      <form onSubmit={handleReviewSubmit}>
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            name="review"
                            rows={7}
                            placeholder="Enter Message"
                            value={reviewForm.message}
                            onChange={handleReviewChange}
                            required
                          />
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <input
                              className="form-control"
                              type="text"
                              name="name"
                              placeholder="Enter Name"
                              value={reviewForm.name}
                              onChange={handleReviewChange}
                              required
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              className="form-control"
                              type="email"
                              name="email"
                              placeholder="Enter Email (optional)"
                              value={reviewForm.email}
                              onChange={handleReviewChange}
                            />
                          </div>
                        </div>
                        <div className="review-box clearfix">
                          <p>Your Rating</p>
                          <ul className="rating clearfix">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <li key={star} onClick={() => handleStarClick(star)}>
                                <i className={reviewForm.rating >= star ? "fas fa-star" : "far fa-star"} />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button type="submit" className="theme-btn btn-style-one mt-3">
                          <span className="btn-title">Submit Comment</span>
                        </button>
                      </form>
                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Product Description End*/}
      <section className="related-product">
        <div className="container pt-0 pb-90">
          <h3>Related Products</h3>
          <div className="row clearfix">
            <div className="col">
              {/*MixitUp Galery*/}
              <div className="mixitup-gallery">
                <div className="filter-list row">
                  {/*Product Block*/}
                  <div className="product-block all mix CBD Canabis col-lg-3 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image"><a href="shop-product-details.html"><img src="/assets/images/resource/products/1.jpg" alt="" /></a></div>
                        <div className="icon-box">
                          <a href="shop-product-details.html" className="ui-btn"><i className="fa fa-eye" /></a>
                          <a href="shop-cart.html" className="ui-btn"><i className="fa fa-shopping-cart" /></a>
                        </div>
                      </div>
                      <div className="content">
                        <span className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></span>
                        <h4><a href="shop-product-details.html">Tablets Pack</a></h4>
                        <span className="price">$23.00</span>
                      </div>
                    </div>
                  </div>
                  {/*Product Block*/}
                  <div className="product-block all mix Healthy Canabis CBD Capsules col-lg-3 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image"><a href="shop-product-details.html"><img src="/assets/images/resource/products/2.jpg" alt="" /></a></div>
                        <div className="icon-box">
                          <a href="shop-product-details.html" className="ui-btn"><i className="fa fa-eye" /></a>
                          <a href="shop-cart.html" className="ui-btn"><i className="fa fa-shopping-cart" /></a>
                        </div>
                      </div>
                      <div className="content">
                        <span className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></span>
                        <h4><a href="shop-product-details.html">CBD Oil Bottle</a></h4>
                        <span className="price">$23.00</span>
                      </div>
                    </div>
                  </div>
                  {/*Product Block*/}
                  <div className="product-block all mix Capsules Canabis col-lg-3 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image"><a href="shop-product-details.html"><img src="/assets/images/resource/products/3.jpg" alt="" /></a></div>
                        <div className="icon-box">
                          <a href="shop-product-details.html" className="ui-btn"><i className="fa fa-eye" /></a>
                          <a href="shop-cart.html" className="ui-btn"><i className="fa fa-shopping-cart" /></a>
                        </div>
                      </div>
                      <div className="content">
                        <span className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></span>
                        <h4><a href="shop-product-details.html">Fredddy Fuego</a></h4>
                        <span className="price">$23.00</span>
                      </div>
                    </div>
                  </div>
                  {/*Product Block*/}
                  <div className="product-block all mix Healthy CBD Canabis col-lg-3 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="image-box">
                        <div className="image"><a href="shop-product-details.html"><img src="/assets/images/resource/products/4.jpg" alt="" /></a></div>
                        <div className="icon-box">
                          <a href="shop-product-details.html" className="ui-btn"><i className="fa fa-eye" /></a>
                          <a href="shop-cart.html" className="ui-btn"><i className="fa fa-shopping-cart" /></a>
                        </div>
                      </div>
                      <div className="content">
                        <span className="rating"><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /></span>
                        <h4><a href="shop-product-details.html">Healthy Tab</a></h4>
                        <span className="price">$23.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>

  )
}

export default PrdtDtls