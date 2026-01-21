import React from "react";
import { useNavigate } from "react-router-dom";

const GearWork = () => {
  const navigate = useNavigate();

  const gearTypes = [
    {
      id: 1,
      name: "Spur Gear",
      image: "https://tiimg.tistatic.com/fp/1/009/071/high-quality-spur-gears-009.jpg",
      description: "Standard cylindrical gears with straight teeth, ideal for parallel shaft applications"
    },
    {
      id: 2,
      name: "Helical Gear",
      image: "https://www.reliablegears.in/assets/img/products/Gears_Home/Pro_Home_Helical%20Gears.jpg",
      description: "Teeth cut at an angle for smoother and quieter operation compared to spur gears"
    },
    {
      id: 3,
      name: "Bevel Gear",
      image: "https://medital.com/cdn/shop/products/RELIANCE_bevel_gears.jpg?v=1468321133",
      description: "Conical shaped gears designed for power transmission between non-parallel shafts"
    },
    {
      id: 4,
      name: "Worm Gear",
      image: "https://sc04.alicdn.com/kf/H9dd4cd93beb74aa59f7786fe91bfb4b8V.jpg",
      description: "Screw-like gear that meshes with a worm wheel for high reduction ratios"
    },
    {
      id: 5,
      name: "Planetary Gear",
      image: "https://media.istockphoto.com/id/503889417/photo/planetary-reducer-from-metallic-gear-on-white-background.jpg?s=612x612&w=0&k=20&c=PHbc5MLC8dPNGM1BmgIFsLsTU_NiNGchCqOFjVopfDQ=",
      description: "Multiple gears orbiting around a central gear, providing compact power transmission"
    },
    {
      id: 6,
      name: "Rack and Pinion",
      image: "https://www.amrutgearsindustries.com/gears/rack/rack-pinion_gears.jpg",
      description: "A gear that engages with a linear toothed bar to convert rotary motion to linear motion"
    },
    {
      id: 7,
      name: "Internal Gear",
      image: "https://pateloverseas.in/static/images/Internal%20Gear/Internal%20Gear.png",
      description: "Ring-shaped gear with teeth cut internally, used for compact gear arrangements"
    },
    {
      id: 8,
      name: "Miter Gear",
      image: "https://tiimg.tistatic.com/fp/1/005/433/miter-bevel-gears-for-automobile-205.jpg",
      description: "Special bevel gears with equal numbers of teeth for 90-degree shaft angles"
    },
    {
      id: 9,
      name: "Hypoid Gear",
      image: "https://www.asarengineering.com/uploaded-files/category/images/thumbs/Hypoid-Gear-thumbs-450X450.jpg",
      description: "Advanced spiral bevel gears with offset axes for smooth power transmission"
    }
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "5rem" }}>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "2rem",
            fontSize: "1rem",
          }}
        >
          ← Back
        </button>

        {/* Page Title */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          Gear Work
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: "#666",
            marginBottom: "3rem",
          }}
        >
          Precision engineering with 9 types of high-quality gears
        </p>

        {/* Gear Types Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {gearTypes.map((gear) => (
            <div
              key={gear.id}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              {/* Image Container */}
              <div
                style={{
                  height: "280px",
                  width: "100%",
                  overflow: "hidden",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={gear.image}
                  alt={gear.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              {/* Content Container */}
              <div
                style={{
                  padding: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#333",
                    marginBottom: "0.5rem",
                    textAlign: "center",
                  }}
                >
                  {gear.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#666",
                    lineHeight: "1.5",
                  }}
                >
                  {gear.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "1rem", color: "#333" }}>
            About Our Gear Work Services
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555", marginBottom: "1rem" }}>
            We specialize in precision gear manufacturing and tooling services. Our expertise encompasses
            a wide range of gear types and specifications to meet your industrial requirements.
          </p>

          <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#333", marginTop: "1.5rem" }}>
            Our Capabilities:
          </h3>
          <ul style={{ fontSize: "1rem", lineHeight: "1.8", color: "#555", marginLeft: "2rem" }}>
            <li>Precision gear cutting and manufacturing</li>
            <li>Custom gear design and development</li>
            <li>High-precision tooling</li>
            <li>Quality assurance and testing</li>
            <li>Fast turnaround times</li>
            <li>Competitive pricing</li>
          </ul>

          <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: "#333", marginTop: "1.5rem" }}>
            Applications:
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
            Our gear work is suitable for industrial machinery, automotive applications, power transmission
            systems, and various mechanical equipment requiring precision components.
          </p>
        </div>

        {/* Contact CTA */}
        <div
          style={{
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "12px",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>
            Need Gear Work Services?
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
            Contact us today for a quote or to discuss your specific requirements.
          </p>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={{
              backgroundColor: "white",
              color: "#007bff",
              border: "none",
              padding: "0.75rem 2rem",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default GearWork;
