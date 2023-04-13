import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Services.css";
// import { motion } from "framer-motion";

const MetalFabricationWork = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Hello",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 2,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Fabrication Work",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 3,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Fabrication Work",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
    },
  ];
  return (
    <div className="row my-5 pop container center cardsServices">
      <div className="col-12 center">
        <span className="center fs-2  stroke p-1 ls-2">
          Metal Fabrication Work
        </span>
        <div className="row">
          {dataInfo.map((item) => {
            return (
              <div className="col-lg-4 my-1 col-md-6 col-sm-12" key={item.id}>
                <Link to={item.link} className="bg-grey ">
                  <div
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

export default MetalFabricationWork;
