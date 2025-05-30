import React from 'react'
import HeaderSection from '../components/HeaderSection'

const Team = () => {
  return (
    <div>
      <div className="page-wrapper">
  {/* Preloader */}
  <div className="preloader" />
  {/* Main Header*/}	
  <HeaderSection />
  {/*End Main Header */}
  {/* Start main-content */}
  <section className="page-title" style={{backgroundImage: 'url(/assets/images/background/6.jpg)'}}>
    <div className="auto-container">
      <div className="title-outer">
        <h1 className="title">Team Grid</h1>
        <ul className="page-breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li>Team</li>
        </ul>
      </div>
    </div>
  </section>
  {/* end main-content */}
  {/* Team Section */}
  <section className>
    <div className="container pb-60">
      <div className="row">
        {/* Team block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><a href="page-team-details.html"><img src="/assets/images/resource/team-1.jpg" alt="" /></a></figure>
            </div>
            <div className="info-box">
              <h5 className="name"><a href="page-team-details.html">Kevin Hardson</a></h5>
              <span className="designation">designer</span>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-pinterest-p" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Team block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><a href="page-team-details.html"><img src="/assets/images/resource/team-2.jpg" alt="" /></a></figure>
            </div>
            <div className="info-box">
              <h5 className="name"><a href="page-team-details.html">Jessica Brown</a></h5>
              <span className="designation">developer</span>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-pinterest-p" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        {/* Team block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><a href="page-team-details.html"><img src="/assets/images/resource/team-3.jpg" alt="" /></a></figure>
            </div>
            <div className="info-box">
              <h5 className="name"><a href="page-team-details.html">michale smith</a></h5>
              <span className="designation">co founder</span>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-pinterest-p" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Team Section */}
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
                      <input type="email" name="email" className="email" defaultValue placeholder="Email Address" required />
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

export default Team
