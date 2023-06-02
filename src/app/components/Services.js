import React from "react";

export default function Services() {
  return (
    <section
      id="services"
      className="ls section_padding_top_100 section_padding_bottom_100 columns_margin_0"
    >
      <div className="container">
        <div className="row ">
          <div className="col-sm-12 text-center">
            <h2 className="section_header numbered-header">
              <strong> Uunsere </strong> Dienstleistungen
            </h2>
            <p className="small-text">
              Wir können Ihnen durch unsere Werkstatt und Fahrzeugaufbereitung
              ein umfassendes Angebot an Dienstleistungen anbieten, die rund um
              Fahrzeuge folgendes Serviceangebot umfasst:
            </p>
            <hr className="divider_30_3 zebra_bg" />
          </div>
        </div>
        <div className="row topmargin_30 stretch-items">
          <div className="col-md-4 my">
            <div className="with_padding service-container">
              <div className="teaser text-center">
                <img src="images/icons/towing.png" alt="" />
                <h4 style={{color:"#fff"}} className="service-heading">Car Towing</h4>
                <p>
                  Duis laboris ball tip jowl sed. Drumstick leberkas tenderloin
                  swine laborum cupim bacon ipsum jowl meatball t-bone.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my">
            <div className="with_padding service-container">
              <div className="teaser text-center">
                <img src="images/icons/hail.png" alt="" />
                <h4 style={{color:"#fff"}} className="service-heading" >Hail Damage</h4>
                <p>
                  Strip steak turkey prosciutto exercitation cillum elit. Enim
                  ham velit aute jerky ras. Anim landjaeger andouille.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my">
            <div className="with_padding service-container">
              <div className="teaser text-center">
                <img src="images/icons/flood.png" alt="" />
                <h4 style={{color:"#fff"}} className="service-heading">Flood Insurance Coverage</h4>
                <p>
                  Shankle pastrami jerky spare ribs pancetta hamburger aute
                  occaecat andouille corned beef quis capicola fugiat ea flank.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my">
            <div className="with_padding service-container">
              <div className="teaser text-center ">
                <img src="images/icons/accident.png" alt="" />
                <h4 style={{color:"#fff"}} className="service-heading">Accident Insurance</h4>
                <p>
                  T-bone laborum esse tongue, consequat elit short ribs cow
                  cupidatat sed fugiat fatback. Velit dolor frankfurter pork
                  loin.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my">
            <div className="with_padding service-container">
              <div className="teaser text-center">
                <img src="images/icons/fire.png" alt="" />
                <h4 style={{color:"#fff"}} className="service-heading">Fire Insurance</h4>
                <p>
                  Turkey turducken nulla pork chop shankle biltong ipsum mollit
                  brisket non boudin. Frankfurter porchetta cow aliquip.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 my">
            <div className="with_padding service-container">
              <div className="teaser text-center">
                <img src="images/icons/motocycle.png" alt="" />
                <h4 style={{color:"#fff"}} className="service-heading">Motorcycle Towing</h4>
                <p>
                  Bresaola pork consequat exercitation, voluptate pork loin
                  brisket capicola officia incididunt ground round cupim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <p>
            Wir arbeiten mit führenden Zuliefern rund um Fahrzeugausrüstungen
            wie die Firmen Bott, Würth, Sortimo und Logic Line zusammen.
          </p>
        </div>
        <div className="container gal-container">
          <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
            <div className="box">
              <a href="#" data-toggle="modal" data-target="#1">
                <img src="images/servicePhoto/servicePhoto1.jpg" alt="#" />
              </a>
              <div className="modal fade" id={1} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                      <img
                        src="images/servicePhoto/servicePhoto1.jpg"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-12 description">
                      <h4 style={{color:"#fff"}} className="service-heading">This is the first one on my Gallery</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
            <div className="box">
              <a href="#" data-toggle="modal" data-target="#2">
                <img src="images/servicePhoto/servicePhoto2.jpg" alt="#" />
              </a>
              <div className="modal fade" id={2} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                      <img
                        src="images/servicePhoto/servicePhoto2.jpg"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-12 description">
                      <h4 style={{color:"#fff"}} className="service-heading">This is the second one on my Gallery</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
            <div className="box">
              <a href="#" data-toggle="modal" data-target="#3">
                <img src="images/servicePhoto/servicePhoto3.jpg" alt="#" />
              </a>
              <div className="modal fade" id={3} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                      <img
                        src="images/servicePhoto/servicePhoto3.jpg"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-12 description">
                      <h4 style={{color:"#fff"}} className="service-heading">This is the third one on my Gallery</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
            <div className="box">
              <a href="#" data-toggle="modal" data-target="#4">
                <img src="images/servicePhoto/servicePhoto4.jpg" alt="#" />
              </a>
              <div className="modal fade" id={4} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                      <img
                        src="images/servicePhoto/servicePhoto4.jpg"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-12 description">
                      <h4 style={{color:"#fff"}} className="service-heading">This is the fourth one on my Gallery</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
            <div className="box">
              <a href="#" data-toggle="modal" data-target="#5">
                <img src="images/servicePhoto/servicePhoto5.jpg" alt="#" />
              </a>
              <div className="modal fade" id={5} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                      <img
                        src="images/servicePhoto/servicePhoto5.jpg"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-12 description">
                      <h4 style={{color:"#fff"}} className="service-heading">This is the fifth one on my Gallery</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 co-xs-12 gal-item">
            <div className="box">
              <a href="#" data-toggle="modal" data-target="#9">
                <img src="images/servicePhoto/servicePhoto6.jpg" alt="#" />
              </a>
              <div className="modal fade" id={9} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                      <img
                        src="images/servicePhoto/servicePhoto6.jpg"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-12 description">
                      <h4 style={{color:"#fff"}} className="service-heading">This is the ninth one on my Gallery</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 co-xs-12 gal-item">
            <div className="box">
              <a href="#" data-toggle="modal" data-target="#10">
                <img src="images/servicePhoto/servicePhoto7.jpg" alt="#" />
              </a>
              <div className="modal fade" id={10} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                      <img
                        src="images/servicePhoto/servicePhoto7.jpg"
                        alt="#"
                      />
                    </div>
                    <div className="col-md-12 description">
                      <h4 style={{color:"#fff"}} className="service-heading">This is the tenth one on my Gallery</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
