import React, { useContext, useEffect, useState } from "react";
import "../styles/Home.css";
import { DataContext } from "../Context/DataContext";
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
  const [scrollIndex, setScrollIndex] = useState(0);

  const { dataFurnace: dataInfo } = useContext(DataContext);
  const { dataServices } = useContext(DataContext);

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

    return () => clearInterval(intervalId);
  }, [infoText]);
  const handlePrevClick = () => {
    setScrollIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : dataInfo.length - 4
    );
  };

  const handleNextClick = () => {
    setScrollIndex((prevIndex) =>
      prevIndex < dataInfo.length - 4 ? prevIndex + 1 : 0
    );
  };
  return (
    <div className="home">
      <section className="banner ">
        <div className="overlay"></div>
        <div className="punch-line w-100 ">
          <h1 className="text-light">Innovating Furnaces </h1>
          <h1>Since 2001.</h1>
          <div className="d-flex justify-content-center">
            <p
              className="info text-start mb-5"
              style={{ height: "3rem", width: "50%" }}
            >
              {infoText}
            </p>
          </div>
          <div className="Explore my-5">
            <Link
              to="/products"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="btn fs-5 btn-outline-light">Explore</button>
            </Link>
          </div>
        </div>
      </section>
      {/* -----------Images scrollable --------- */}

      <OurProducts />
      <WhyUs />
      <OurServices />
    </div>
  );
};

export default Home;
