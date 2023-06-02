import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="page_header header_darkgrey header_logo_center toggler_right menu_justify">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-left text-md-center">
              <div className="logo_wrapper">
                <a href="./" className="logo">
                  <img src="images/logo.png" className="logo-img" alt="" />
                </a>
              </div>
              {/* header toggler */}
              <span className="toggle_menu">
                <span />
              </span>
              {/* main nav start */}
              <nav className="mainmenu_wrapper" style={{ left: "-4px" }}>
                <ul className="mainmenu nav sf-menu">
                  <li className="active">
                    <a href="#hero">Home</a>
                  </li>
                  <li className="">
                    <a data-scroll="" href="#about">
                      Abschleppdienst{/*  <span class="hidden-xs">*</span> */}
                    </a>
                  </li>{" "}
                  <li className="">
                    <a data-scroll="" href="#transport">
                      Transporte
                    </a>
                  </li>{" "}
                  <li class="sf-logo-li" style={{ width: "209px" }}></li>
                  <li className="">
                    <a data-scroll="" href="#services">
                      Dienstleistungen
                    </a>
                  </li>{" "}
                  <li className="">
                    <a data-scroll="" href="#testimonials">
                      Partner
                    </a>
                  </li>{" "}
                  <li className="">
                    <a data-scroll="" href="#nesus">
                      Impressum
                    </a>{" "}
                  </li>{" "}
                </ul>
              </nav>
              {/* eof main nav */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
