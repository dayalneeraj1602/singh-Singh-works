import React from "react";
import { useNavigate } from "react-router-dom";

const FurnaceParts = () => {
  const navigate = useNavigate();
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "https://image.made-in-china.com/2f0j00cCjQkJBPQMoy/Three-Phase-Induction-Motor-Y3-.jpg",
      productTitle: "Dc Motor",
    },
    {
      id: 2,
      imgUrl:
        "https://5.imimg.com/data5/TP/QT/MY-125053/single-phase-ac-motors-500x500.jpg",
      productTitle: "AC Motor",
    },
    {
      id: 3,
      imgUrl:
        "https://samdex.eu/wp-content/uploads/2019/11/C.2.5Helical-worm-geared-motors015.jpg",
      productTitle: "Gear Box with Motor",
    },
    {
      id: 4,
      imgUrl:
        "https://www.santramengineers.com/wp-content/uploads/2020/06/Worm-Geaarboxes-thumbb.jpg",
      productTitle: "Gear Box",
    },
    {
      id: 5,
      imgUrl:
        "https://img2.exportersindia.com/product_images/bc-full/dir_112/3351704/vtdrive-high-performance-ac-drives-380v-3-phase-1527516.jpg",
      productTitle: "AC Drive",
    },
    {
      id: 6,
      imgUrl:
        "https://5.imimg.com/data5/PA/SP/NK/SELLER-5944088/parker-598g-dc-drive.jpg",
      productTitle: "DC Drive",
    },
    {
      id: 7,
      imgUrl:
        "https://5.imimg.com/data5/CW/BO/CW/SELLER-85655579/furnace-control-panel-500x500.jpg",
      productTitle: "Control Panel",
    },
    {
      id: 8,
      imgUrl:
        "https://4.imimg.com/data4/XV/YM/MY-2046773/furnace-temperature-indicator-250x250.png",
      productTitle: "Temperature Indicator",
    },
    {
      id: 9,
      imgUrl: "https://m.media-amazon.com/images/I/41RwgwBVLmL.jpg",
      productTitle: "Temperature Controller",
    },
    {
      id: 10,
      imgUrl:
        "https://3.imimg.com/data3/DK/QD/MY-7176933/hot-face-insulation-bricks-500x500.jpg",
      productTitle: "Insulation Brick (Hot Face)",
    },
    {
      id: 11,
      imgUrl:
        "https://th.bing.com/th/id/OIP.HFTuTSnnR-17oSa4-egl0wHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      productTitle: "Insulation Brick (Cold Face)",
    },
    {
      id: 12,
      imgUrl:
        "https://3.imimg.com/data3/WF/YQ/MY-2185590/insulation-bricks-500x500.jpg",
      productTitle: "HFK Bricks",
    },
    {
      id: 13,
      imgUrl:
        "https://2.wlimg.com/product_images/bc-full/2021/8/207467/cold-face-insulation-bricks-1629280462-5024883.jpeg",
      productTitle: "Ceramic Fiber Board",
    },
    {
      id: 14,
      imgUrl:
        "https://th.bing.com/th/id/OIP.jCGG0QTKpOeVM8bzWkMLGAAAAA?pid=ImgDet&rs=1",
      productTitle: "Fiber Blanket",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "5rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginBottom: "3rem" }}>
          Furnace Parts
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", justifyItems: "center" }}>
          {dataInfo.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/furnace-part/${item.id}`)}
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
                e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.15)";
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
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FurnaceParts;