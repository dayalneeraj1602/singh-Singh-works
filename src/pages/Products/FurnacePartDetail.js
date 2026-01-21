import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const FurnacePartDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const partId = parseInt(id);

  const partDetails = {
    1: {
      title: "DC Motor",
      image: "https://image.made-in-china.com/2f0j00cCjQkJBPQMoy/Three-Phase-Induction-Motor-Y3-.jpg",
      description: "High-performance DC motors designed for furnace applications with precise speed control.",
      specifications: {
        "Power Range": "1 kW - 50 kW",
        "Voltage": "24V - 440V DC",
        "Speed Range": "500 - 3000 RPM",
        "Efficiency": "85-92%",
        "Torque": "High torque capability",
        "Temperature Rating": "Up to 120°C",
      },
      features: [
        "Precise speed control",
        "High torque at low speeds",
        "Reliable performance",
        "Compact design",
        "Long service life",
        "Low noise operation",
      ],
      applications: [
        "Furnace blowers",
        "Material handling",
        "Conveyor systems",
        "Heating equipment",
        "Industrial machinery",
      ],
    },
    2: {
      title: "AC Motor",
      image: "https://5.imimg.com/data5/TP/QT/MY-125053/single-phase-ac-motors-500x500.jpg",
      description: "Efficient AC motors for furnace operations with single or three-phase options.",
      specifications: {
        "Power Range": "0.5 kW - 100 kW",
        "Voltage": "230V - 440V AC",
        "Frequency": "50/60 Hz",
        "Speed": "Fixed or variable speed",
        "Efficiency": "88-95%",
        "Temperature Rating": "Up to 130°C",
      },
      features: [
        "Energy efficient",
        "Robust construction",
        "Low maintenance",
        "Reliable operation",
        "Wide power range",
        "Thermal protection",
      ],
      applications: [
        "Furnace blowers",
        "Heating elements",
        "Material circulation",
        "Industrial processes",
        "Ventilation systems",
      ],
    },
    3: {
      title: "Gear Box with Motor",
      image: "https://samdex.eu/wp-content/uploads/2019/11/C.2.5Helical-worm-geared-motors015.jpg",
      description: "Integrated gear box and motor combinations for efficient power transmission in furnace systems.",
      specifications: {
        "Reduction Ratio": "5:1 - 150:1",
        "Input Power": "1 - 30 kW",
        "Output Torque": "High torque output",
        "Efficiency": "90-95%",
        "Mounting": "Flange or foot mount",
        "Operating Temperature": "Up to 100°C ambient",
      },
      features: [
        "Compact integrated design",
        "High reduction ratios",
        "Smooth operation",
        "Precision engineering",
        "Self-lubricating",
        "Quiet performance",
      ],
      applications: [
        "Furnace rotation systems",
        "Material feeding",
        "Conveyor drives",
        "Heating element positioning",
        "Mechanical power transmission",
      ],
    },
    4: {
      title: "Gear Box",
      image: "https://www.santramengineers.com/wp-content/uploads/2020/06/Worm-Geaarboxes-thumbb.jpg",
      description: "Industrial-grade gear boxes providing reliable speed reduction and torque multiplication.",
      specifications: {
        "Types": "Worm, Helical, Bevel",
        "Reduction Ratio": "5:1 - 300:1",
        "Output Torque": "Up to 50,000 Nm",
        "Efficiency": "85-98%",
        "Material": "Cast iron/Aluminum",
        "Lubrication": "Oil-cooled",
      },
      features: [
        "Multiple gear types",
        "High torque output",
        "Durable construction",
        "Efficient power transmission",
        "Wide ratio selection",
        "Low noise levels",
      ],
      applications: [
        "Furnace drive systems",
        "Heavy machinery",
        "Industrial equipment",
        "Power transmission",
        "Mechanical systems",
      ],
    },
    5: {
      title: "AC Drive",
      image: "https://img2.exportersindia.com/product_images/bc-full/dir_112/3351704/vtdrive-high-performance-ac-drives-380v-3-phase-1527516.jpg",
      description: "Variable frequency drives for precise AC motor control in furnace applications.",
      specifications: {
        "Power Range": "0.5 kW - 200 kW",
        "Input Voltage": "380V - 440V, 3-phase",
        "Output Frequency": "0 - 400 Hz",
        "Control": "Programmable",
        "Efficiency": "96-98%",
        "Protection": "Multiple safety features",
      },
      features: [
        "Variable speed control",
        "Energy saving",
        "Soft start capability",
        "Overload protection",
        "Digital display",
        "Programmable parameters",
      ],
      applications: [
        "Furnace ventilation control",
        "Fan speed regulation",
        "Temperature management",
        "Industrial automation",
        "Energy optimization",
      ],
    },
    6: {
      title: "DC Drive",
      image: "https://5.imimg.com/data5/PA/SP/NK/SELLER-5944088/parker-598g-dc-drive.jpg",
      description: "Advanced DC drives for precise motor speed and torque control.",
      specifications: {
        "Power Range": "1 kW - 150 kW",
        "Input Voltage": "110V - 440V DC",
        "Output Current": "Adjustable",
        "Control Method": "4-quadrant regenerative",
        "Efficiency": "92-97%",
        "Response Time": "Fast dynamic response",
      },
      features: [
        "Precise speed control",
        "High performance",
        "Smooth acceleration",
        "Energy recovery capability",
        "Compact design",
        "Reliable operation",
      ],
      applications: [
        "Furnace motor control",
        "Material handling",
        "Conveyor systems",
        "Industrial processes",
        "Precision applications",
      ],
    },
    7: {
      title: "Control Panel",
      image: "https://5.imimg.com/data5/CW/BO/CW/SELLER-85655579/furnace-control-panel-500x500.jpg",
      description: "Comprehensive control panels for managing all furnace operations and safety systems.",
      specifications: {
        "Voltage": "110V - 440V, AC/DC",
        "Capacity": "Customizable",
        "Features": "Timer, Display, Safety switches",
        "Protection": "Overload, Short circuit, Thermal",
        "Certifications": "ISI, IEC, CE",
        "Customization": "Fully programmable",
      },
      features: [
        "Easy operation",
        "Multiple controls",
        "Digital display",
        "Safety interlocks",
        "Customizable settings",
        "Emergency stop button",
      ],
      applications: [
        "Furnace operation",
        "Temperature control",
        "Safety management",
        "Automation control",
        "Industrial monitoring",
      ],
    },
    8: {
      title: "Temperature Indicator",
      image: "https://4.imimg.com/data4/XV/YM/MY-2046773/furnace-temperature-indicator-250x250.png",
      description: "Precision temperature indicators for accurate furnace temperature monitoring.",
      specifications: {
        "Temperature Range": "-20°C to 1600°C",
        "Input": "Thermocouple/RTD",
        "Display": "Digital LCD",
        "Accuracy": "±0.5% of range",
        "Response Time": "< 1 second",
        "Power Supply": "24V DC/AC",
      },
      features: [
        "High accuracy",
        "Large digital display",
        "Multiple sensor types",
        "Fast response",
        "Reliable measurement",
        "Easy calibration",
      ],
      applications: [
        "Furnace temperature monitoring",
        "Process control",
        "Quality assurance",
        "Safety systems",
        "Data logging",
      ],
    },
    9: {
      title: "Temperature Controller",
      image: "https://m.media-amazon.com/images/I/41RwgwBVLmL.jpg",
      description: "Advanced temperature controllers for precise furnace temperature regulation.",
      specifications: {
        "Control Type": "PID/On-Off",
        "Temperature Range": "-20°C to 1800°C",
        "Accuracy": "±0.1% of reading",
        "Power Output": "Relay/SSR/4-20mA",
        "Display": "LED/LCD",
        "Programming": "Full programmable cycles",
      },
      features: [
        "Precise temperature control",
        "Programmable setpoints",
        "Multiple control algorithms",
        "Alarm functions",
        "Data logging capability",
        "User-friendly interface",
      ],
      applications: [
        "Furnace temperature management",
        "Heat treatment cycles",
        "Process automation",
        "Industrial heating",
        "Research applications",
      ],
    },
    10: {
      title: "Insulation Brick (Hot Face)",
      image: "https://3.imimg.com/data3/DK/QD/MY-7176933/hot-face-insulation-bricks-500x500.jpg",
      description: "High-quality insulation bricks for furnace hot face applications.",
      specifications: {
        "Material": "Ceramic/Refractory",
        "Temperature Rating": "Up to 1600°C",
        "Thermal Conductivity": "Low thermal loss",
        "Density": "1.8 - 2.2 g/cm³",
        "Size": "Standard/Custom",
        "Compressive Strength": "High",
      },
      features: [
        "High temperature resistance",
        "Excellent thermal insulation",
        "Long lifespan",
        "Easy installation",
        "Minimal thermal loss",
        "Durable construction",
      ],
      applications: [
        "Furnace lining",
        "High-temperature protection",
        "Thermal insulation",
        "Industrial furnaces",
        "Heat retention",
      ],
    },
    11: {
      title: "Insulation Brick (Cold Face)",
      image: "https://th.bing.com/th/id/OIP.HFTuTSnnR-17oSa4-egl0wHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      description: "Durable cold face insulation bricks for furnace outer surface protection.",
      specifications: {
        "Material": "Ceramic fiber/Refractory",
        "Temperature Rating": "Up to 1200°C",
        "Thermal Conductivity": "Very low",
        "Density": "0.8 - 1.2 g/cm³",
        "Size": "Modular",
        "Installation": "Easy mortarless",
      },
      features: [
        "Lightweight design",
        "Excellent insulation",
        "Easy replacement",
        "Consistent performance",
        "Low thermal conductivity",
        "Cost-effective",
      ],
      applications: [
        "Furnace outer lining",
        "Cold surface protection",
        "Thermal efficiency",
        "Energy savings",
        "Industrial applications",
      ],
    },
    12: {
      title: "HFK Bricks",
      image: "https://3.imimg.com/data3/WF/YQ/MY-2185590/insulation-bricks-500x500.jpg",
      description: "High-performance HFK (High Fired Kaolin) bricks for superior furnace insulation.",
      specifications: {
        "Material": "High Fired Kaolin",
        "Temperature Rating": "Up to 1500°C",
        "Thermal Conductivity": "0.5 - 0.8 W/m·K",
        "Density": "1.7 - 1.9 g/cm³",
        "Porosity": "20-25%",
        "Compressive Strength": "Very high",
      },
      features: [
        "Superior thermal properties",
        "High mechanical strength",
        "Excellent durability",
        "Low shrinkage",
        "High refractoriness",
        "Consistent quality",
      ],
      applications: [
        "Furnace linings",
        "High-temperature zones",
        "Thermal protection",
        "Industrial furnaces",
        "Extended furnace life",
      ],
    },
    13: {
      title: "Ceramic Fiber Board",
      image: "https://2.wlimg.com/product_images/bc-full/2021/8/207467/cold-face-insulation-bricks-1629280462-5024883.jpeg",
      description: "Lightweight ceramic fiber boards for efficient furnace insulation.",
      specifications: {
        "Material": "Ceramic Fiber",
        "Temperature Rating": "Up to 1500°C",
        "Density": "0.4 - 0.8 g/cm³",
        "Thermal Conductivity": "Very low",
        "Size": "Customizable",
        "Thickness": "25 - 100 mm",
      },
      features: [
        "Extremely lightweight",
        "Excellent insulation",
        "Easy to cut and shape",
        "Rapid installation",
        "Energy efficient",
        "Long service life",
      ],
      applications: [
        "Furnace insulation",
        "Backpack layers",
        "Hot face protection",
        "Industrial heating",
        "Temperature containment",
      ],
    },
    14: {
      title: "Fiber Blanket",
      image: "https://th.bing.com/th/id/OIP.jCGG0QTKpOeVM8bzWkMLGAAAAA?pid=ImgDet&rs=1",
      description: "Flexible ceramic fiber blankets for furnace insulation and sealing applications.",
      specifications: {
        "Material": "Ceramic Fiber",
        "Temperature Rating": "Up to 1600°C",
        "Density": "0.3 - 0.6 g/cm³",
        "Width": "600 - 1200 mm",
        "Thickness": "10 - 50 mm",
        "Thermal Conductivity": "Minimal",
      },
      features: [
        "Flexible design",
        "Easy installation",
        "Excellent thermal insulation",
        "Lightweight construction",
        "Reusable material",
        "Superior insulation value",
      ],
      applications: [
        "Furnace wrapping",
        "Gap sealing",
        "Temperature insulation",
        "Thermal protection",
        "Industrial applications",
      ],
    },
  };

  const part = partDetails[partId];

  if (!part) {
    return (
      <div style={{ textAlign: "center", padding: "5rem 1rem", minHeight: "100vh" }}>
        <h1>Part not found</h1>
        <button
          onClick={() => navigate("/services/FurnaceParts")}
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
          Back to Furnace Parts
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "5rem" }}>
        {/* Back Button */}
        <button
          onClick={() => navigate("/services/FurnaceParts")}
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
          ← Back to Furnace Parts
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
          {part.title}
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
            src={part.image}
            alt={part.title}
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
            About this Part
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.8", color: "#555" }}>
            {part.description}
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
            {Object.entries(part.specifications).map(([key, value]) => (
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
            {part.features.map((feature, index) => (
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
            {part.applications.map((app, index) => (
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
            Need this Part?
          </h2>
          <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
            Contact us today for pricing, availability, and technical specifications.
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

export default FurnacePartDetail;
