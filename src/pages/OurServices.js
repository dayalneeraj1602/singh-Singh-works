import React, { useContext, useState } from "react";
import "../styles/OurServices.css";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
const OurServices = () => {
  const { dataServices: dataInfo } = useContext(DataContext);

  const [hover, setHover] = useState(null);
  return (
    <div>
      <section className="services section-bg" id="services">
        <div className="container">
          <div className="section-head col-sm-12">
            <h4>
              <span>Our</span> Services
            </h4>
            <p>
              We are committed to providing our clients with the best services.
            </p>
          </div>

          <div className="row">
            {dataInfo?.map((item, index) => (
              <div
                className="col-md-6 col-lg-3"
                data-aos="fade-up"
                data-aos-delay={index + 1 * 100}
              >
                <Link
                  to={item.link}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <div
                    className="box"
                    onMouseLeave={() => setHover(null)}
                    onMouseOver={() => setHover(item.id)}
                    style={{
                      width: "300px",
                      height: "300px",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="overlays"
                      style={{
                        backgroundImage:
                          hover === item.id && `url(${item.imgUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: hover === item.id ? "blur(2px)" : "none",
                        transition: "filter 0.3s ease",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    ></div>
                    <div
                      className="content p-4"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        color: hover === item.id ? "white" : "black",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "",
                      }}
                    >
                      <>
                        <h4
                          style={{
                            color: hover === item.id ? "white" : "#f91942",
                          }}
                          className="title"
                        >
                          {item.productTitle}
                        </h4>
                        <p
                          className="description"
                          style={{
                            color: hover === item.id ? "white" : "#818181",
                          }}
                        >
                          {item.ProductDescription}
                        </p>
                      </>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
