import React from "react";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="parallax get_quote section_padding_0 columns_margin_0"
    >
      <div className="container-fluid">
        <div className="row row_columns_padding_0 display_table_md">
          <div className="cs col-md-6 section_padding_top_60 section_padding_bottom_65 display_table_cell_md vertical_top">
            <div className="container-left-half horizontal-center">
              <div className="row">
                <div
                  className="col-sm-12 text-center"
                  data-animation="fadeInLeft"
                >
                  <h2 className="section_header">
                    <strong>Was tun wir darüber hinaus?</strong>
                  </h2>
                  <p className="small-text">
                    Beispielsweise für unsere Transportkunden, Autohäuser etc.
                  </p>
                  <hr className="divider_30_3 zebra_bg" />
                  <p className="topmargin_90 bottommargin_90 grey">
                    24 stündige Notrufannahme durch Aufschaltung Ihrer Anrufe
                    auf unsere Disposition. Wir melden uns am Telefon mit Ihrem
                    Firmennamen - unsere moderne Dispositionszentrale erkennt
                    die für Sie bestimmten Telefonate. Gerne helfen wir Ihren
                    Kunden bei Panne oder Unfall, ganz wie mit Ihnen abgestimmt.
                    Darüber hinaus bieten wir Mietwagen als Unfall- oder
                    Pannenersatz an, damit Ihre Kunden jederzeit mobil bleiben.
                  </p>
                  {/* <a href="#" className="theme_button">
            Apply today
          </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="ds col-md-6 section_padding_top_60 section_padding_bottom_65 display_table_cell_md vertical_top">
            <div className="container-right-half horizontal-center wide-half-container">
              <div className="row">
                <div
                  className="col-md-12 text-center"
                  data-animation="fadeInRight"
                >
                  <h2 className="section_header">
                    EIN ANGEBOT <strong className="highlight"> BEKOMMEN</strong>
                  </h2>
                  <p className="small-text lightfont">delivers the best</p>
                  <hr className="divider_30_3 zebra_bg" />
                  <form className="topmargin_60" method="post" action="./">
                    <div className="row columns_margin_bottom_15">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="full-name" className="sr-only">
                            Full Name
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size={30}
                            defaultValue=""
                            name="full-name"
                            id="full-name"
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="phone-number" className="sr-only">
                            Phone Number
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size={30}
                            defaultValue=""
                            name="phone-number"
                            id="phone-number"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="start-address" className="sr-only">
                            Tow From
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size={30}
                            defaultValue=""
                            name="start-address"
                            id="start-address"
                            className="form-control"
                            placeholder="Tow From"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="end-address" className="sr-only">
                            Tow To
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size={30}
                            defaultValue=""
                            name="end-address"
                            id="end-address"
                            className="form-control"
                            placeholder="Tow To"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group select-group">
                          <label htmlFor="vechicle" className="sr-only">
                            Vechicle Type
                            <span className="required">*</span>
                          </label>
                          <div className="input-group">
                            <select
                              aria-required="true"
                              id="vechicle"
                              name="vechicle"
                              className="choice empty form-control"
                            >
                              <option
                                value=""
                                disabled=""
                                selected=""
                                data-default=""
                              >
                                Vechicle Type
                              </option>
                              <option value="january">Type 1</option>
                              <option value="february">Type 2</option>
                              <option value="march">Type 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="tow-date" className="sr-only">
                            Date
                            <span className="required">*</span>
                          </label>
                          <input
                            type="date"
                            name="tow-date"
                            id="tow-date"
                            defaultValue=""
                            className="form-control"
                            placeholder="Date"
                          />
                          {/* <i
                            className="fa fa-calendar grey"
                            aria-hidden="true"
                          /> */}
                        </div>
                      </div>
                    </div>
                    <p className="form-submit">
                      <button
                        type="submit"
                        id="submit"
                        name="submit"
                        className="theme_button color1"
                      >
                        Submit now
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="images/hook.png"
        alt=""
        className="top_image"
        data-animation="fadeInDown"
      />
    </section>
  );
}
