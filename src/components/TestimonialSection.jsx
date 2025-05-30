import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      img: "/assets/images/resource/testi-thumb-1.jpg",
      text: "I was very impresed by the osfins service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum.",
      name: "Jessica Brown",
      designation: "Customer",
    },
    {
      id: 2,
      img: "/assets/images/resource/testi-thumb-2.jpg",
      text: "I was very impresed by the osfins service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum.",
      name: "Jessica Brown",
      designation: "Customer",
    },
    {
      id: 3,
      img: "/assets/images/resource/testi-thumb-3.jpg",
      text: "I was very impresed by the osfins service lorem ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum.",
      name: "Jessica Brown",
      designation: "Customer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // or 3 depending on your design
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="testimonial-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <span className="sub-title">Our Customers Feedbacks</span>
          <h2>What They’re Talking</h2>
          <span className="divider" />
        </div>
        <div className="outer-box">
          <Slider {...settings}>
            {testimonials.map(({ id, img, text, name, designation }) => (
              <div key={id} className="testimonial-block">
                <div className="inner-box">
                  <div className="thumb">
                    <img src={img} alt={name} />
                    <span className="icon fa fa-quote-left" />
                  </div>
                  <div className="text">{text}</div>
                  <h4 className="name">{name}</h4>
                  <span className="designation">{designation}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;