import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const FurnaceDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const furnaceDetails = {
    1: {
      title: "Shuttle Kiln Furnaces",
      image: "https://keramo.in/upload/p/SHUTTLE%20KILN.jpg",
      description: "Advanced shuttle kiln furnaces designed for high-temperature processing and material treatment.",
      specifications: {
        "Temperature Range": "500-1200°C",
        "Power Source": "Electric",
        "Type": "Shuttle Type",
        "Loading Capacity": "500-1000 kg",
        "Rated Power": "15-25 kW",
        "Input Voltage": "415V, 3-phase",
      },
      features: [
        "Uniform temperature distribution",
        "Programmable control system",
        "Energy-efficient design",
        "Durable refractory lining",
        "Easy loading and unloading",
        "Precise temperature control",
      ],
      applications: [
        "Ceramic processing",
        "Heat treatment of metals",
        "Material testing and research",
        "Industrial heat treatment",
        "Laboratory applications",
      ],
    },
    2: {
      title: "Roller Furnace",
      image: "https://5.imimg.com/data5/PR/IJ/OS/SELLER-36709685/roller-hearth-furnace-500x500.jpg",
      description: "High-capacity roller furnaces for continuous material processing with precision temperature control.",
      specifications: {
        "Temperature Range": "500-1200°C",
        "Power Source": "Electric",
        "Type": "Roller Hearth",
        "Loading Capacity": "3-4 Tons",
        "Rated Power": "30-40 kW",
        "Input Voltage": "415V, 3-phase",
      },
      features: [
        "Continuous material movement",
        "Even heat distribution",
        "Robust roller system",
        "Multiple temperature zones",
        "Automated control",
        "High throughput capacity",
      ],
      applications: [
        "Steel heat treatment",
        "Ceramic firing",
        "Glass processing",
        "Metal hardening",
        "Continuous production lines",
      ],
    },
    3: {
      title: "Gas Fire Furnace",
      image: "https://5.imimg.com/data5/TR/SX/QC/SELLER-36709685/gas-fire-furnace-500x500.jpg",
      description: "Efficient gas-fired furnaces providing high heat output for industrial heating applications.",
      specifications: {
        "Temperature Range": "600-1500°C",
        "Power Source": "Natural Gas/LPG",
        "Type": "Gas Fired",
        "Loading Capacity": "1-2 Tons",
        "Heat Output": "100,000-200,000 BTU/hr",
        "Efficiency": "85-90%",
      },
      features: [
        "High heat efficiency",
        "Quick temperature rise",
        "Reliable combustion",
        "Adjustable flame control",
        "Durable construction",
        "Low maintenance requirements",
      ],
      applications: [
        "Forging operations",
        "Metal melting",
        "Heat treatment",
        "Annealing processes",
        "Industrial heating",
      ],
    },
    4: {
      title: "Open Forging Furnace",
      image: "https://5.imimg.com/data5/ZR/EG/OK/ANDROID-36709685/product-jpeg-500x500.jpg",
      description: "Specialized furnaces for open forging operations with high temperature capacity.",
      specifications: {
        "Temperature Range": "800-1500°C",
        "Power Source": "Electric or Gas",
        "Type": "Open Forging",
        "Loading Capacity": "2-5 Tons",
        "Rated Power": "25-50 kW",
        "Working Area": "Customizable",
      },
      features: [
        "High temperature capacity",
        "Open top design for easy handling",
        "Uniform heating throughout",
        "Quick heating time",
        "Durable refractory materials",
        "Adjustable temperature control",
      ],
      applications: [
        "Metal forging",
        "Tool manufacturing",
        "Die making",
        "Hot metal handling",
        "Industrial metal work",
      ],
    },
    5: {
      title: "Heat Treatment Furnace",
      image: "https://5.imimg.com/data5/KZ/UJ/CX/ANDROID-36709685/product-jpeg-500x500.jpg",
      description: "Precision heat treatment furnaces for controlled metal processing and material conditioning.",
      specifications: {
        "Temperature Range": "300-1000°C",
        "Power Source": "Electric",
        "Type": "Heat Treatment",
        "Loading Capacity": "500 kg - 1 Ton",
        "Rated Power": "15-20 kW",
        "Precision": "±5°C",
      },
      features: [
        "Precise temperature control",
        "Programmable cycles",
        "Digital display",
        "Multiple heating zones",
        "Safety interlocks",
        "Uniform heat distribution",
      ],
      applications: [
        "Steel hardening",
        "Tempering processes",
        "Annealing operations",
        "Material conditioning",
        "Quality testing",
      ],
    },
    6: {
      title: "Heat Treating And Forging Furnace",
      image: "https://5.imimg.com/data5/VQ/QT/LW/ANDROID-36709685/product-jpeg-500x500.jpg",
      description: "Versatile furnaces combining both heat treating and forging capabilities.",
      specifications: {
        "Temperature Range": "400-1500°C",
        "Power Source": "Electric",
        "Type": "Dual Purpose",
        "Loading Capacity": "1-3 Tons",
        "Rated Power": "30-50 kW",
        "Input Voltage": "415V, 3-phase",
      },
      features: [
        "Dual functionality",
        "High temperature capacity",
        "Flexible design",
        "Efficient heating",
        "Durable construction",
        "Easy operation",
      ],
      applications: [
        "Metal forging",
        "Heat treatment",
        "Tool and die making",
        "Metal conditioning",
        "Industrial processing",
      ],
    },
    7: {
      title: "Open Forging Furnaces",
      image: "https://5.imimg.com/data5/AG/GB/CQ/SELLER-36709685/open-forging-furnaces-500x500.jpg",
      description: "Industrial-grade open forging furnaces for heavy-duty metal processing.",
      specifications: {
        "Temperature Range": "1000-1500°C",
        "Power Source": "Electric",
        "Type": "Open Forging",
        "Loading Capacity": "3-6 Tons",
        "Rated Power": "30 kW",
        "Input Voltage": "440V, 3-phase",
      },
      features: [
        "Heavy-duty construction",
        "Extremely high temperature",
        "Large working area",
        "Quick heating",
        "Reinforced refractory",
        "Industrial reliability",
      ],
      applications: [
        "Heavy metal forging",
        "Large component manufacturing",
        "Tool making",
        "Industrial metal work",
        "Production forging",
      ],
    },
    8: {
      title: "Industrial Heat Treatment Furnace",
      image: "https://5.imimg.com/data5/KF/DT/CM/SELLER-36709685/industrial-heat-treatment-furnace-500x500.png",
      description: "Robust industrial heat treatment furnaces for large-scale metal processing.",
      specifications: {
        "Temperature Range": "500-1200°C",
        "Power Source": "Electric",
        "Type": "Industrial Heat Treatment",
        "Loading Capacity": "2-4 Tons",
        "Rated Power": "20-30 kW",
        "Input Voltage": "415V, 3-phase",
      },
      features: [
        "Industrial-grade construction",
        "Precise temperature control",
        "Multiple heating zones",
        "Automated systems",
        "Safety features",
        "Long service life",
      ],
      applications: [
        "Metal hardening",
        "Annealing",
        "Tempering",
        "Case hardening",
        "Industrial conditioning",
      ],
    },
    9: {
      title: "High Temperature Muffle Furnace",
      image: "https://5.imimg.com/data5/PL/AK/LD/SELLER-36709685/muffle-furnace-500x500.png",
      description: "Specialized muffle furnaces for high-temperature applications requiring isolation.",
      specifications: {
        "Temperature Range": "500-1500°C",
        "Power Source": "Electric",
        "Type": "Muffle",
        "Chamber Volume": "50-100 liters",
        "Rated Power": "15 kW",
        "Input Voltage": "415V, 3-phase",
      },
      features: [
        "Muffle design for isolation",
        "High temperature capacity",
        "Uniform heating",
        "Oxygen isolation",
        "Precise control",
        "Compact design",
      ],
      applications: [
        "Material testing",
        "Sintering",
        "Calcination",
        "Oxidation prevention",
        "Research applications",
      ],
    },
    10: {
      title: "Industrial Heat Treatment Furnaces",
      image: "https://5.imimg.com/data5/OD/MU/OP/ANDROID-36709685/product-jpeg-500x500.jpg",
      description: "Comprehensive industrial heat treatment solutions for various metal processing needs.",
      specifications: {
        "Temperature Range": "500-1000°C",
        "Power Source": "Electric",
        "Type": "Industrial",
        "Loading Capacity": "2-3 Tons",
        "Rated Power": "15 kW",
        "Input Voltage": "415V, 3-phase",
      },
      features: [
        "Reliable performance",
        "Energy efficient",
        "User-friendly controls",
        "Safe operation",
        "Durable design",
        "Cost-effective",
      ],
      applications: [
        "Heat treatment",
        "Metal conditioning",
        "Quality testing",
        "Industrial processing",
        "Research labs",
      ],
    },
    11: {
      title: "Box Furnaces",
      image: "https://5.imimg.com/data5/RE/EK/AO/ANDROID-36709685/product-jpeg-500x500.jpg",
      description: "Compact box furnaces ideal for laboratory and small-scale industrial applications.",
      specifications: {
        "Temperature Range": "500-1000°C",
        "Power Source": "Electric",
        "Type": "Box Type",
        "Chamber Volume": "30-50 liters",
        "Rated Power": "5 kW",
        "Input Voltage": "415V, 3-phase",
      },
      features: [
        "Compact design",
        "Easy operation",
        "Space-saving",
        "Precise temperature control",
        "Safe enclosure",
        "Affordable pricing",
      ],
      applications: [
        "Laboratory testing",
        "Small batch processing",
        "Sample preparation",
        "Material testing",
        "Educational use",
      ],
    },
    12: {
      title: "Thermal Sytech Furnaces",
      image: "https://5.imimg.com/data5/KW/XN/KK/SELLER-36709685/electric-aluminum-heat-treatment-furnace-500x500.jpg",
      description: "Advanced thermal processing furnaces with state-of-the-art technology.",
      specifications: {
        "Temperature Range": "Room Temp - 1500°C",
        "Power Source": "Electric",
        "Type": "Advanced Thermal",
        "Loading Capacity": "1-2 Tons",
        "Rated Power": "80 kW",
        "Input Voltage": "440V, 3-phase",
      },
      features: [
        "Advanced technology",
        "High efficiency",
        "Programmable controls",
        "Multiple heating zones",
        "Data logging",
        "Remote monitoring",
      ],
      applications: [
        "Aluminum processing",
        "Metal conditioning",
        "Aerospace applications",
        "Precision manufacturing",
        "Research and development",
      ],
    },
    13: {
      title: "Pit Pot Furnace",
      image: "https://5.imimg.com/data5/OF/QX/RT/SELLER-36709685/pit-pot-furnace-500x500.jpg",
      description: "Heavy-duty pit furnaces for continuous industrial metal processing.",
      specifications: {
        "Temperature Range": "500-1200°C",
        "Power Source": "Electric",
        "Type": "Pit Pot",
        "Loading Capacity": "2-5 Tons",
        "Rated Power": "80 kW",
        "Input Voltage": "440V, 3-phase",
      },
      features: [
        "Underground installation",
        "Large capacity",
        "Continuous operation",
        "Robust construction",
        "Space-efficient",
        "High performance",
      ],
      applications: [
        "Continuous production",
        "Batch processing",
        "Metal conditioning",
        "Large component heating",
        "Industrial manufacturing",
      ],
    },
  };

  const furnace = furnaceDetails[id];

  if (!furnace) {
    return (
      <div style={{ textAlign: "center", padding: "5rem 1rem", minHeight: "100vh" }}>
        <h1>Furnace not found</h1>
        <button
          onClick={() => navigate("/services/furnace")}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "0.75rem 1.5rem",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Back to Furnaces
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "5rem" }}>
        {/* Back Button */}
        <button
          onClick={() => navigate("/services/furnace")}
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
          ← Back to Furnaces
        </button>

        {/* Page Title */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#333",
          }}
        >
          {furnace.title}
        </h1>

        {/* Main Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <img
            src={furnace.image}
            alt={furnace.title}
            style={{
              maxWidth: "600px",
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              height: "auto",
            }}
          />
        </div>

        {/* Description */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#333" }}>
            About this Furnace
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#555" }}>
            {furnace.description}
          </p>
        </div>

        {/* Specifications */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem", color: "#333" }}>
            Specifications
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
            }}
          >
            {Object.entries(furnace.specifications).map(([key, value]) => (
              <div
                key={key}
                style={{
                  padding: "1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  borderLeft: "4px solid #007bff",
                }}
              >
                <p style={{ fontSize: "0.9rem", color: "#666", margin: "0 0 0.5rem 0" }}>
                  {key}
                </p>
                <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#333", margin: "0" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#333" }}>
            Key Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {furnace.features.map((feature, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    marginRight: "1rem",
                    color: "#007bff",
                  }}
                >
                  ✓
                </span>
                <p style={{ margin: "0", color: "#555", fontSize: "0.95rem" }}>
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "2rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#333" }}>
            Applications
          </h2>
          <ul style={{ fontSize: "1rem", lineHeight: "1.8", color: "#555", marginLeft: "2rem" }}>
            {furnace.applications.map((app, index) => (
              <li key={index} style={{ marginBottom: "0.5rem" }}>
                {app}
              </li>
            ))}
          </ul>
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
            Interested in this Furnace?
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
            Contact us today for pricing, specifications, and to place your order.
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

export default FurnaceDetail;
