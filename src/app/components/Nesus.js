import React from "react";

export default function Nesus() {
  return (
    <section
      id="nesus"
      className="ls section_padding_top_100 section_padding_bottom_100 columns_margin_bottom_20"
    >
      <div className="container">
        <div className="row my">
          <div className="col-lg-6 col-md-6">
            <h2 className="section_header numbered-header">
              PBA Abschleppdienst in
              <strong> Neuss</strong>
            </h2>
            <p className="small-text">
              Wir sind ein geprüfter Mitgliedsbetrieb des: VBA (Verband der
              Bergungs- und Abschleppunternehmen e.V.)
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
          <div className="col-lg-6 col-md-6 text-center text-md-right">
            <img
              src="uploads/aboutUsImg1.jpg"
              className="img-rounded"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className="row section wb d-flex align-items-center my-5">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="message-box">
                <div className="col-lg-12">
                  <h3>
                    <strong>24 Stunden / 365 Tage im Jahr</strong>
                  </h3>
                  <p className="lead">
                    Mit unseren Einsatzfahrzeugen und moderner, EDV-gestützter
                    Einsatzzentrale sind wir im Notfall für Sie da.
                  </p>
                </div>
              </div>
              {/* end messagebox */}
            </div>
            {/* end col */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 media-image">
              <div className="message-box">
                <div className="row">
                  <div
                    className="post-media wow fadeIn "
                    style={{
                      visibility: "visible",
                      animationName: "fadeIn",
                    }}
                  >
                    <a
                      href="uploads/aboutUsImg2.jpg"
                      data-rel="prettyPhoto[gal]"
                      className="hoverbutton global-radius "
                    >
                      <i className="flaticon-unlink" />
                    </a>
                    <img
                      src="uploads/aboutUsImg2.jpg"
                      alt=""
                      className="img-responsive img-rounded security-image"
                    />
                  </div>
                  {/* end service */}
                </div>
              </div>
              {/* end messagebox */}
            </div>
            {/* end col */}
          </div>
          <div class="row section wb my-5">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="lead">
                <h3>
                  <strong>Parkstörer</strong>
                </h3>
                <p className="text-justify">
                  Sicher ärgern Sie sich auch über unberechtigt parkende
                  Fahrzeuge auf Ihren Privat- oder Kundenparkplätzen. Jedoch hat
                  sich der Bundesgerichtshof diesem Problem angenommen und
                  entschieden, dass unbefugt auf fremden Grundstücken
                  abgestellte Fahrzeuge abgeschleppt und nur gegen Bezahlung der
                  Abschleppkosten herausgegeben werden müssen (AZ V ZR 144/08
                  vom 05. Juni 2009).
                </p>
                <p className="text-justify">
                  Gerne nehmen wir uns Ihrem Problem im an und entfernen
                  widerrechtlich parkende Fahrzeuge von Ihrem Grundstück und
                  verbringen diese auf unsere Sicherstellungsplätze in Neuss und
                  Dormagen. Somit können Sie gewährleisten, dass Ihr Parkraum
                  ausschliesslich Ihren Zwecken zur Verfügung steht. Dieser
                  Service ist für Sie mit keinerlei Kosten verbunden, da der
                  Parkstörer die entstehenden Kosten direkt bei uns vor Ort zu
                  entrichten hat. Voraussetzung ist nur, das Sie mit unserem
                  Unternehmen einen Vertrag abschliessen, der uns berechtigt,
                  Fahrzeuge von Ihrem Grundstück abzuschleppen. Alle weiteren
                  Schritte wie z.B. Halterermittlung und Meldung bei den
                  Ordnungsbehörden übernehmen selbstverständlich wir.
                </p>
                <p className="text-justify">
                  Wir sind ein geprüftes Mitglied des Verbandes der Berger und
                  Abschleppunternehmen (VBA Wuppertal). Daher können wir Ihnen
                  versichern, die Fahrzeuge schadenfrei und sicher
                  unterzubringen, um spätere Reklamationen auszuschließen.
                </p>
              </div>
            </div>
          </div>
          <div class="row section wb my-5">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="lead">
                <h3>
                  <strong>Service für Autohäuser und Firmen</strong>
                </h3>
                <h4>
                  <b>Was tun wir für Sie?</b>
                </h4>
                <p>
                  24 stündige Notrufannahme durch Aufschaltung Ihrer Anrufe auf
                  unsere Disposition. Wir melden uns am Telefon mit Ihrem
                  Firmennamen - unsere moderne Dispositionszentrale erkennt die
                  für Sie bestimmten Telefonate. Gerne helfen wir Ihren Kunden
                  bei Panne oder Unfall, ganz wie mit Ihnen abgestimmt. Darüber
                  hinaus bieten wir Mietwagen als Unfall- oder Pannenersatz an,
                  damit Ihre Kunden jederzeit mobil bleiben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
