import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="page_footer ds section_padding_top_65 section_padding_bottom_50 columns_margin_bottom_40">
        <div  className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6" data-animation="fadeInUp">
              <a href="./" className="logo">
                <img src="images/logo.png" alt="" />
              </a>
              <p>
                Shank duis pancetta kevin ullamco tempor short loin pig lorem
                officia ut ham hock incididunt irure drumstick sage ball tip
                tri-tip.
              </p>
              <p>
                <a
                  href="#"
                  className="social-icon theme-color-icon soc-twitter"
                />
                <a
                  href="#"
                  className="social-icon theme-color-icon soc-facebook"
                />
                <a
                  href="#"
                  className="social-icon theme-color-icon soc-google"
                />
                <a
                  href="#"
                  className="social-icon theme-color-icon soc-linkedin"
                />
                <a
                  href="#"
                  className="social-icon theme-color-icon soc-pinterest"
                />
              </p>
            </div>
            <div className="col-md-3 col-sm-6" data-animation="fadeInUp">
              <div className="topmargin_15 columns_margin_0">
                <div className="widget widget_pages">
                  <h3 className="widget-title">
                    Useful
                    <strong>Links</strong>
                  </h3>
                  <hr className="divider_30_3 zebra_bg divider_left" />
                  <div className="row columns_padding_0 columns_margin_0">
                    <div className="col-xs-6">
                      <ul className="greylinks">
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#services">Services</a>
                        </li>
                        <li>
                          <a href="#transport">Transport</a>
                        </li>
                        <li>
                          <a href="">404</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6" data-animation="fadeInUp">
              <div className="widget widget_text topmargin_15">
                <h3 className="widget-title">
                  Get in
                  <strong>Touch</strong>
                </h3>
                <hr className="divider_30_3 zebra_bg divider_left" />
                <div className="media small-teaser">
                  <div className="media-left">
                    <i className="fa fa-map-marker highlight fontsize_18" />
                  </div>
                  <div className="media-body">
                    Neuss: Moselstraße 5a 41464 Neuss Tel .: 02131/201380 Fax:
                    02131/3142659
                  </div>

                </div>
                <div className="media small-teaser">
                  <div className="media-left">
                    <i className="fa fa-envelope highlight fontsize_18" />
                  </div>
                  <div className="media-body greylinks">
                    <div className="media-body col-12">
                      Dormagen: Neusser Straße 1a 41542 Dormagen Tel .:
                      02133/295020 Fax: 02133/295010
                    </div>
                  </div>
                </div>
                <div className="media small-teaser">
                  <div className="media-left">
                    <i className="fa fa-phone highlight fontsize_18" />
                  </div>
                  <div className="media-body col12">
                    PBA towing service GmbH
                  </div>
                </div>
                <div className="media small-teaser">
                  <div className="media-left">
                    <i className="fa fa-clock-o highlight fontsize_18" />
                  </div>
                  <div className="media-body">
                    24 hours a day, 7 days a week
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12" data-animation="fadeInUp">
              <div className="topmargin_15">
                <div className="widget widget_twitter">
                  <h3 className="widget-title">Partner</h3>
                  <hr className="divider_30_3 zebra_bg divider_left" />
                  <img
                    src="images/partner.jpg"
                    alt=""
                    className="img-responsive img-rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="ds ms page_copyright section_padding_15">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <p className="lightfont">
                PBA Abschleppdienst
                <i className="fa fa-heart highlight" aria-hidden="true" /> All
                Rights Reserved © 2023
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
