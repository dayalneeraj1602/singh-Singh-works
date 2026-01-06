import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

// import { motion } from "framer-motion";

const Manufacturing = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "	https://www.betterceramic.com/wp-content/uploads/2020/05/Alumina-ceramic-tube-and-rod-5.jpg",
      productTitle: "Ceramic Tube",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 2,
      imgUrl:
        "https://www.processparameters.co.uk/wp-content/uploads/2019/07/explaining-how-does-a-thermocouple-work.jpg",
      productTitle: "Thermocopal",
      // ProductDescription:
      //   "Temperature Sensor",
    },
    {
      id: 3,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Coupler Set",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 4,
      imgUrl:
        "https://image.made-in-china.com/2f0j00KwUiuAphhfqQ/High-Electrical-Insulating-Iroperties-Alumina-Tube-Ceramic-Pipe-Ceramic-Rollers-for-Glass-Tempering-Furnace-Kiln.jpg",
      productTitle: "Ceramic Roller",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 5,
      imgUrl:
        "https://2.imimg.com/data2/JK/KJ/MY-/anchors-for-ceramic-fibre-l-1000x1000.jpg",
      productTitle: "Fiber Stud Washer ",
      // ProductDescription:
      //   "High-temperature heating device used in industrial processes for material processing.",
    },
    {
      id: 6,
      imgUrl:
        "https://file2.okorder.com/prodalbum/2014/12/16/e9eec9f3c22d628862540d9bf62f76bd.jpg",
      productTitle: "Module Anckor",
      ProductDescription: "S.S 304 & S.S. 310",
    },
  ];
  return (
    <div className="container" style={{ margin: "7rem" }}>
      <p className="text-center fs-2 fw-bold p-1 ls-2">Manufacturing</p>
      <div className="row">
        {dataInfo.map((item) => {
          return (
            <div className="col-lg-4 my-1 col-md-6 col-sm-12" key={item.id}>
              <Link to={item.link} className="bg-grey ">
                <div className="card  m-3  border-none pointer shadow-out">
                  <div className="card-body bg-grey border-none py-4">
                    <div className="center p-2 m-2 serviceCardImg shadow-in my-3">
                      <LazyLoadImage
                        style={{
                          height: "300px",
                          width: "300px",
                          minHeight: "300px",
                          borderRadius: "12px",

                          objectFit: "cover",
                        }}
                        effect="blur"
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
  );
};

export default Manufacturing;
