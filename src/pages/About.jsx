import React from 'react'
import AboutSection from '../components/AboutSection'
import ClientSection from '../components/ClientSection'
import ProductSection from '../components/ProductSection'
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'

const About = () => {
    return (
        <div>
            <div className="page-wrapper">
                {/* Preloader */}
                <div className="preloader" />
                {/* Main Header*/}
                <HeaderSection />
                {/*End Main Header */}
                {/* Start main-content */}
                <section
                    className="page-title"
                    style={{ backgroundImage: 'url(/assets/images/background/6.jpg)' }}
                >
                    <div className="auto-container">
                        <div className="title-outer">
                            <h1 className="title">About Us</h1>
                            <ul className="page-breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* end main-content */}
                {/* About Section */}
                <AboutSection />

                {/* End About Section */}
                {/* Clients Section   */}
                <ClientSection />

                {/*End Clients Section */}
                {/* Why Choose Us */}
                <section className="why-choose-us">
                    <div className="large-container">
                        <div className="outer-box" style={{ backgroundImage: 'url(/assets/images/background/7.jpg)' }}>
                            <div className="auto-container">
                                <div className="row">
                                    {/* Image Column */}
                                    <div className="image-column col-xl-4 col-lg-4 col-md-12 col-sm-12 order-1">
                                        <div className="inner-column">
                                            <figure className="water"><img src="/assets/images/icons/water.png" alt="" /></figure>
                                            <figure className="image"><img src="/assets/images/resource/products/5.png" alt="" /></figure>
                                        </div>
                                    </div>
                                    {/* Features Column */}
                                    <div className="feature-column left-column col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                        <div className="inner-column">
                                            {/* Feature Block */}
                                            <div className="feature-block-two">
                                                <div className="inner-box">
                                                    <div className="icon-box"><span className="icon flaticon-cannabis-heart-rate" /></div>
                                                    <h4>Relieves Pain</h4>
                                                    <p>Lorem ipsum is simply free text are many of pass of majority</p>
                                                </div>
                                            </div>
                                            {/* Feature Block Two */}
                                            <div className="feature-block-two">
                                                <div className="inner-box">
                                                    <div className="icon-box"><span className="icon flaticon-cannabis-bored" /></div>
                                                    <h4>Increases Appetite</h4>
                                                    <p>Lorem ipsum is simply free text are many of pass of majority</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Features Column */}
                                    <div className="feature-column right-column col-xl-4 col-lg-4 col-md-6 col-sm-12 order-2">
                                        <div className="inner-column">
                                            {/* Feature Block */}
                                            <div className="feature-block-two">
                                                <div className="inner-box">
                                                    <div className="icon-box"><span className="icon flaticon-cannabis-slow" /></div>
                                                    <h4>Removes Headache</h4>
                                                    <p>Lorem ipsum is simply free text are many of pass of majority</p>
                                                </div>
                                            </div>
                                            {/* Feature Block Two */}
                                            <div className="feature-block-two">
                                                <div className="inner-box">
                                                    <div className="icon-box"><span className="icon flaticon-cannabis-sleep" /></div>
                                                    <h4>Fights Insomnia</h4>
                                                    <p>Lorem ipsum is simply free text are many of pass of majority</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* End Features Section Three */}
                {/* Products Section */}
                <ProductSection />
                {/* End Products Section */}
                {/* Main Footer */}
                <FooterSection />

                {/*End Main Footer */}
            </div>{/* End Page Wrapper */}

        </div>
    )
}

export default About
