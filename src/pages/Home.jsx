import React from 'react'
import HeaderSection from '../components/HeaderSection'
import ServiceSection from '../components/ServiceSection'
import AboutSection from '../components/AboutSection'
import ProductSection from '../components/ProductSection'
import BannerSection from '../components/BannerSection'
import FaqSection from '../components/FaqSection'
import TestimonialSection from '../components/TestimonialSection'
import AboutSection2 from '../components/AboutSection2'
import NewsSection from '../components/NewsSection'
import ClientSection from '../components/ClientSection'
import FooterSection from '../components/FooterSection'


const Home = () => {
    
    return (
        <div>
            <div className="page-wrapper">
                {/* Preloader */}
                <div className="preloader" />
                <HeaderSection />
                {/*Main Slider*/}
                <section className="main-slider">
                    <div className="rev_slider_wrapper fullwidthbanner-container" id="rev_slider_one_wrapper" data-source="gallery">
                        <div className="rev_slider fullwidthabanner" id="rev_slider_one" data-version="5.4.1">
                            <ul>
                                {/* Slide 1 */}
                                <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-thumb data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    {/* MAIN IMAGE */}
                                    <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax={20} data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina src="/assets/images/main-slider/bg-1.jpg" />
                                    <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="auto" data-whitespace="nowrap" data-width="none" data-hoffset="['485','500','320','320']" data-voffset="['-215','-215','-190','-200']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <figure className="object"><img src="/assets/images/main-slider/icon/object-1.png" alt="" /></figure>
                                    </div>
                                    <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="auto" data-whitespace="nowrap" data-width="none" data-hoffset="['240','240','270','270']" data-voffset="['120','120','80','80']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <figure className="object"><img src="/assets/images/main-slider/icon/object-2.png" alt="" /></figure>
                                    </div>
                                    <div className="tp-caption" data-paddingbottom="[15,15,15,15]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['750','750','750','650']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-100','-100','-110','-120']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <h2>Best Medical <br /> Marijuana Store</h2>
                                    </div>
                                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['540','750','440','380']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['40','40','0','0']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <div className="text">There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form.</div>
                                    </div>
                                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','750','700','700']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['140','140','100','110']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <div className="btn-box">
                                            <a href="shop-products.html" className="theme-btn btn-style-one"><span className="btn-title">Shop Now</span></a>
                                        </div>
                                    </div>
                                </li>
                                {/* Slide 2 */}
                                <li data-index="rs-2" data-transition data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={300} data-thumb data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                    {/* MAIN IMAGE */}
                                    <img alt="" className="rev-slidebg" data-bgfit="cover" data-bgparallax={20} data-bgposition="center center" data-bgrepeat="no-repeat" data-no-retina src="/assets/images/main-slider/bg-2.jpg" />
                                    <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="auto" data-whitespace="nowrap" data-width="none" data-hoffset="['485','500','320','320']" data-voffset="['-215','-215','-190','-200']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <figure className="object"><img src="/assets/images/main-slider/icon/object-1.png" alt="" /></figure>
                                    </div>
                                    <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme big-ipad-hidden rs-parallaxlevel-1" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="shape" data-height="auto" data-whitespace="nowrap" data-width="none" data-hoffset="['240','240','270','270']" data-voffset="['120','120','80','80']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <figure className="object"><img src="/assets/images/main-slider/icon/object-2.png" alt="" /></figure>
                                    </div>
                                    <div className="tp-caption" data-paddingbottom="[15,15,15,15]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['750','750','750','650']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['-100','-100','-110','-120']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <h2>Best Medical <br /> Marijuana Store</h2>
                                    </div>
                                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[0,0,0,0]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['540','750','440','380']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['40','40','0','0']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <div className="text">There are many of passages of lorem Ipsum, but the majori have suffered alt=""eration in some
                                            form.</div>
                                    </div>
                                    <div className="tp-caption" data-paddingbottom="[0,0,0,0]" data-paddingleft="[15,15,15,15]" data-paddingright="[15,15,15,15]" data-paddingtop="[0,0,0,0]" data-responsive_offset="on" data-type="text" data-height="none" data-width="['700','750','700','700']" data-whitespace="normal" data-hoffset="['0','0','0','0']" data-voffset="['140','140','100','110']" data-x="['left','left','left','left']" data-y="['middle','middle','middle','middle']" data-textalign="['top','top','top','top']" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]">
                                        <div className="btn-box">
                                            <a href="shop-products.html" className="theme-btn btn-style-one"><span className="btn-title">Shop Now</span></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* End Main Slider*/}
                <ServiceSection />
                <AboutSection />
                <ProductSection />
                <BannerSection />
                {/* Video Section */}
                <section className="video-section" style={{ backgroundImage: 'url(/assets/images/background/1.jpg)' }}>
                    <div className="auto-container">
                        <div className="content-box">
                            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="play-now" data-fancybox="gallery" data-caption><i className="icon fa fa-play" aria-hidden="true" /><span className="ripple" /></a>
                            <h2><span className="with-icons">Get Always Fresh</span> <br />&amp; Organic Cannabis Oil</h2>
                        </div>
                    </div>
                </section>
                {/*End Video Section */}
                <FaqSection />
                <TestimonialSection />
                <AboutSection2 />
                <NewsSection />
                <ClientSection />
                {/* Main Footer */}
                <FooterSection />
                {/*End Main Footer */}
            </div>{/* End Page Wrapper */}
            {/* Scroll To Top */}
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="fa fa-angle-up" /></div>
            {/*Revolution Slider*/}
            {/*Revolution Slider*/}
        </div>
    )
}

export default Home
