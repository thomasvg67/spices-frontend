import React from 'react'

const AboutSection = () => {
  return (
    <div>
       {/* About Section */}
                <section className="about-section">
                    <div className="auto-container">
                        <div className="row">
                            {/* Image Column */}
                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="about-image-wrapper">
                                    <figure className="bg-shape zoom-one" data-wow-delay="600ms"><img src="/assets/images/icons/object-1.png" alt="" /></figure>
                                    <figure className="image-1" data-wow-delay="300ms"><img src="/assets/images/resource/about-img-1.png" alt="" /></figure>
                                    <figure className="image-2 wow zoomIn" data-wow-delay="900ms"><img src="/assets/images/resource/about-img-2.png" alt="" /></figure>
                                </div>
                            </div>
                            {/* Content Column */}
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInRight">
                                    <div className="sec-title">
                                        <span className="sub-title">Get to Know Dispensary</span>
                                        <h2>We’re Using Quality Products</h2>
                                        <span className="divider" />
                                        <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form.</div>
                                    </div>
                                    <div className="info-box">
                                        <ul className="list-style-one">
                                            <li>Nsectetur cing elit.</li>
                                            <li>Suspe ndisse suscipit sagittis leo.</li>
                                            <li>Entum estibulum digni posuere.</li>
                                            <li>Donec tristique ante dictum oncus.</li>
                                        </ul>
                                        <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-image video-box">
                                            <img src="/assets/images/resource/video-img.jpg" alt="" />
                                            <span className="icon fa fa-play" />
                                        </a>
                                    </div>
                                    <a href="/shop-products" className="theme-btn btn-style-one">shop now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End About Section */}
    </div>
  )
}

export default AboutSection
