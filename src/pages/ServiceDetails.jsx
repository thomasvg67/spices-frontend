import React from 'react'
import HeaderSection from '../components/HeaderSection'

const ServiceDetails = () => {
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
        <h1 className="title">Service Details</h1>
        <ul className="page-breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  </section>
  {/* end main-content */}
  {/*Start Services Details*/}
  <section className="services-details">
    <div className="container">
      <div className="row">
        {/*Start Services Details Sidebar*/}
        <div className="col-xl-4 col-lg-4">
          <div className="service-sidebar">
            {/*Start Services Details Sidebar Single*/}
            <div className="sidebar-widget service-sidebar-single">
              <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                <div className="service-list">
                  <ul>
                    <li><a href="page-service-details.html" className="current"><i className="fas fa-angle-right" /><span>Dispensary</span></a></li>
                    <li><a href="page-service-details.html"><i className="fas fa-angle-right" /><span>Flowers</span></a></li>
                    <li><a href="page-service-details.html"><i className="fas fa-angle-right" /><span>CBD Oil</span></a></li>
                    <li><a href="page-service-details.html"><i className="fas fa-angle-right" /><span>Edibles</span></a></li>
                    <li><a href="page-service-details.html"><i className="fas fa-angle-right" /><span>Dispensary</span></a></li>
                    <li><a href="page-service-details.html"><i className="fas fa-angle-right" /><span>Flowers</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/*End Services Details Sidebar Single*/}
            <div className="sidebar-widget banner-widget">
              <div className="widget-content" style={{backgroundImage: 'url(/assets/images/resource/contact.jpg)'}}>
                <div className="shape" style={{backgroundImage: 'url(/assets/images/resource/overlay-shape.png)'}} />
                <div className="content-box">
                  <div className="icon-box">
                    <i className="lnr lnr-icon-pie-chart" />
                  </div>
                  <h3>Be healt=""hy &amp; eat only fresh</h3>
                  <a href="page-contact.html" className="theme-btn btn-style-one"><span className="btn-title"> Contact us</span></a>
                </div>
              </div>
            </div>
            {/*Start Services Details Sidebar Single*/}
            <div className="sidebar-widget service-sidebar-single mt-5">
              <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                <a href="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf" /> download pdf file</span></a>
              </div>
            </div>
            {/*End Services Details Sidebar Single*/}
          </div>
        </div>
        {/*End Services Details Sidebar*/}
        {/*Start Services Details Content*/}
        <div className="col-xl-8 col-lg-8">
          <div className="services-details__content">
            <img src="/assets/images/resource/service-details.jpg" alt="" />
            <h2 className="mt-4">Service Overview</h2>
            <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <div className="content">
              <div className="text">
                <h3>Service Center</h3>
                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              </div>
              <div className="feature-list">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle" /></div>
                      <h6 className="title">Fast home delivery</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle" /></div>
                      <h6 className="title">Secure Payments</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle" /></div>
                      <h6 className="title">Delivering best products</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle" /></div>
                      <h6 className="title">Food Inspections</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle" /></div>
                      <h6 className="title">Generator Systems</h6>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 column">
                    <div className="single-item">
                      <div className="icon-box"><i className="fas fa-check-circle" /></div>
                      <h6 className="title">Assessments</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div >
              <h3>Frequently Asked Question</h3>
              <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
              <ul className="accordion-box wow fadeInRight">
                {/*Block*/}
                <li className="accordion block">
                  <div className="acc-btn">Is my technology allowed on tech?
                    <div className="icon fa fa-plus" />
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">There are many variations of passages the majority have suffered alt=""eration in some fo injected humour, or randomised words believable.</div>
                    </div>
                  </div>
                </li>
                {/*Block*/}
                <li className="accordion block active-block">
                  <div className="acc-btn active">How to soft launch your business?
                    <div className="icon fa fa-plus" />
                  </div>
                  <div className="acc-content current">
                    <div className="content">
                      <div className="text">There are many variations of passages the majority have suffered alt=""eration in some fo injected humour, or randomised words believable.</div>
                    </div>
                  </div>
                </li>
                {/*Block*/}
                <li className="accordion block">
                  <div className="acc-btn">How to turn visitors into contributors
                    <div className="icon fa fa-plus" />
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">There are many variations of passages the majority have suffered alt=""eration in some fo injected humour, or randomised words believable.</div>
                    </div>
                  </div>
                </li>
                {/*Block*/}
                <li className="accordion block">
                  <div className="acc-btn">How can i find my solutions?
                    <div className="icon fa fa-plus" />
                  </div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">There are many variations of passages the majority have suffered alt=""eration in some fo injected humour, or randomised words believable.</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*End Services Details Content*/}
      </div>
    </div>
  </section>
  {/*End Services Details*/}
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

export default ServiceDetails
