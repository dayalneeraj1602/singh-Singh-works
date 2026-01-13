import React from "react";

const Manufacturing = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "https://www.betterceramic.com/wp-content/uploads/2020/05/Alumina-ceramic-tube-and-rod-5.jpg",
      productTitle: "Ceramic Tube",
    },
    {
      id: 2,
      imgUrl:
        "https://www.processparameters.co.uk/wp-content/uploads/2019/07/explaining-how-does-a-thermocouple-work.jpg",
      productTitle: "Thermocouple",
    },
    {
      id: 3,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Coupler Set",
    },
    {
      id: 4,
      imgUrl:
        "https://image.made-in-china.com/2f0j00KwUiuAphhfqQ/High-Electrical-Insulating-Iroperties-Alumina-Tube-Ceramic-Pipe-Ceramic-Rollers-for-Glass-Tempering-Furnace-Kiln.jpg",
      productTitle: "Ceramic Roller",
    },
    {
      id: 5,
      imgUrl:
        "https://2.imimg.com/data2/JK/KJ/MY-/anchors-for-ceramic-fibre-l-1000x1000.jpg",
      productTitle: "Fiber Stud Washer",
    },
    {
      id: 6,
      imgUrl:
        "https://file2.okorder.com/prodalbum/2014/12/16/e9eec9f3c22d628862540d9bf62f76bd.jpg",
      productTitle: "Module Anchor",
      ProductDescription: "S.S 304 & S.S. 310",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "5rem" }}>
        <h2 style={{ 
          textAlign: "center", 
          fontSize: "2rem", 
          fontWeight: "bold", 
          marginBottom: "3rem",
          letterSpacing: "2px"
        }}>
          Manufacturing
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

export default Manufacturing;