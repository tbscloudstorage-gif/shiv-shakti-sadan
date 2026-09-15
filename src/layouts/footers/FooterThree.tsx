// import { Link } from "react-router-dom";

export default function FooterThree() {
  return (
    <>
      <footer>

        {/* <!-- footer-area-start --> */}
        <section className="it-footer-wrap it-footer-style-2 fix">
          <div className="it-footer-area z-index-1 pt-200 pb-80" style={{backgroundImage: `url(/assets/img/shape/footer-bg-3-1.jpg)`}}>
            <img className="it-footer-shape-1 d-none d-xxl-block" src="assets/img/shape/footer-3-1.png" alt="" />
            <img className="it-footer-shape-2" data-parallax='{"y": -200, "smoothness": 30}' src="assets/img/shape/footer-3-2.png" alt="" />
            <div className="it-footer-border"><span></span></div>
            <div className="container-fluid d-flex justify-content-center">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">About Us</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="/">Introduction</a></li>
                        <li><a href="/about-us-v1">Infrastructure
</a></li>
                        <li><a href="/event-grid">Affiliations</a></li>
                        <li><a href="blog-grid">Awards & Honors
</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              
               <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">Academics</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="/">School Rules</a></li>
                        <li><a href="/about-us-v1">List of Books & Stationery</a></li>
                        <li><a href="/event-grid">Assessment Promotion</a></li>
                        <li><a href="blog-grid">Results</a></li>
                        <li><a href="contact-us">Academic Calender</a></li>
                                                <li><a href="contact-us">Student Council</a></li>

                      </ul>
                    </div>
                  </div>
                </div>
                 <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">Community</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="/">Parents Connect</a></li>
                        <li><a href="/about-us-v1">Portals</a></li>
                        <li><a href="/event-grid">Alumni</a></li>
                        <li><a href="blog-grid">Vendor</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                 <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">News & Event</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="/">Newsfeed</a></li>
                        <li><a href="/about-us-v1">Upcoming Event</a></li>
                        <li><a href="/event-grid">Festival of the year</a></li>
                        <li><a href="blog-grid">Magazine</a></li>
                                                <li><a href="blog-grid">Media Coverage</a></li>

                      </ul>
                    </div>
                  </div>
                </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">Admissions</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="/">Fee Structure</a></li>
                        <li><a href="/about-us-v1">Transport Facility</a></li>
                        <li><a href="/event-grid">FAQs</a></li>
                        <li><a href="blog-grid">Apply Now</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">Contact US</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/about-us-v1">Apply Now</a></li>
                        <li><a href="/event-grid">Careers</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- copyright-area-start --> */}
          <div className="it-copyright-area it-copyright-ptb it-copyright-bg z-index-1 theme-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="it-copyright-left style-2 text-center">
                    <p className="mb-0">Copyright © {new Date().getFullYear()} <a href="#">Shiva Shiksha Sadan</a> All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- copyright-area-end --> */}

        </section>
        {/* <!-- footer-area-end --> */}

      </footer>
    </>
  )
}
