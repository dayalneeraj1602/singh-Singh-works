import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Services.css";
import { motion } from "framer-motion";

const Manufacturing = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "	https://www.betterceramic.com/wp-content/uploads/2020/05/Alumina-ceramic-tube-and-rod-5.jpg",
      productTitle: "Ceramic Tube",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 2,
      imgUrl:
        "	https://th.bing.com/th/id/OIP.eThAzxdBhIBstb4PooSKWgHaHa?pid=ImgDet&w=205&h=205&c=7&dpr=1.3",
      productTitle: "Thermocopal",
      ProductDescription:
        "Temperature Sensor",
    },
    {
      id: 3,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Coupler Set",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 4,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Bearing Bolt",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 5,
      imgUrl:
        "https://2.imimg.com/data2/JK/KJ/MY-/anchors-for-ceramic-fibre-l-1000x1000.jpg",
      productTitle: "Fiber Stud Washer ",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 6,
      imgUrl:
        "https://2.imimg.com/data2/JK/KJ/MY-/anchors-for-ceramic-fibre-l-1000x1000.jpg",
      productTitle: "Module Anckor",
      ProductDescription: "S.S 304 & S.S. 310",
    },
    ];
  return (
    <div className="row my-5 pop container center cardsServices">
      <div className="col-12 center">
        <span className="center fs-2  stroke p-1 ls-2">Manufacturing</span>
        <div className="row">
          {dataInfo.map((item) => {
            return (
              <div className="col-lg-4 my-1 col-md-6 col-sm-12" key={item.id}>
                <Link to={item.link} className="bg-grey ">
                  <motion.div
                    initial={{
                      y: item.id % 2 === 0 ? "-100vw" : "100vw",
                      opacity: 0,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, bounce: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.04 }}
                    className="card  m-3  border-none pointer shadow-out"
                  >
                    <div className="card-body bg-grey border-none py-4">
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

export default Manufacturing;
