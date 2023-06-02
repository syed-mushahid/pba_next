import About from "./components/About";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nesus from "./components/Nesus";
import Services from "./components/Services";
import Transport from "./components/Transport";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <div id="canvas">
        <div id="box_wrapper">
          <Navbar />
          <Hero />
          <Banner />
          <About />
          <Services />
          <Nesus />
          <Transport />
          <CopyRight />

          <ContactForm />
          {/* <Banner /> */}
          <Footer />
        </div>
        {/* eof #box_wrapper */}
      </div>
      {/* eof #canvas */}
    </>
  );
}
