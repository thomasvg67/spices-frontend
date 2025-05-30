import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceSection = () => {
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const services = [
    {
      id: 1,
      title: "Dispensary",
      img: "/assets/images/resource/service-1.jpg",
      iconClass: "flaticon-cannabis-Marijuana2",
      description: "There are many lipsum of available but the have in that not some.",
    },
    {
      id: 2,
      title: "Flowers",
      img: "/assets/images/resource/service-2.jpg",
      iconClass: "flaticon-cannabis-Marijuana",
      description: "There are many lipsum of available but the have in that not some.",
    },
    {
      id: 3,
      title: "CBD Oil",
      img: "/assets/images/resource/service-3.jpg",
      iconClass: "flaticon-cannabis-tincture",
      description: "There are many lipsum of available but the have in that not some.",
    },
    {
      id: 4,
      title: "Edibles",
      img: "/assets/images/resource/service-4.jpg",
      iconClass: "flaticon-cannabis-medicine1",
      description: "There are many lipsum of available but the have in that not some.",
    },
  ];

  return (
    <section className="services-section pull-up">
      <div className="auto-container">
        <Slider {...settings}>
          {services.map(({ id, title, img, iconClass, description }) => (
            <div key={id} className="service-block">
              <div className="inner-box">
                <figure className="image"><img src={img} alt={title} /></figure>
                <div className="content">
                  <h4>{title}</h4>
                  <div className={`icon ${iconClass}`} />
                </div>
                <div className="overlay-content">
                  <div className={`icon ${iconClass}`} />
                  <h4><a href="page-service-details.html">{title}</a></h4>
                  <div className="text">{description}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default ServiceSection
