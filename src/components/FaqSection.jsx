import React from 'react'

const FaqSection = () => {
  return (
    <div>
      {/* FAQ Section */}
                <section className="faqs-section">
                    <div className="auto-container">
                        <div className="anim-icons">
                            <span className="bg-pattern-left" />
                            <span className="bg-pattern-right" />
                        </div>
                        <div className="row">
                            {/* FAQ Column */}
                            <div className="faq-column col-lg-7 col-md-12 col-sm-12 order-4">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="title">Frequently Asked Questions</span>
                                        <h2>You’ve Any Question?</h2>
                                        <span className="divider" />
                                    </div>
                                    <ul className="accordion-box">
                                        {/*Block*/}
                                        <li className="accordion block ">
                                            <div className="acc-btn">How long does medical cannabis treatment take? <div className="icon fa fa-angle-right" />
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus many of some form.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Block*/}
                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">How long does medical cannabis treatment take?<div className="icon fa fa-angle-right" />
                                            </div>
                                            <div className="acc-content current">
                                                <div className="content">
                                                    <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus many of some form.</div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Block*/}
                                        <li className="accordion block">
                                            <div className="acc-btn">How long does medical cannabis treatment take?
                                                <div className="icon fa fa-angle-right" />
                                            </div>
                                            <div className="acc-content">
                                                <div className="content">
                                                    <div className="text">Suspendisse finibus urna mauris, vitae consequat quam vel. ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi. Pellentesque est metus many of some form.</div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Image Column */}
                            <div className="image-column col-lg-5 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <figure className="image"><img src="/assets/images/resource/faq.jpg" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End FAQ Section */}
    </div>
  )
}

export default FaqSection
