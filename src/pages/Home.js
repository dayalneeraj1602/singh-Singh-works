import { useEffect, useState } from "react";
import "../styles/Home.css";

import OurProducts from "./OurProducts";
import WhyUs from "./WhyUs";
import { Link } from "react-router-dom";
import OurServices from "./OurServices";

export const info = `Established in 2001, Singh Engineering Works is a leader in precision industrial furnaces. We deliver cutting-edge heating solutions with uncompromising quality standards.`;

const Home = () => {
  const [infoText, setInfoText] = useState("");

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (infoText.length !== info.length) {
        setInfoText(infoText + info[infoText.length]);

        if (infoText.length === info.length) {
          clearInterval(intervalId);
          setInfoText(info);
        }
      }
    }, 5);

    return () => clearTimeout(intervalId);
  }, [infoText]);

  return (
    <div className="home">
      <section className="banner">
        <div className="overlay"></div>
        <div className="banner-content">
          <div className="punch-line">
            <div className="badge">Industry Leader Since 2001</div>
            <h1 className="headline">Premium Industrial Furnace Solutions</h1>
            <p className="info">{infoText}</p>

            <div className="cta-buttons">
              <Link to="/products" style={{ textDecoration: "none" }}>
                <button className="btn-primary">Explore Products</button>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button className="btn-secondary">Get in Touch</button>
              </Link>
            </div>

            <div className="scroll-indicator">
              <span>Scroll to explore</span>
              <div className="scroll-arrow">↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------Sections below hero--------- */}
      <OurProducts />
      <WhyUs />
      <OurServices />
    </div>
  );
};

export default Home;
