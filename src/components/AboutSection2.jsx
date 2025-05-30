import React from "react";
import CountUp from "react-countup";

const AboutSection2 = () => {
  return (
    <div>
      {/* About Section Two */}
      <section className="about-section-two" style={{ backgroundImage: 'url(images/background/2.jpg)' }}>
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInRight">
                <div className="sec-title light">
                  <span className="sub-title">Get to Know Dispensary</span>
                  <h2>CBD Natural Essential Relaxation</h2>
                  <span className="divider" />
                </div>
                <div className="row g-0">
                  <div className="about-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <span className="icon flaticon-cannabis-Marijuana1" />
                      <span className="title">Our Benefits</span>
                      <h5>Marijuana Removes Headache</h5>
                    </div>
                  </div>
                  <div className="about-block col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <span className="icon flaticon-cannabis-heart-rate" />
                      <span className="title">Our Benefits</span>
                      <h5>Cannabis Relieves Pain</h5>
                    </div>
                  </div>
                </div>
                <div className="text">
                  Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibu dignissim
                  posuere cubilia.
                </div>
                <a href="shop-products.html" className="theme-btn btn-style-one">shop now</a>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <figure className="image" data-wow-delay="300ms">
                  <img src="/assets/images/resource/image-1.png" alt="" />
                </figure>
                <div className="fact-counter-one bounce-y">
                  <h4 className="counter-title">Trusted by</h4>
                  <div className="count-box">
                    <CountUp end={4890} duration={3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section Two */}
    </div>
  );
};

export default AboutSection2;
