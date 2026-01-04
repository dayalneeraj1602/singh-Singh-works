import { useEffect, useState } from "react";
import "../styles/Home.css";

import OurProducts from "./OurProducts";
import WhyUs from "./WhyUs";
import { Link } from "react-router-dom";
import OurServices from "./OurServices";

export const info = ` Est. 2001, Singh Engineering Works in Noida crafts quality
Industrial Furnaces. As a Sole Proprietorship, we prioritize
standards, offering competitive rates. Led by Prabhudayal Singh,
we've secured a strong market position.`;

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
    }, 6);

    return () => clearTimeout(intervalId);
  }, [infoText]);

  return (
    <div className="home">
      <section className="banner">
        <div className="overlay"></div>

        <div className="punch-line">
          <h1 className="headline">Innovating Furnaces</h1>
          <h1 className="headline since">Since 2001.</h1>

          <p className="info text-start">{infoText}</p>

          <div className="Explore">
            <Link
              to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="btn fs-5 btn-outline-light">Explore</button>
            </Link>
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
