import React, { useContext, useState } from "react";
import "../styles/OurServices.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

const OurServices = () => {
  const { dataServices: dataInfo } = useContext(DataContext);
  const [hover, setHover] = useState(null);

  const serviceIcons = {
    1: "fa-flame",
    2: "fa-cogs",
    3: "fa-industry",
    4: "fa-wrench",
  };

  return (
    <div className="our-services-section">
      <section className="services-container">
        <div className="services-header">
          <span className="services-badge">Our Solutions</span>
          <h2 className="services-title">Our <span className="highlight-services">Services</span></h2>
          <p className="services-subtitle">
            We are committed to providing our clients with the best services and comprehensive industrial solutions.
          </p>
        </div>

        <div className="services-grid">
          {dataInfo?.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              className="service-link"
            >
              <div
                className="service-card"
                onMouseLeave={() => setHover(null)}
                onMouseOver={() => setHover(item.id)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-image-overlay">
                  {hover === item.id && (
                    <div
                      className="service-bg-image"
                      style={{
                        backgroundImage: `url(${item.imgUrl})`,
                      }}
                    ></div>
                  )}
                </div>

                <div className="service-content">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <i className={`fa-solid ${serviceIcons[item.id] || "fa-star"}`}></i>
                    </div>
                  </div>

                  <h3 className="service-title">{item.productTitle}</h3>
                  <p className="service-description">{item.ProductDescription}</p>

                  <div className="service-arrow">
                    <span>Explore →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
