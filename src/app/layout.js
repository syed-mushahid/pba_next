import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta
          name="description"
          content="BSCHLEPPEN & BERGEN - Wir bieten Abschleppen und Bergen von Fahrzeugen, Pannenhilfe, Unfallhilfe und mehr. Geprüftes Mitglied des Verbandes der Bergungs- und Abschleppunternehmen."
        />
        <meta
          name="keywords"
          content="Abschleppen, Bergen, Pannenhilfe, Unfallhilfe, Fahrzeug, 24 Stunden, Autohäuser, Firmen, Transport, Parkstörer, Neuss"
        />
        <meta name="author" content="PBA Abschleppdienst" />
        <title>BSCHLEPPEN | PBA Abschleppdienst</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/animations.css" />
        <link rel="stylesheet" href="css/building.css" />
        <link rel="stylesheet" href="css/fonts.css" />
        <link rel="stylesheet" href="css/main.css" id="color-switcher-link" />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </head>

      <body className={inter.className}>{children}</body>
      <Script src="js/compressed.js"></Script>
      <Script src="js/main.js"></Script>
      <Script src="js/vendor/jquery-jvectormap-2.0.3.min.js"></Script>
      <Script src="js/vendor/jquery-jvectormap-world-merc.js"></Script>
      <Script src="js/switcher.js"></Script>
    </html>
  );
}
