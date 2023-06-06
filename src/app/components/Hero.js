import React from "react";

export default function Hero() {
  return (
    <>
      <section class="hero" id="hero">
        <div class="overlay">
          <div class="content">
            <h1 class="text-white" style={{ fontSize: "46px !important" }}>
              WIR LASSEN SIE NICHT
              <br />
              <strong class="highlight">“LINKS LIEGEN” !</strong>
            </h1>
            <a href="#services">
              <button
                className="hero-btn"
                style={{ borderRadius: "40px", marginTop: "30px" }}
              >
                Alle Dienste anzeign
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
