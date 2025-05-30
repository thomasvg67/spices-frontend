import React from 'react'
import HeaderSection from '../components/HeaderSection'

const TeamDetails = () => {
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
        <h1 className="title">Team Details</h1>
        <ul className="page-breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li>Team Details</li>
        </ul>
      </div>
    </div>
  </section>
  {/* end main-content */}
  {/*Team Details Start*/}
  <section className="team-details">
    <div className="container pb-100">
      <div className="team-details__top pb-70">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__top-left">
              <div className="team-details__top-img"> <img src="/assets/images/resource/team-details.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__top-right">
              <div className="team-details__top-content">
                <h3 className="team-details__top-name">Martin Hardson</h3>
                <p className="team-details__top-title">Managing Director &amp; CEO</p>
                <div className="team-details__social"> <a href="#"><i className="fab fa-twitter" /></a> <a href="#"><i className="fab fa-facebook" /></a> <a href="#"><i className="fab fa-pinterest-p" /></a> <a href="#"><i className="fab fa-instagram" /></a> </div>
                <p className="team-details__top-text-1">I help my clients stand out and <br /> they help me grow.</p>
                <p className="team-details__top-text-3">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae </p>
                <p className="team-details__top-text-2">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-details__bottom pt-100">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__bottom-left">
              <h4 className="team-details__bottom-left-title">Personal Experience</h4>
              <p className="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="team-details__bottom-right">
              <div className="team-details__progress">
                <div className="team-details__progress-single">
                  <h4 className="team-details__progress-title">Marketing</h4>
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="90%">
                      <div className="count-text">90%</div>
                    </div>
                  </div>
                </div>
                <div className="team-details__progress-single">
                  <h4 className="team-details__progress-title">Farming</h4>
                  <div className="bar">
                    <div className="bar-inner count-bar" data-percent="76%">
                      <div className="count-text">76%</div>
                    </div>
                  </div>
                </div>
                <div className="team-details__progress-single">
                  <h4 className="team-details__progress-title">Business</h4>
                  <div className="bar marb-0">
                    <div className="bar-inner count-bar" data-percent="60%">
                      <div className="count-text">60%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Team Details End*/} 
  {/*Contact Details Start*/}
  <section className="team-contact-form">
    <div className="container pb-100">
      <div className="sec-title text-center mb-50">
        <span className="sub-title">Contact With Us Now</span>
        <h2 className="section-title__title">Feel Free to Write</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Contact Form */}
          <form id="contact_form" name="contact_form"  action="https://kodesolution.com/html/2022/narioz-html/includes/sendmail.php" method="post">
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
            <div className="row">
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mb-3">
                  <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <textarea name="form_message" className="form-control required" rows={5} placeholder="Enter Message" defaultValue={""} />
            </div>
            <div className="mb-3 text-center">
              <input name="form_botcheck" className="form-control" type="hidden" defaultValue />
              <button type="submit" className="theme-btn btn-style-one" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
              <button type="reset" className="theme-btn btn-style-one"><span className="btn-title">Reset</span></button>
            </div>
          </form>
          {/* Contact Form Validation*/}
        </div>
      </div>
    </div>
  </section>
  {/*Contact Details End*/}
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

export default TeamDetails
