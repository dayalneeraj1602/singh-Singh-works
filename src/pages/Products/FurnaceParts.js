import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    <>
      <style>{`
        .furnace-parts-container {
          background: linear-gradient(180deg, #ffffff 0%, #f9fafb 50%, #f3f4f6 100%);
          padding: 5rem 1rem;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .furnace-parts-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .furnace-parts-container::after {
          content: '';
          position: absolute;
          bottom: 5%;
          right: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .furnace-parts-section {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
        .furnace-parts-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .furnace-parts-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.08));
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #2563eb;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          backdrop-filter: blur(10px);
        }

        .furnace-parts-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0.5rem 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .furnace-parts-title .highlight {
          color: #3b82f6;
          position: relative;
        }

        .furnace-parts-title .highlight::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 2px;
        }

        .furnace-parts-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .furnace-parts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .furnace-part-card {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          overflow: hidden;
          max-width: 350px;
          width: 100%;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .furnace-part-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .furnace-part-img-container {
          height: 300px;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .furnace-part-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .furnace-part-content {
          padding: 2rem 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .furnace-part-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1f2937;
          text-align: center;
          margin: 0;
          line-height: 1.4;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .furnace-parts-container {
            padding: 3rem 1rem;
          }

          .furnace-parts-title {
            font-size: 2rem;
          }

          .furnace-parts-subtitle {
            font-size: 1rem;
          }

          .furnace-parts-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .furnace-part-card {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .furnace-parts-container {
            padding: 2rem 1rem;
            margin-top: 3rem;
          }

          .furnace-parts-title {
            font-size: 1.5rem;
          }

          .furnace-parts-subtitle {
            font-size: 0.9rem;
          }

          .furnace-parts-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .furnace-part-img-container {
            height: 250px;
          }

          .furnace-part-content {
            padding: 1.5rem;
          }

          .furnace-part-title {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="furnace-parts-container">
        <div className="furnace-parts-section">
          {/* Section Header */}
          <div className="furnace-parts-header">
            <span className="furnace-parts-badge">Industrial Components</span>
            <h2 className="furnace-parts-title">
              Furnace <span className="highlight">Parts</span>
            </h2>
            <p className="furnace-parts-subtitle">
              Premium quality components and parts for industrial furnace systems and heating solutions
            </p>
          </div>

          {/* Grid */}
          <div className="furnace-parts-grid">
            {dataInfo.map((item) => (
              <LazyLoadComponent key={item.id}>
                <div
                  className="furnace-part-card"
                  onClick={() => navigate(`/furnace-part/${item.id}`)}
                >
                  <div className="furnace-part-img-container">
                    <LazyLoadImage
                      src={item.imgUrl}
                      alt={item.productTitle}
                      className="furnace-part-img"
                      effect="blur"
                      threshold={100}
                    />
                  </div>
                  <div className="furnace-part-content">
                    <h3 className="furnace-part-title">{item.productTitle}</h3>
                  </div>
                </div>
              </LazyLoadComponent>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FurnaceParts;