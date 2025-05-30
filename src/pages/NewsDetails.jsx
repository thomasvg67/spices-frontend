import React from 'react'
import HeaderSection from '../components/HeaderSection'

const NewsDetails = () => {
    return (
        <div>
            <div className="page-wrapper">
                {/* Preloader */}
                <div className="preloader" />
                {/* Main Header*/}
                <HeaderSection cartCount={cartCount} wishlistCount={wishlistCount} />
                {/*End Main Header */}
                {/* Start main-content */}
                <section className="page-title" style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}>
                    <div className="auto-container">
                        <div className="title-outer">
                            <h1 className="title">News Details</h1>
                            <ul className="page-breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li>News</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* end main-content */}
                {/*Blog Details Start*/}
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="blog-details__left">
                                    <div className="blog-details__img">
                                        <img src="/assets/images/resource/news-details.jpg" alt="" />
                                        <div className="blog-details__date">
                                            <span className="day">28</span>
                                            <span className="month">Aug</span>
                                        </div>
                                    </div>
                                    <div className="blog-details__content">
                                        <ul className="list-unstyled blog-details__meta">
                                            <li><a href="news-details.html"><i className="fas fa-user-circle" /> Admin</a> </li>
                                            <li><a href="news-details.html"><i className="fas fa-comments" /> 02
                                                Comments</a>
                                            </li>
                                        </ul>
                                        <h3 className="blog-details__title">Here's How Marijuana Affects Your Body</h3>
                                        <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
                                            amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                            nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
                                            interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                                            pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                        </p>
                                        <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
                                            amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                            nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
                                            interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                                            pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                        </p>
                                        <p className="blog-details__text-2">Mauris non dignissim purus, ac commodo diam. Donec sit
                                            amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus
                                            nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus
                                            interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                                            pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                                        </p>
                                    </div>
                                    <div className="blog-details__bottom">
                                        <p className="blog-details__tags"> <span>Tags</span> <a href="news-details.html">Agriculture</a> <a href="news-details.html">Farm</a> </p>
                                        <div className="blog-details__social-list"> <a href="news-details.html"><i className="fab fa-twitter" /></a> <a href="news-details.html"><i className="fab fa-facebook" /></a> <a href="news-details.html"><i className="fab fa-pinterest-p" /></a> <a href="news-details.html"><i className="fab fa-instagram" /></a> </div>
                                    </div>
                                    <div className="nav-links">
                                        <div className="prev">
                                            <a href="news-details.html" rel="prev">True factors of the modern healt=""hy lifestyle</a>
                                        </div>
                                        <div className="next">
                                            <a href="news-details.html" rel="next">How to lead a healt=""hy &amp; well-balanced life</a>
                                        </div>
                                    </div>
                                    <div className="comment-one">
                                        <h3 className="comment-one__title">2 Comments</h3>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image"> <img src="/assets/images/resource/testi-thumb-1.jpg" alt="" /> </div>
                                            <div className="comment-one__content">
                                                <h3>Kevin Martin</h3>
                                                <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                                                    Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla,
                                                    sollicitudin at euismod.
                                                </p>
                                                <a href="news-details.html" className="theme-btn btn-style-one comment-one__btn"><span className="btn-title">Reply</span></a>
                                            </div>
                                        </div>
                                        <div className="comment-one__single">
                                            <div className="comment-one__image"> <img src="/assets/images/resource/testi-thumb-2.jpg" alt="" /> </div>
                                            <div className="comment-one__content">
                                                <h3>Sarah Albert</h3>
                                                <p>Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla.
                                                    Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla,
                                                    sollicitudin at euismod.
                                                </p>
                                                <a href="news-details.html" className="theme-btn btn-style-one comment-one__btn"><span className="btn-title">Reply</span></a>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <h3 className="comment-form__title">Leave a Comment</h3>
                                            <form id="contact_form" name="contact_form" className action="https://kodesolution.com/html/2022/narioz-html/includes/sendmail.php" method="post">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="mb-3">
                                                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <textarea name="form_message" className="form-control required" rows={5} placeholder="Enter Message" defaultValue={""} />
                                                </div>
                                                <div className="mb-3">
                                                    <input name="form_botcheck" className="form-control" type="hidden" defaultValue />
                                                    <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Submit Comment</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="sidebar">
                                    <div className="sidebar__single sidebar__search">
                                        <form action="#" className="sidebar__search-form">
                                            <input type="search" placeholder="Search here" />
                                            <button type="submit"><i className="lnr-icon-search" /></button>
                                        </form>
                                    </div>
                                    <div className="sidebar__single sidebar__post">
                                        <h3 className="sidebar__title">Latest Posts</h3>
                                        <ul className="sidebar__post-list list-unstyled">
                                            <li>
                                                <div className="sidebar__post-image"> <img src="/assets/images/resource/news-1.jpg" alt="" /> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle" />Admin</span> <a href="news-details.html">The Study Cannabis Medicine</a>
                                                    </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image"> <img src="/assets/images/resource/news-2.jpg" alt="" /> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle" />Admin</span> <a href="news-details.html">The Modern Healt=""hy Lifestyle</a> </h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__post-image"> <img src="/assets/images/resource/news-3.jpg" alt="" /> </div>
                                                <div className="sidebar__post-content">
                                                    <h3> <span className="sidebar__post-content-meta"><i className="fas fa-user-circle" />Admin</span> <a href="news-details.html">Under The Canadian Cannabis Act</a> </h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__single sidebar__category">
                                        <h3 className="sidebar__title">Categories</h3>
                                        <div className="news-categories">
                                            <ul>
                                                <li><a href="news-details.html"><i className="lnr-icon-arrow-right" />CBD Oil<span>[04]</span></a></li>
                                                <li><a href="news-details.html"><i className="lnr-icon-arrow-right" />Plant<span>[10]</span></a></li>
                                                <li><a href="news-details.html"><i className="lnr-icon-arrow-right" />Medicine<span>[06]</span></a></li>
                                                <li><a href="news-details.html"><i className="lnr-icon-arrow-right" />Marijuana<span>[08]</span></a></li>
                                                <li><a href="news-details.html"><i className="lnr-icon-arrow-right" />Cannabis<span>[02]</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar__single sidebar__tags">
                                        <h3 className="sidebar__title">Tags</h3>
                                        <div className="sidebar__tags-list"> <a href="#">Cannabis</a> <a href="#">Flowers</a> <a href="#">Marijuana</a> <a href="#">Medical</a> <a href="#">Medicine</a> <a href="#">Plant</a> </div>
                                    </div>
                                    <div className="sidebar__single sidebar__comments">
                                        <h3 className="sidebar__title">Recent Comments</h3>
                                        <ul className="sidebar__comments-list list-unstyled">
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-comments" /> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>A wordpress commenter on <br />
                                                        launch new mobile app
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-comments" /> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p> <span>John Doe</span> on template:</p>
                                                    <h5>comments</h5>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-comments" /> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p>A wordpress commenter on <br />
                                                        launch new mobile app
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="sidebar__comments-icon"> <i className="fas fa-comments" /> </div>
                                                <div className="sidebar__comments-text-box">
                                                    <p> <span>John Doe</span> on template:</p>
                                                    <h5>comments</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Blog Details End*/}
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
                                                        <input type="email" name="email" className="email"  placeholder="Email Address" required />
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

export default NewsDetails
