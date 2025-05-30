import React from 'react'

const NewsSection = () => {
  return (
    <div>
      {/* News Section */}
                <section className="news-section">
                    <div className="auto-container">
                        <div className="sec-title text-center">
                            <span className="sub-title">From the Blog</span>
                            <h2>News &amp; Articles</h2>
                            <span className="divider" />
                        </div>
                        <div className="row">
                            {/* News Block */}
                            <div className="news-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <span className="date">25 Jul</span>
                                    <div className="image-box">
                                        <figure className="image"><a href="news-details.html"><img src="/assets/images/resource/news-1.jpg" alt="" /></a></figure>
                                    </div>
                                    <div className="lower-content">
                                        <ul className="post-info">
                                            <li><i className="fa fa-folder" /> Marijuana</li>
                                            <li><i className="fa fa-comments" /> 02 Comments</li>
                                        </ul>
                                        <h4><a href="news-details.html">How to lead a healt=""hy &amp; well-balanced life</a></h4>
                                        <div className="author">
                                            <figure className="thumb"><img src="/assets/images/resource/author-thumb-1.jpg" alt="" /></figure>
                                            <h5 className="name">by <a href="news-details.html">Mike Hardson</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* News Block */}
                            <div className="news-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <span className="date">25 Jul</span>
                                    <div className="image-box">
                                        <figure className="image"><a href="news-details.html"><img src="/assets/images/resource/news-2.jpg" alt="" /></a></figure>
                                    </div>
                                    <div className="lower-content">
                                        <ul className="post-info">
                                            <li><i className="fa fa-folder" /> Marijuana</li>
                                            <li><i className="fa fa-comments" /> 02 Comments</li>
                                        </ul>
                                        <h4><a href="news-details.html">Legalization of marijuana for medicinal use</a></h4>
                                        <div className="author">
                                            <figure className="thumb"><img src="/assets/images/resource/author-thumb-1.jpg" alt="" /></figure>
                                            <h5 className="name">by <a href="news-details.html">Mike Hardson</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* News Block */}
                            <div className="news-block col-lg-4 col-md-6 col-sm-12">
                                <div className="inner-box">
                                    <span className="date">25 Jul</span>
                                    <div className="image-box">
                                        <figure className="image"><a href="news-details.html"><img src="/assets/images/resource/news-3.jpg" alt="" /></a></figure>
                                    </div>
                                    <div className="lower-content">
                                        <ul className="post-info">
                                            <li><i className="fa fa-folder" /> Marijuana</li>
                                            <li><i className="fa fa-comments" /> 02 Comments</li>
                                        </ul>
                                        <h4><a href="news-details.html">True factors of the modern healt=""hy lifestyle</a></h4>
                                        <div className="author">
                                            <figure className="thumb"><img src="/assets/images/resource/author-thumb-1.jpg" alt="" /></figure>
                                            <h5 className="name">by <a href="news-details.html">Mike Hardson</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End News Section */}
    </div>
  )
}

export default NewsSection
