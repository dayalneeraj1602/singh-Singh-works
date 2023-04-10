import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Services.css";
import { motion } from "framer-motion";

const FurnaceParts = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "https://image.made-in-china.com/2f0j00cCjQkJBPQMoy/Three-Phase-Induction-Motor-Y3-.jpg",
      productTitle: "Dc Motor",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 2,
      imgUrl:
        "https://5.imimg.com/data5/TP/QT/MY-125053/single-phase-ac-motors-500x500.jpg",
      productTitle: "AC Motor",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 3,
      imgUrl:
        "https://samdex.eu/wp-content/uploads/2019/11/C.2.5Helical-worm-geared-motors015.jpg",
      productTitle: "Gear Box with Motor",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 4,
      imgUrl:
        "https://www.santramengineers.com/wp-content/uploads/2020/06/Worm-Geaarboxes-thumbb.jpg",
      productTitle: "Gear Box",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 5,
      imgUrl:
        "https://img2.exportersindia.com/product_images/bc-full/dir_112/3351704/vtdrive-high-performance-ac-drives-380v-3-phase-1527516.jpg",
      productTitle: "AC Drive ",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 6,
      imgUrl:
        "https://5.imimg.com/data5/PA/SP/NK/SELLER-5944088/parker-598g-dc-drive.jpg",
      productTitle: "DC Drive",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 7,
      imgUrl:
        "https://5.imimg.com/data5/CW/BO/CW/SELLER-85655579/furnace-control-panel-500x500.jpg",
      productTitle: "Control Panel",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 8,
      imgUrl:
        "https://4.imimg.com/data4/XV/YM/MY-2046773/furnace-temperature-indicator-250x250.png",
      productTitle: "Teamperature Indicator",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 9,
      imgUrl:
        "	https://m.media-amazon.com/images/I/41RwgwBVLmL.jpg",
      productTitle: "Teamperature Controller",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 10,
      imgUrl:
        "https://3.imimg.com/data3/DK/QD/MY-7176933/hot-face-insulation-bricks-500x500.jpg",
      productTitle: "Insulation Brick(Hot FAce)",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 11,
      imgUrl:
        "https://th.bing.com/th/id/OIP.HFTuTSnnR-17oSa4-egl0wHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      productTitle: "Insulation Brick(Cold Face)",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 12,
      imgUrl:
        "		https://3.imimg.com/data3/WF/YQ/MY-2185590/insulation-bricks-500x500.jpg",
      productTitle: "HFK Bricks",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 13,
      imgUrl:
        "	https://m.media-amazon.com/images/I/61warq4+q4L._SX425_.jpg",
      productTitle: "Blanket",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 14,
      imgUrl:
        "https://th.bing.com/th/id/OIP.jCGG0QTKpOeVM8bzWkMLGAAAAA?pid=ImgDet&rs=1",
      productTitle: "Fiber Blanket",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 15,
      imgUrl:
        "	https://5.imimg.com/data5/PL/SF/MY-2506826/supercera-ceramic-fiber-500x500.jpg",
      productTitle: "Fiber Wool",
      Brand: "Morgapa,Supercera,Span",
    },
  ];
  return (
    <div className="row my-5 pop container center cardsServices">
      <div className="col-12 center">
        <span className="center fs-2  stroke p-1 ls-2">Furnace Parts</span>
        <div className="row">
          {dataInfo.map((item) => {
            return (
              <div className="col-lg-4 my-1 col-md-6 col-sm-12" key={item.id}>
                <Link to={item.link} className="bg-grey ">
                  <motion.div
                    initial={{
                      x: item.id % 2 === 0 ? "-100vw" : "100vw",
                      opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, bounce: 0.5, type: "spring" }}
                    // style={{ height: "10rem" }}
                    whileHover={{ scale: 1.04 }}
                    className="card  m-3 b-20   border-none pointer shadow-out"
                  >
                    <div className="card-body  b-20 bg-grey border-none py-4">
                      <div className="center p-2 m-2 serviceCardImg shadow-in my-3">
                        <img
                          className="img-fluid p-2 "
                          src={item.imgUrl}
                          alt="productImg"
                        />
                      </div>

                      <div className="card-title center fs-5 dim">
                        {item.productTitle}
                      </div>
                      <p className="card-text px-3 text-secondary">
                        {item.ProductDescription}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FurnaceParts;
