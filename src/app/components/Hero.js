import React from 'react'

export default function Hero(){

    return (
        <>
          <section class="hero" id="home">
            <div class="overlay">
              <div class="content">
                <h1 class="text-white" style={{fontSize:'46px !important'  }}>
                  WIR LASSEN SIE NICHT
                  <br />

                  <strong class="highlight">“LINKS LIEGEN” !</strong>
                </h1>
                <button className="hero-btn"style={{ borderRadius: "40px", marginTop: "30px" }}>
                  Alle Dienste anzeign
                </button>
              </div>
            </div>
          </section>
        </>
    )
}