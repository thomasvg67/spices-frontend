import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 }},
      { breakpoint: 600, settings: { slidesToShow: 2 }},
      { breakpoint: 480, settings: { slidesToShow: 1 }},
    ]
  };

  return (
    <section className="clients-section style-two">
      <div className="auto-container">
        <div className="anim-icons">
          <span className="icon-leaf leaf-1" />
        </div>
        <div className="sponsors-outer">
          <Slider {...settings}>
            {Array(6).fill().map((_, index) => (
              <div key={index} className="slide-item">
                <a href="#" onClick={e => e.preventDefault()}>
                  <img src="/assets/images/resource/client.png" alt={`Client ${index + 1}`} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;