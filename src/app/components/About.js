import React from 'react'

export default function About() {
  return (
    <>
      <section
        id="about"
        className="ls section_padding_top_100 section_padding_bottom_100 table_section table_section_md columns_padding_25 columns_margin_bottom_30"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 text-center text-md-right">
              <img src="images/truck.png" alt="" />
            </div>
            <div className="col-lg-5 col-md-6">
              <h2 className="section_header numbered-header">
                <strong>ABSCHLEPPEN </strong>& BERGEN
              </h2>
              <p className="small-text">
                Was leisten wir im Bereich Abschleppen und Bergen?
              </p>
              <hr className="divider_30_3 zebra_bg" />

              <div className="inline-block topmargin_10">
                <ul className="list1 checklist grey">
                  <li>Pannenhilfe vom Zweirad bis zum 7,5-Tonner</li>
                  <li>Unfallhilfe PKW's und LKW's</li>
                  <li>
                    Abschleppen zum gewünschten Ziel oder auch Abstellen auf
                    unserem gesicherten Betriebsgelände.
                  </li>
                  <li>
                    Pannenhilfe vor Ort, Transport zu Ihrer Werkstatt oder auf
                    Wunsch auch in unsere betriebseigene Werkstatt.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
