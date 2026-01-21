import React, { useContext, useState } from "react";
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
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "5rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "3rem", color: "#1a1a2e" }}>
          Our Services
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", justifyItems: "center" }}>
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
              style={{ textDecoration: "none", width: "100%" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "1.5rem",
                  maxWidth: "350px",
                  width: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 12px rgba(59, 130, 246, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div style={{ 
                  height: "300px", 
                  width: "100%", 
                  overflow: "hidden", 
                  borderRadius: "8px",
                  backgroundColor: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
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
                        objectFit: "cover",
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
                <h3 style={{ 
                  textAlign: "center", 
                  fontSize: "1.25rem", 
                  fontWeight: "600", 
                  marginTop: "1rem",
                  color: "#333"
                }}>
                  {item.productTitle}
                </h3>
                <p style={{
                  textAlign: "center",
                  fontSize: "0.95rem",
                  color: "#666",
                  marginTop: "0.5rem",
                  lineHeight: "1.5"
                }}>
                  {item.ProductDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
