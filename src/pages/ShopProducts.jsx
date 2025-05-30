import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify'

import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'

const ShopProducts = () => {
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
      console.error('Invalid token', err)
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://spices-backend-uii6.onrender.com/api/products')
        setProducts(response.data)
      } catch (error) {
        console.error('Failed to fetch products:', error)
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
    navigate(`/productdet/${productId}`)
  }

  return (
    <div>
      <div className="page-wrapper">
        <HeaderSection />

        <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
          <div className="auto-container">
            <div className="title-outer">
              <h1 className="title">Shop</h1>
              <ul className="page-breadcrumb">
                <li><a href="/">Home</a></li>
                <li>Products</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="featured-products">
          <div className="container mt-5">
            <h2 className="mb-4 text-center">All Products</h2>
            <div className="row">
              {products.map(product => (
                <div className="col-md-4 mb-4" key={product._id}>
                  <div className="card h-100">
                    {product.images && product.images.length > 0 && (
                      <img
                        src={`https://spices-backend-uii6.onrender.com/uploads/${product.images[0]}`}
                        className="card-img-top"
                        alt={product.name}
                        style={{ objectFit: 'cover', height: '200px', cursor: 'pointer' }}
                        onClick={() => handleViewDetails(product._id)}
                      />
                    )}
                    <div className="card-body" style={{ cursor: 'pointer' }} onClick={() => handleViewDetails(product._id)}>
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      {(() => {
                        const discountPrice = product.price - (product.price * (product.discount || 0) / 100)
                        const finalPrice = discountPrice + (discountPrice * (product.gst || 0) / 100)
                        return (
                          <p className="card-text">
                            <strong>Price: ₹{finalPrice.toFixed(2)}</strong>
                          </p>
                        )
                      })()}
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => handleAddToWishlist(product._id)}
                      >
                        <i className="fa fa-heart"></i> Wishlist
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(product._id)}
                      >
                        <i className="fa fa-shopping-cart"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  )
}

export default ShopProducts
