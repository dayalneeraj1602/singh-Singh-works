import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Services.css'

const Fabrication = () => {
  const dataInfo = [
    {
      id: 1,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Hello",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
      ShowProducts: "/services/furnace",
    },
    {
      id: 2,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Fabrication Work",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
      ShowProducts: "/services/fabricationWork",
    },
    {
      id: 3,
      imgUrl:
        "https://media.gettyimages.com/id/651480125/photo/man-melting-iron-at-factory.jpg?s=612x612&w=0&k=20&c=n4UnY4xoQY68fN_y4Kvd98VLOmhAmFtWNRJ1mbyREh8=",
      productTitle: "Fabrication Work",
      ProductDescription:
        "High-temperature heating device used in industrial processes for material processing.",
      ShowProducts: "/services/fabricationWork",
    },
   
  ];
  return (
    <div className="container my-5 pop center">
      <div className="row">
        {dataInfo.map((item) => {
          return (
            <div
              key={item.id}
              className="col-lg-4 center my-4 p-2 mx- col-md-6 col-sm-12"
            >
              <div
                className="shadow-out curve p-4 cardServices"
                style={{ width: "21rem " }}
              >
                <div className="center">
                  <img
                    className="img-fluid serviceCardImg curve my-3 "
                    src={item.imgUrl}
                    alt="productImg"
                  />
                </div>
                <span className="center fs-3">{item.productTitle}</span>
                <p className="ProductDescription mx-3">
                  {item.ProductDescription}
                </p>
                <Link to={item.ShowProducts} className="btn shadow-out  center">
                  Show
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fabrication;
