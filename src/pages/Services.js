import React, { useContext, useEffect, useState } from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

const Services = () => {
  const { dataServices: dataInfo } = useContext(DataContext);
  const [isHover, setIsHover] = useState(null);

  return (
    <div className="pt-5 mt-5 ">
      <div className="text-center fw-bold fs-2 p-1">Our Services</div>

      <div className="row px-5 m-0">
        {dataInfo.map((item) => (
          <ServiceCard
            setIsHover={setIsHover}
            isHover={isHover}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ data, setIsHover, isHover }) => {
  useEffect(() => {
    console.log(isHover);
  }, [isHover]);
  return (
    <div
      className="col-12 col-md-6 col-lg-4 my-3"
      onMouseLeave={() => setIsHover(null)}
      onMouseOver={() => {
        setIsHover(data.id);
        console.log("first");
      }}
      style={{ cursor: "pointer" }}
    >
      <Link
        to={data.link}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="b-20 bg-grey "
        style={{
          color: "inherit",
          textDecoration: "none",
          transition: "all 0.3s ease-in-out",
          transform: `scale(${isHover === data.id ? 1.05 : 1})`,
        }}
      >
        <div
          className="card py-3 px-2"
          style={{
            borderRadius: "7px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="card-body b-20 bg-grey border-none py-4">
            <LazyLoadComponent>
              <div className="center furnaceImg p-2 mb-3">
                <LazyLoadImage
                  src={data.imgUrl || "https://i.stack.imgur.com/y9DpT.jpg"}
                  className="img-fluid p-2"
                  alt={data.productTitle}
                  effect="blur"
                  threshold={100}
                  style={{
                    height: "300px",
                    minHeight: "300px",
                    borderRadius: "12px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </LazyLoadComponent>

            <div className="card-title center fs-5 dim">
              {data.productTitle}
            </div>
            <p className="card-text text-secondary">
              {data.ProductDescription}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(Services);
