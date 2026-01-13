import React from "react";

const MetalToolRoom = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "https://img.freepik.com/free-photo/industry-lathe-machine-work_44762-848.jpg?size=626&ext=jpg",
      productTitle: "Lathe Work",
    },
    {
      id: 2,
      imgUrl:
        "https://ak5.picdn.net/shutterstock/videos/1023514465/thumb/1.jpg",
      productTitle: "Milling Work",
    },
    {
      id: 3,
      imgUrl:
        "https://lirp.cdn-website.com/1a47db05/dms3rep/multi/opt/home-c2-213x213-426w.jpg",
      productTitle: "Drilling Work",
    },
    {
      id: 4,
      imgUrl:
        "https://www.bosch-pt.co.in/binary/ocsmedia/optimized/full/o396235v117_gws_800_appl_05_T6.jpg",
      productTitle: "Grinding Work",
    },
    {
      id: 5,
      imgUrl:
        "https://5.imimg.com/data5/KH/NF/SP/SELLER-876530/industrial-hard-chrome-plated-roller-500x500.JPG",
      productTitle: "Hard Chrome",
    },
    {
      id: 6,
      imgUrl:
        "https://toolbox.igus.com/wp-content/uploads/2024/06/3DP_PROD_3D_printed_gears_iglidur_i3_DE_1.jpg",
      productTitle: "Gear Work",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "5rem" }}>
        <h2 style={{ 
          textAlign: "center", 
          fontSize: "2rem", 
          fontWeight: "bold", 
          marginBottom: "3rem"
        }}>
          Metal Tool Room
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "2rem", 
          justifyItems: "center" 
        }}>
          {dataInfo.map((item) => (
            <div
              key={item.id}
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
              {item.ProductDescription && (
                <p style={{ 
                  textAlign: "center", 
                  padding: "0 1rem",
                  color: "#6c757d",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem"
                }}>
                  {item.ProductDescription}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetalToolRoom;