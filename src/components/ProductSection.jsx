import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

// const products = [
//   {
//     id: 1,
//     name: 'Cocoa Pack',
//     price: '$23.00',
//     img: '/assets/images/resource/products/1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Ginger Paste',
//     price: '$23.00',
//     img: '/assets/images/resource/products/2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Turmeric Fuego',
//     price: '$23.00',
//     img: '/assets/images/resource/products/3.jpg',
//   },
//   {
//     id: 4,
//     name: 'Bay Leaf Tab',
//     price: '$23.00',
//     img: '/assets/images/resource/products/4.jpg',
//   },
//   // Add more if needed
// ];

const ProductSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const [products, setProducts] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  let userId = null

  if (token) {
    try {
      const decoded = jwtDecode(token)
      userId = decoded.userId
    } catch (err) {
      console.error('invalid token', err)
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://spices-backend-uii6.onrender.com/api/products')
        setProducts(response.data)
      } catch (error) {
        console.error('Failed to fetch products', error)
        toast.error('Failed to fetch products')
      }
    }

    const fetchCounts = async () => {
      try {
        const [cartRes, wishlistRes] = await Promise.all([
          axios.get('https://spices-backend-uii6.onrender.com/api/cart/count', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('https://spices-backend-uii6.onrender.com/api/wishlist/count', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
        ])
        setCartCount(cartRes.data.count)
        setWishlistCount(wishlistRes.data.count)
      } catch (error) {
        console.error('Failed to fetch counts:', error)
      }
    }

    fetchProducts()
    if (token && userId) {
      fetchCounts()
    }
  }, [token])

  const handleAddToCart = async (productId) => {
    try {
      await axios.post(
        'https://spices-backend-uii6.onrender.com/api/cart',
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      toast.success('Added to cart!')
      setCartCount(prev => prev + 1)
    } catch (error) {
      console.error('Add to cart failed:', error)
      toast.error('Add to cart failed')
    }
  }

  const handleAddToWishlist = async (productId) => {
    try {
      await axios.post(
        'https://spices-backend-uii6.onrender.com/api/wishlist',
        { productId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      toast.success('Added to wishlist!')
      setWishlistCount(prev => prev + 1)
    } catch (error) {
      console.error('Add to wishlist failed:', error)
      toast.error('Add to wishlist failed')
    }
  }

  const handleViewDetails = (productId) => {
    navigate(`/shop-product-details/${productId}`)
  }

  return (
    <div>
      <section className="products-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Our New Products</span>
            <h2>Medical Products</h2>
            <span className="divider" />
          </div>

          <Slider {...settings}>
            {products.map((product) => (
              <div className="product-block" key={product._id}>
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <a onClick={() => handleViewDetails(product._id)}>
                        {product.images && product.images.length > 0 && (
                          <img src={`http://localhost:5000/uploads/${product.images[0]}`} alt={product.name} />)}
                      </a>
                    </div>
                    <div className="icon-box">
                      <a onClick={() => handleAddToWishlist(product._id)} className="ui-btn">
                        <i className="fa fa-eye" />
                      </a>
                      <a onClick={() => handleAddToCart(product._id)} className="ui-btn">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <span className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </span>
                    <h4>
                      <a href="shop-product-details.html">{product.name}</a>
                    </h4>
                    <span className="price">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
