import { Link } from "react-router-dom";

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
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".3s">
                  <div className="it-footer-widget it-footer-col-1-1">
                    <div className="it-footer-widget-logo mb-30">
                      <Link to="/"><img src="assets/img/logo/logo-black.png" alt="" /></Link>
                    </div>
                    <div className="it-footer-widget-text">
                      <p>Shiva Shiksha Sadan nurtures curious minds, strong values, and confident learners through holistic and meaningful education.
</p>
                    </div>
                    <div className="it-footer-widget-btn">
                      <Link to="/contact-us" className="it-btn-yellow theme-bg border-radius-100">
                        <span>
                          <span className="text-1">Contact Us</span>
                          <span className="text-2">Contact Us</span>
                        </span>
                        <i>
                          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0544 8.1364C15.4058 7.78492 15.4058 7.21508 15.0544 6.8636L9.3268 1.13604C8.97533 0.784567 8.40548 0.784567 8.05401 1.13604C7.70254 1.48751 7.70254 2.05736 8.05401 2.40883L13.1452 7.5L8.05401 12.5912C7.70254 12.9426 7.70254 13.5125 8.05401 13.864C8.40548 14.2154 8.97533 14.2154 9.3268 13.864L15.0544 8.1364ZM0.417969 7.5V8.4H14.418V7.5V6.6H0.417969V7.5Z" fill="currentcolor" />
                          </svg>
                        </i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".5s">
                  <div className="it-footer-widget it-footer-col-1-2">
                    <h4 className="it-footer-widget-title">Useful Links</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">kindergarten</a></li>
                        <li><a href="#">University</a></li>
                        <li><a href="#">GYM Coaching</a></li>
                        <li><a href="#">Cooking</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".7s">
                  <div className="it-footer-widget it-footer-col-1-3">
                    <h4 className="it-footer-widget-title">Our Company</h4>
                    <div className="it-footer-widget-menu">
                      <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Become Teacher</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Instructor</a></li>
                        <li><a href="#">Events</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow itfadeUp" data-wow-duration=".9s"
                  data-wow-delay=".9s">
                  <div className="it-footer-widget it-footer-col-1-4 d-flex justify-content-lg-end">
                    <div>
                      <h4 className="it-footer-widget-title">Get Contact</h4>
                      <div className="it-footer-widget-contact mb-25">
                        <ul>
                          <li><span>Phone:</span><a href="tel:0130-2242451">0130-2242451 / 2253385
</a></li>
                          <li><span>Email:</span><a href="mailto:info@shivashikshasadan.com">info@shivashikshasadan.com</a></li>
                          <li><span>Location:</span><a target="_blank" href="https://www.google.com/maps/dir///@24.4503253,17.1644279,4.17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D">Dev Nagar , Sonipat -131001, Haryana , India
</a></li>
                        </ul>
                      </div>
                      <div className="it-footer-widget-social">
                        
                        <a href="https://www.facebook.com/shivashikshasadansnp">
                          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7373 0C11.8245 4.94765e-05 12.8731 0.164898 13.8594 0.47168C14.0236 0.522763 14.186 0.5779 14.3467 0.636719C15.1509 0.931161 15.9091 1.32115 16.6074 1.79297C16.7472 1.88741 16.8846 1.98505 17.0195 2.08594C17.8277 2.69042 18.5459 3.4086 19.1504 4.2168C19.2513 4.35169 19.3489 4.48911 19.4434 4.62891C19.9152 5.32727 20.3052 6.08541 20.5996 6.88965C20.6584 7.05031 20.7136 7.21273 20.7646 7.37695C20.867 7.70592 20.9535 8.04183 21.0234 8.38379C21.1633 9.06723 21.2373 9.77522 21.2373 10.5C21.2373 10.9911 21.2029 11.4741 21.1377 11.9473C20.8765 13.8408 20.1102 15.573 18.9795 17.0039C18.8852 17.1232 18.7887 17.2405 18.6895 17.3555C18.491 17.5854 18.2828 17.8067 18.0654 18.0186C17.9567 18.1245 17.8456 18.2279 17.7324 18.3291C17.0534 18.9362 16.2951 19.4565 15.4746 19.8721C14.9275 20.1492 14.3529 20.3797 13.7559 20.5586C13.4575 20.648 13.1536 20.7251 12.8447 20.7881C12.6903 20.8196 12.5347 20.8475 12.3779 20.8721V13.5352H14.8242L15.29 10.5L15.2891 10.499H12.3779V8.53027C12.3779 8.4782 12.3795 8.42574 12.3828 8.37402C12.406 8.01348 12.5127 7.66609 12.7441 7.39844C12.8103 7.32194 12.8871 7.25242 12.9746 7.19043C13.1058 7.09747 13.2618 7.0224 13.4463 6.9707C13.631 6.91895 13.8442 6.89062 14.0889 6.89062H15.4131V4.30566C15.4131 4.30566 15.4123 4.30489 15.4111 4.30469H15.4092C15.4069 4.30431 15.4037 4.30344 15.3994 4.30273C15.3904 4.30124 15.3767 4.29965 15.3594 4.29688C15.3243 4.29127 15.2723 4.28305 15.207 4.27344C15.0764 4.25421 14.8899 4.22875 14.668 4.20312C14.335 4.16469 13.9214 4.12619 13.4932 4.10938L13.0625 4.10059C12.9125 4.10059 12.7654 4.10588 12.6221 4.11719C11.6196 4.19628 10.785 4.55048 10.1797 5.15625C10.05 5.28609 9.93029 5.42733 9.82227 5.58008C9.75029 5.68185 9.68299 5.78861 9.62109 5.90039C9.4972 6.12413 9.39385 6.36787 9.3125 6.63086C9.1702 7.0909 9.0957 7.61087 9.0957 8.18652V10.499H6.42969V13.5352H9.0957V20.8721C8.93893 20.8475 8.78329 20.8196 8.62891 20.7881C8.32 20.7251 8.01617 20.648 7.71777 20.5586C7.12076 20.3797 6.54616 20.1492 5.99902 19.8721C5.17857 19.4565 4.42027 18.9362 3.74121 18.3291C3.62802 18.2279 3.51689 18.1245 3.4082 18.0186C3.19082 17.8067 2.9826 17.5854 2.78418 17.3555C2.68495 17.2405 2.58839 17.1232 2.49414 17.0039C1.36339 15.573 0.597092 13.8408 0.335938 11.9473C0.270687 11.4741 0.237327 10.9911 0.237305 10.5C0.237305 9.41262 0.402157 8.36337 0.708984 7.37695C0.760067 7.21273 0.815204 7.05031 0.874023 6.88965C1.16847 6.08541 1.55846 5.32727 2.03027 4.62891C2.12472 4.48911 2.22235 4.35169 2.32324 4.2168C2.92773 3.4086 3.6459 2.69042 4.4541 2.08594C4.58899 1.98505 4.72642 1.88741 4.86621 1.79297C5.56458 1.32115 6.32271 0.931161 7.12695 0.636719C7.28761 0.5779 7.45003 0.522763 7.61426 0.47168C8.60067 0.164852 9.64992 0 10.7373 0ZM15.3477 4.2959C15.2526 4.28082 15.0588 4.25307 14.8037 4.22168C14.9662 4.24168 15.104 4.25925 15.207 4.27441C15.2657 4.28305 15.3132 4.29043 15.3477 4.2959Z" fill="currentcolor" stroke="#1F2432" strokeWidth="0.000976562" />
                            <path d="M15.2881 10.5L14.8232 13.5342H12.377V20.8721C12.1097 20.914 11.839 20.9454 11.5654 20.9668C11.2919 20.9882 11.0153 20.999 10.7363 20.999C10.4573 20.999 10.1808 20.9882 9.90723 20.9668C9.77039 20.9561 9.63433 20.9427 9.49902 20.9268L9.0957 20.8721H9.09668V13.5342H6.43066V10.5H9.0957L9.09668 10.499V8.18555C9.09673 7.28126 9.2817 6.5162 9.62207 5.90137C9.68399 5.78953 9.75124 5.68288 9.82324 5.58105C9.93127 5.42828 10.05 5.28611 10.1797 5.15625C10.2227 5.1132 10.2672 5.07175 10.3125 5.03125C10.3582 4.99045 10.4052 4.95128 10.4531 4.91309C10.9314 4.53205 11.5221 4.28117 12.2031 4.16895C12.4755 4.12406 12.7627 4.10156 13.0625 4.10156C13.2061 4.10157 13.3504 4.10474 13.4932 4.11035C13.7786 4.12157 14.0576 4.14199 14.3105 4.16602C14.8815 4.22025 15.3195 4.29048 15.3994 4.30371C15.4036 4.30441 15.407 4.3053 15.4092 4.30566H15.4121V6.88965H14.0889C14.0074 6.88965 13.929 6.89232 13.8545 6.89844C13.3318 6.94132 12.975 7.13039 12.7432 7.39844C12.5117 7.66631 12.405 8.0134 12.3818 8.37402C12.3785 8.42556 12.377 8.4774 12.377 8.5293V10.5H15.2881Z" fill="white" stroke="#1F2432" strokeWidth="0.000976562" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/shiva.shiksha.sadan/">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6802 1.23535H6.03271C3.64478 1.23535 1.70898 3.17115 1.70898 5.55908V14.2065C1.70898 16.5945 3.64478 18.5303 6.03271 18.5303H14.6802C17.0681 18.5303 19.0039 16.5945 19.0039 14.2065V5.55908C19.0039 3.17115 17.0681 1.23535 14.6802 1.23535Z" stroke="#1F2432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.8122 9.33833C13.9189 10.058 13.796 10.793 13.4609 11.4388C13.1258 12.0846 12.5956 12.6083 11.9458 12.9354C11.2959 13.2625 10.5594 13.3763 9.8411 13.2608C9.12279 13.1452 8.45921 12.806 7.94476 12.2916C7.4303 11.7771 7.09116 11.1135 6.97557 10.3952C6.85999 9.67692 6.97384 8.94046 7.30094 8.29058C7.62804 7.64071 8.15173 7.11052 8.79752 6.77543C9.44331 6.44034 10.1783 6.31742 10.898 6.42414C11.6321 6.53299 12.3117 6.87507 12.8365 7.39984C13.3613 7.9246 13.7033 8.60423 13.8122 9.33833Z" stroke="#1F2432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.1094 5.12695H15.1221" stroke="#1F2432" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                        <a href="https://www.youtube.com/@shivavirtualeducation">
                          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
                        </a>
                      </div>
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
                    <p className="mb-0">Copyright © {new Date().getFullYear()} <a href="#">Ordianit</a> All Rights Reserved</p>
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
