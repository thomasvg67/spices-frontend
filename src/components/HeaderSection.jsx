import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const HeaderSection = ({ }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [cartCount, setCartCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserName(decoded.email || decoded.fullName || "User");
                setIsLoggedIn(true);

                // Fetch cart and wishlist counts
                axios.get("https://spices-backend-uii6.onrender.com/api/cart/count", {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(res => {
                    setCartCount(res.data.count || 0);
                }).catch(err => {
                    console.error("Error fetching cart count:", err);
                });

                axios.get("https://spices-backend-uii6.onrender.com/api/wishlist/count", {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(res => {
                    setWishlistCount(res.data.count || 0);
                }).catch(err => {
                    console.error("Error fetching wishlist count:", err);
                });

            } catch (error) {
                console.error("Invalid token:", error);
                setIsLoggedIn(false);
            }
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        setIsLoggedIn(false);
        window.location.reload(); // or navigate to login
    };

    return (
        <div>
            <header className="main-header header-style-one">
                <div className="header-top">
                    <div className="auto-container">
                        <div className="row">
                            <div className="top-center col-lg-2 col">
                                <div className="logo"><a href="/"><img src="/assets/images/logo.png" alt="" title="Fesho" /></a></div>
                            </div>
                            <div className="top-left col-lg-5 col">
                                <ul className="social-icon-one">
                                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                </ul>
                                <span className="divider" />
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <a href="tel:+92880098670">+92 (880) - 9867</a>
                                </div>
                            </div>
                            <div className="top-right col-lg-5 col">
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <a href="mailto:help@company.com">help@company.com</a>
                                </div>
                                <span className="divider" />
                                <div className="outer-box">
                                    <a href="/shop-wishlist" className="ui-btn wishlist-btn" style={{ position: 'relative', marginRight: '10px' }}>
                                        <span className="icon lnr-icon-heart" />
                                        <span className="count">{wishlistCount}</span>
                                    </a>

                                    <a href="/shop-cart" className="ui-btn cart-btn" style={{ position: 'relative' }}>
                                        <span className="icon lnr-icon-cart" />
                                        <span className="count">{cartCount}</span>
                                    </a>



                                    <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Top */}
                {/* Header Lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="main-box">
                            {/*Nav Box*/}
                            <div className="nav-outer">
                                <nav className="nav main-menu">
                                    <ul className="navigation">
                                        <li className="current dropdown"><a href="/">Home</a>
                                            <ul>
                                                <li><a href="/">Home page 01</a></li>
                                                <li><a href="/">Home page 02</a></li>
                                                <li className="dropdown"><a href="#">Header Styles</a>
                                                    <ul>
                                                        <li><a href="/">Header Style One</a></li>
                                                        <li><a href="/">Header Style Two</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Pages</a>
                                            <ul>
                                                <li><a href="/page-about">About</a></li>
                                                <li className="dropdown"><a href="#">Services</a>
                                                    <ul>
                                                        <li><a href="/page-services">Services List</a></li>
                                                        <li><a href="/page-service-details">Service Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a href="#">Team</a>
                                                    <ul>
                                                        <li><a href="/page-team">Team List</a></li>
                                                        <li><a href="/page-team-details">Team Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/page-testimonial">Testimonial</a></li>
                                                <li><a href="/page-faq">FAQ</a></li>
                                                <li><a href="/page-404">Page 404</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">Shop</a>
                                            <ul>
                                                <li><a href="/prdts">Products</a></li>
                                                <li><a href="/shop-products-sidebar">Products with Sidebar</a></li>
                                                <li><a href="/shop-product-details">Product Details</a></li>
                                                <li><a href="/shop-cart">Cart</a></li>
                                                <li><a href="/shop-checkout">Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown"><a href="#">News</a>
                                            <ul>
                                                <li><a href="/news-grid">News Grid</a></li>
                                                <li><a href="/news-details">News Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/page-contact">Contact</a></li>
                                        {isLoggedIn ? (
                                            <li className="dropdown">
                                                <a href="#">{userName}</a>
                                                <ul>
                                                    <li><a href="/profile">View Profile</a></li>
                                                    <li><a href="/" onClick={handleLogout}>Logout</a></li>
                                                </ul>
                                            </li>
                                        ) : (
                                            <li>
                                                <a href="/login">Login</a>
                                            </li>
                                        )}
                                    </ul>

                                </nav>
                                {/* Main Menu End*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><a href="/"><img src="/assets/images/logo.png" alt="" title="Fesho" /></a></div>
                            <div className="close-btn"><i className="icon fa fa-times" /></div>
                        </div>
                        <ul className="navigation clearfix">{/*Keep This Empty / Menu will come through Javascript*/}</ul>
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <a href="tel:+92880098670">+92 (8800) - 98670</a>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <a href="mailto:help@company.com">help@company.com</a>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="#"><i className="fab fa-pinterest" /></a></li>
                            <li><a href="#"><i className="fab fa-instagram" /></a></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search"><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input type="search" name="search-field" defaultValue placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <a href="/" ><img src="/assets/images/logo-2.png" alt="" /></a>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <ul className="navigation clearfix">
                                            <li className="current dropdown"><a href="/">Home</a>
                                                <ul>
                                                    <li><a href="/">Home page 01</a></li>
                                                    <li><a href="/">Home page 02</a></li>
                                                    <li className="dropdown"><a href="#">Header Styles</a>
                                                        <ul>
                                                            <li><a href="/">Header Style One</a></li>
                                                            <li><a href="/">Header Style Two</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="dropdown"><a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="/page-about">About</a></li>
                                                    <li className="dropdown"><a href="#">Services</a>
                                                        <ul>
                                                            <li><a href="/page-services">Services List</a></li>
                                                            <li><a href="/page-service-details">Service Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="#">Team</a>
                                                        <ul>
                                                            <li><a href="/page-team">Team List</a></li>
                                                            <li><a href="/page-team-details">Team Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/page-testimonial">Testimonial</a></li>
                                                    <li><a href="/page-faq">FAQ</a></li>
                                                    <li><a href="/page-404">Page 404</a></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown"><a href="#">Shop</a>
                                                <ul>
                                                    <li><a href="/prdts">Products</a></li>
                                                    <li><a href="/shop-products-sidebar">Products with Sidebar</a></li>
                                                    <li><a href="/shop-product-details">Product Details</a></li>
                                                    <li><a href="/shop-cart">Cart</a></li>
                                                    <li><a href="/shop-checkout">Checkout</a></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown"><a href="#">News</a>
                                                <ul>
                                                    <li><a href="/news-grid">News Grid</a></li>
                                                    <li><a href="/news-details">News Details</a></li>
                                                </ul>
                                            </li>

                                            <li><a href="/page-contact">Contact</a></li>
                                        </ul>

                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler"><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header>
            {/*End Main Header */}
        </div>
    )
}

export default HeaderSection
