import React from 'react'

const BannerSection = () => {
  return (
    <div>
      {/* Banners Section */}
                <section className="banners-section pt-0">
                    <div className="large-container">
                        <div className="row">
                            {/* Banner Box One */}
                            <div className="banner-box-one col">
                                <div className="inner-box overlay-anim">
                                    <div className="image"><img src="/assets/images/resource/top-banner-1.jpg" alt="" /></div>
                                    <div className="content">
                                        <span className="title">100% Organic</span>
                                        <h3>Quality <br />CBD Store</h3>
                                        <a href="shop-products.html" className="theme-btn btn-style-one">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Banner Box One */}
                            <div className="banner-box-two col">
                                <div className="inner-box overlay-anim">
                                    <div className="image"><img src="/assets/images/resource/top-banner-2.jpg" alt="" /></div>
                                    <div className="content">
                                        <h3>50%</h3>
                                        <span className="title">Off on all Organic <br />Oil Products</span>
                                        <a href="shop-products.html" className="theme-btn btn-style-three">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Banner Box One */}
                            <div className="banner-box-three col">
                                <div className="inner-box overlay-anim">
                                    <div className="image"><img src="/assets/images/resource/top-banner-3.jpg" alt="" /></div>
                                    <div className="content">
                                        <span className="title">100% Organic</span>
                                        <h3>Marijuana <br />Products</h3>
                                        <a href="shop-products.html" className="theme-btn btn-style-one">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Banners Section */}
    </div>
  )
}

export default BannerSection
