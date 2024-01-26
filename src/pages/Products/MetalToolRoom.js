import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

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
    <div className="container " style={{margin:"7rem"}}>
      <p className="text-center fw-bolder fs-2">Metal Tool Room</p>
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

export default MetalToolRoom;
