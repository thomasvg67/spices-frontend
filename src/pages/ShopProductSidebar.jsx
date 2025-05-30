import React from 'react'
import HeaderSection from '../components/HeaderSection'

const ShopProductSidebar = () => {
    return (
        <div>
            <div className="page-wrapper">
                {/* Preloader */}
                <div className="preloader" />
                {/* Main Header*/}
                <HeaderSection />
                {/*End Main Header */}
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
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="shop-sidebar">
                                    <div className="sidebar-search">
                                        <form action="https://kodesolution.com/html/2022/narioz-html/shop-products.html" method="post" className="search-form">
                                            <div className="form-group">
                                                <input type="search" name="search-field" placeholder="Search..." required />
                                                <button><i className="lnr lnr-icon-search" /></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="sidebar-widget category-widget">
                                        <div className="widget-title">
                                            <h5 className="widget-title">Categories</h5>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><a href="shop-product-details.html">CBD Oil</a></li>
                                                <li><a href="shop-product-details.html">Plant</a></li>
                                                <li><a href="shop-product-details.html">Medicine</a></li>
                                                <li><a href="shop-product-details.html">Marijuana</a></li>
                                                <li><a href="shop-product-details.html">Cannabis</a></li>
                                                <li><a href="shop-product-details.html">Organic</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget price-filters">
                                        <div className="widget-title">
                                            <h5 className="widget-title">Filter by Price</h5>
                                        </div>
                                        <div className="range-slider clearfix">
                                            <div className="price-range-slider" />
                                            <div className="clearfix">
                                                <p>Price:</p>
                                                <div className="title" />
                                                <div className="input"><input type="text" className="property-amount" name="field-name" readOnly /></div>
                                                <input type="submit" defaultValue="Filter" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget post-widget">
                                        <div className="widget-title">
                                            <h5 className="widget-title">Popular Products</h5>
                                        </div>
                                        <div className="post-inner">
                                            <div className="post">
                                                <figure className="post-thumb"><a href="shop-details.html"><img src="/assets/images/resource/products/thumb-1.jpg" alt="" /></a></figure>
                                                <a href="shop-product-details.html">CBD Oil Bottle</a>
                                                <span className="price">$45.00</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><a href="shop-details.html"><img src="/assets/images/resource/products/thumb-2.jpg" alt="" /></a></figure>
                                                <a href="shop-product-details.html">Tablets Pack</a>
                                                <span className="price">$34.00</span>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><a href="shop-details.html"><img src="/assets/images/resource/products/thumb-3.jpg" alt="" /></a></figure>
                                                <a href="shop-product-details.html">CBD Products</a>
                                                <span className="price">$29.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 content-side mt-md-60">
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
                                        {/*Product Block*/}
                                        <div className="product-block all mix CBD Canabis mb-50 col-lg-4 col-md-6 col-sm-12">
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
                                        <div className="product-block all mix Beverages Capsules CBD mb-50 col-lg-4 col-md-6 col-sm-12">
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
                                        <div className="product-block all mix Canabis Healthy Beverages mb-50 col-lg-4 col-md-6 col-sm-12">
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
                                        <div className="product-block all mix CBD Capsules Beverages mb-50 col-lg-4 col-md-6 col-sm-12">
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
                                                    <h4><a href="shop-product-details.html">Healt=""hy Tab</a></h4>
                                                    <span className="price">$23.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/*Product Block*/}
                                        <div className="product-block all mix Healthy Canabis CBD Capsules mb-50 col-lg-4 col-md-6 col-sm-12">
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
                                        <div className="product-block all mix Healthy Beverages mb-sm-50 col-lg-4 col-md-6 col-sm-12">
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
                                        <div className="product-block all mix Capsules Canabis mb-sm-50 col-lg-4 col-md-6 col-sm-12">
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
                                        <div className="product-block all mix Healthy CBD Canabis col-lg-4 col-md-6 col-sm-12">
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
                                                    <h4><a href="shop-product-details.html">Healt=""hy Tab</a></h4>
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
                {/* End Featured Products */}
                {/* Main Footer */}
                <footer className="main-footer">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="auto-container">
                            <div className="row">
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                                    <div className="footer-widget about-widget">
                                        <div className="logo"><a href="index.html"><img src="/assets/images/logo-3.png" alt="" /></a></div>
                                        <div className="text">Lorem ipsum dolor sit amet consect etur adi pisicing elit sed.</div>
                                        <ul className="contact-list">
                                            <li>
                                                <i className="fa fa-phone-square" />
                                                <a href="tel:+926668880000">+92 (003) 68-090</a>
                                            </li>
                                            <li>
                                                <i className="fa fa-envelope" />
                                                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                                            </li>
                                            <li>
                                                <i className="fa fa-map-marker" />
                                                666 road, broklyn street new york
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-2 col-md-6 col-sm-12">
                                    <div className="footer-widget">
                                        <h5 className="widget-title">Explore</h5>
                                        <ul className="user-links">
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">New Prducts</a></li>
                                            <li><a href="#">Get in Touch</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">FAQS</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                                    <div className="footer-widget gallery-widget">
                                        <h5 className="widget-title">Gallery</h5>
                                        <div className="widget-content">
                                            <div className="outer clearfix">
                                                <figure className="image">
                                                    <a href="/assets/images/gallery/1.html" className="lightbox-image" title="Image Title Here"><img src="/assets/images/resource/insta-1.jpg" alt="" /></a>
                                                </figure>
                                                <figure className="image">
                                                    <a href="/assets/images/gallery/2.html" className="lightbox-image" title="Image Title Here"><img src="/assets/images/resource/insta-2.jpg" alt="" /></a>
                                                </figure>
                                                <figure className="image">
                                                    <a href="/assets/images/gallery/3.html" className="lightbox-image" title="Image Title Here"><img src="/assets/images/resource/insta-3.jpg" alt="" /></a>
                                                </figure>
                                                <figure className="image">
                                                    <a href="/assets/images/gallery/4.html" className="lightbox-image" title="Image Title Here"><img src="/assets/images/resource/insta-4.jpg" alt="" /></a>
                                                </figure>
                                                <figure className="image">
                                                    <a href="/assets/images/gallery/5.html" className="lightbox-image" title="Image Title Here"><img src="/assets/images/resource/insta-5.jpg" alt="" /></a>
                                                </figure>
                                                <figure className="image">
                                                    <a href="/assets/images/gallery/1.html" className="lightbox-image" title="Image Title Here"><img src="/assets/images/resource/insta-6.jpg" alt="" /></a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Footer Column*/}
                                <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                                    <div className="footer-widget Newsletter-widget">
                                        <h5 className="widget-title">Newsletter</h5>
                                        <div className="widget-content">
                                            <div className="subscribe-form">
                                                <div className="text">Sign up now to get our daily latest news &amp; <br />updates from us</div>
                                                <form method="post" action="#">
                                                    <div className="form-group">
                                                        <input type="email" name="email" className="email" placeholder="Email Address" required />
                                                        <button type="button" className="theme-btn btn-style-one">GO</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Footer Bottom*/}
                    <div className="footer-bottom">
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="copyright-text">
                                    <p>© Copyright 2022 by <a href="index.html">Company.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*End Main Footer */}
            </div>{/* End Page Wrapper */}

        </div>
    )
}

export default ShopProductSidebar
