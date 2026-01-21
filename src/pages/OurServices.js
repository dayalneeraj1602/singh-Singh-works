import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

const OurServices = () => {
  const { dataServices: dataInfo } = useContext(DataContext);

  const serviceIcons = {
    1: "fa-flame",
    2: "fa-cogs",
    3: "fa-industry",
    4: "fa-wrench",
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 50%, #f9fafb 100%)",
      padding: "5rem 1rem",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute",
        top: "-30%",
        right: "-10%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none"
      }}></div>

      <div style={{
        position: "absolute",
        bottom: "-40%",
        left: "-5%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none"
      }}></div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-block",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.08))",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            color: "#2563eb",
            padding: "0.6rem 1.5rem",
            borderRadius: "50px",
            fontSize: "0.85rem",
            fontWeight: "600",
            letterSpacing: "0.5px",
            marginBottom: "1rem",
            backdropFilter: "blur(10px)"
          }}>
            Our Solutions
          </span>

          <h2 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#1f2937",
            margin: "0.5rem 0",
            lineHeight: "1.2",
            letterSpacing: "-0.5px"
          }}>
            Our <span style={{ color: "#3b82f6", position: "relative" }}>Services</span>
          </h2>

          <p style={{
            fontSize: "1.1rem",
            color: "#6b7280",
            marginTop: "1rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6"
          }}>
            We are committed to providing our clients with the best services and comprehensive industrial solutions.
          </p>
        </div>

        {/* Services Grid - 4 columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem"
        }}>
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
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(59, 130, 246, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.05)";
                }}
              >
                {/* Image Container */}
                <div style={{
                  height: "280px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}>
                  {item.imgUrl ? (
                    <img
                      src={item.imgUrl}
                      alt={item.productTitle}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : null}
                  <div style={{
                    position: "absolute",
                    display: !item.imgUrl ? "flex" : "none",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    fontSize: "3rem",
                    color: "white"
                  }}>
                    <i className={`fa-solid ${serviceIcons[item.id] || "fa-star"}`}></i>
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: "2rem",
                  textAlign: "center",
                  width: "100%"
                }}>
                  <h3 style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#1f2937",
                    margin: "0 0 1rem 0",
                    lineHeight: "1.3"
                  }}>
                    {item.productTitle}
                  </h3>
                  <p style={{
                    fontSize: "0.95rem",
                    color: "#6b7280",
                    lineHeight: "1.6",
                    margin: 0
                  }}>
                    {item.ProductDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
