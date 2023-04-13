import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Services.css";
// import { motion } from "framer-motion";

const MetalToolRoom = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "https://img.freepik.com/free-photo/industry-lathe-machine-work_44762-848.jpg?size=626&ext=jpg",
      productTitle: "Leath Work",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 2,
      imgUrl:
        "	https://ak5.picdn.net/shutterstock/videos/1023514465/thumb/1.jpg",
      productTitle: "Milling Work",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 3,
      imgUrl:
        "	https://lirp.cdn-website.com/1a47db05/dms3rep/multi/opt/home-c2-213x213-426w.jpg",
      productTitle: "Drilling Work",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 4,
      imgUrl:
        "	https://www.waldrichsiegen.com/fileadmin/ws/img/products/roll-grinder-profigrind-800k.jpg",
      productTitle: "Granding Work",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 5,
      imgUrl:
        "https://5.imimg.com/data5/KH/NF/SP/SELLER-876530/industrial-hard-chrome-plated-roller-500x500.JPG",
      productTitle: "Hard Crome",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
  ];
  return (
    <div className="row my-5 pop container center cardsServices">
      <div className="col-12 center">
        <span className="center fs-2  stroke p-1 ls-2">Metal Tool Room</span>
        <div className="row">
          {dataInfo.map((item) => {
            return (
              <div className="col-lg-4 my-1 col-md-6 col-sm-12" key={item.id}>
                <Link to={item.link} className="bg-grey ">
                  <div
                    initial={{
                      y: item.id % 2 === 0 ? "-100vw" : "100vw",
                      opacity: 0,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, bounce: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.04 }}
                    className="card  m-3 b-20  border-none pointer shadow-out"
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
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MetalToolRoom;
