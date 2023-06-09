"use client"
import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    window.onscroll = function() {
      stickyHeader();
    };

    const header = document.querySelector('.top-header');
    const sticky = header.offsetTop;

    function stickyHeader() {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky_nav');
      } else {
        header.classList.remove('sticky_nav');
      }
    };

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.onscroll = null;
    };
  }, []);
  return (
    <>
      <header  className=" top-header page_header header_darkgrey header_logo_center toggler_right menu_justify">
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
                      Abschleppen{/*  <span class="hidden-xs">*</span> */}
                    </a>
                  </li>{" "}
                  <li className="">
                    <a data-scroll="" href="#services">
                      Dienstleistungen
                    </a>
                  </li>{" "}
                  <li
                    class="sf-logo-li"
                    style={{ width: "209px", marginLeft: "50px" }}
                  ></li>
                  <li className="">
                    <a data-scroll="" href="#nesus">
                      About
                    </a>{" "}
                  </li>{" "}
                  <li className="">
                    <a data-scroll="" href="#transport">
                      Transporte
                    </a>
                  </li>{" "}
                  <li className="">
                    <a data-scroll="" href="#contact">
                      Contact
                    </a>
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
