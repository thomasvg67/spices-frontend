import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify'

import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'

const Prdts = () => {

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
                const productsRes = await axios.get('https://spices-backend-uii6.onrender.com/api/products');
                const allProducts = productsRes.data;

                // Fetch reviews for all products in parallel
                const reviewsMap = {};
                const reviewPromises = allProducts.map(async (product) => {
                    try {
                        const res = await axios.get(`https://spices-backend-uii6.onrender.com/api/reviews/${product._id}`);
                        const reviews = res.data;
                        const averageRating = reviews.length
                            ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
                            : 0;
                        reviewsMap[product._id] = Math.round(averageRating * 2) / 2; // Round to 0.5
                    } catch (err) {
                        reviewsMap[product._id] = 0;
                    }
                });

                await Promise.all(reviewPromises);

                // Attach averageRating to each product
                const updatedProducts = allProducts.map(p => ({
                    ...p,
                    averageRating: reviewsMap[p._id] || 0,
                }));

                setProducts(updatedProducts);
            } catch (error) {
                console.error('Failed to fetch products:', error);
                toast.error('Failed to fetch products');
            }
        };

        const fetchCounts = async () => {
            try {
                const [cartRes, wishlistRes] = await Promise.all([
                    axios.get('https://spices-backend-uii6.onrender.com/api/cart/count', {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get('https://spices-backend-uii6.onrender.com/api/wishlist/count', {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);
                setCartCount(cartRes.data.count);
                setWishlistCount(wishlistRes.data.count);
            } catch (error) {
                console.error('Failed to fetch counts:', error);
            }
        };

        fetchProducts();
        if (token && userId) {
            fetchCounts();
        }
    }, [token]);


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
            const errMsg = error.response?.data?.message;
            toast.error(errMsg?.includes('already in cart') ? 'This item is already in your cart' : errMsg || 'Add to cart failed');
        }
    }

    const handleAddToWishlist = async (productId) => {
        try {
            await axios.post('https://spices-backend-uii6.onrender.com/api/wishlist', { productId }, { headers: { Authorization: `Bearer ${token}` } })
            toast.success('Added to wishlist!')
            setWishlistCount(prev => prev + 1)
        } catch (error) {
            const errMsg = error.response?.data?.message;
            toast.error(errMsg?.includes('already in wishlist') ? 'This item is already in your wishlist' : errMsg || 'Add to wishlist failed');
        }
    }

    const handleViewDetails = (productId) => {
        navigate(`/prdts/${productId}`)
    }

     

    return (
        <div>
            <HeaderSection cartCount={cartCount} wishlistCount={wishlistCount} />
            {/* Start main-content */}
            <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
                <div className="auto-container">
                    <div className="title-outer">
                        <h1 className="title">Shop</h1>
                        <ul className="page-breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>Products</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* end main-content */}
            {/* Featured Products */}
            <section className="featured-products">
                <span className="bg-shape" />
                <div className="container pb-90">
                    {/*MixitUp Galery*/}
                    <div className="mixitup-gallery">
                        {/*Filter*/}
                        <div className="filters clearfix">
                            <ul className="filter-tabs filter-btns clearfix">
                                <li className="active filter" data-role="button" data-filter="all">All</li>
                                <li className="filter" data-role="button" data-filter=".CBD">CBD</li>
                                <li className="filter" data-role="button" data-filter=".Canabis">Canabis</li>
                                <li className="filter" data-role="button" data-filter=".Healthy">Healthy</li>
                                <li className="filter" data-role="button" data-filter=".Capsules">Capsules</li>
                                <li className="filter" data-role="button" data-filter=".Beverages">Beverages</li>
                            </ul>
                        </div>
                        <div className="filter-list row">

                            {products.map(product => {
    const discountAmount = (product.price * (product.discount || 0)) / 100;
    const discountedPrice = product.price - discountAmount;
    const gstAmount = (discountedPrice * (product.gst || 0)) / 100;
    const finalPrice = discountedPrice + gstAmount;

    return (
        <div key={product._id} className="product-block all Healthy Canabis CBD Capsules mb-md-50 col-lg-3 col-md-6 col-sm-12">
            <div className="inner-box">
                <div className="image-box">
                    <div className="image">
                        <a onClick={() => handleViewDetails(product._id)} style={{ cursor: 'pointer' }}>
                            <img src={`https://spices-backend-uii6.onrender.com/uploads/${product.images[0]}`} alt={product.name} />
                        </a>
                    </div>
                    <div className="icon-box">
                        <button className="ui-btn" onClick={() => handleAddToWishlist(product._id)}><i className="fa fa-eye" /></button>
                        <button className="ui-btn" onClick={() => handleAddToCart(product._id)}><i className="fa fa-shopping-cart" /></button>
                    </div>
                </div>
                <div className="content">
                    <span className="rating">
                        {(() => {
                            const fullStars = Math.floor(product.averageRating || 0);
                            const halfStar = (product.averageRating % 1) >= 0.5;
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
                        })()}
                    </span>
                    <h4><a onClick={() => handleViewDetails(product._id)} style={{ cursor: 'pointer' }}>{product.name}</a></h4>
                    <span className="price">₹{finalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
})}


                        </div>
                    </div>
                </div>
            </section>
            {/* End Featured Products */}
            <FooterSection />

        </div>
    )
}

export default Prdts
