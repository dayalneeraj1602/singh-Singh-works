import React, { useContext } from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Link } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

const Services = () => {
  const { dataServices: dataInfo } = useContext(DataContext);

  return (
    <>
      {/* Local styles only for this component */}
      <style>{`
        .services-row {
          margin: 0;
          padding: 0 3rem;
        }

        .service-link {
          display: block;
          transition: all 0.3s ease-in-out;
        }

        .service-link:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .service-card {
          border-radius: 20px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          border: none;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
        }

        .service-img {
          height: 300px;
          min-height: 300px;
          width: 100%;
          object-fit: cover;
          border-radius: 20px;
          flex-shrink: 0;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #666;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
          text-align: center;
        }

        .service-text {
          color: #888;
          line-height: 1.6;
          flex-grow: 1;
        }

        /* Mobile: reduce X padding */
        @media (max-width: 768px) {
          .services-row {
            padding: 0 1rem;
          }

          .service-card-body {
            padding: 1rem;
          }

          .service-img {
            height: 230px;
            min-height: 230px;
          }
        }
      `}</style>

      <div className="pt-5 mt-5">
        <div className="text-center fw-bold fs-2 p-1">Our Services</div>

        <div className="row services-row">
          {dataInfo.map((item) => (
            <ServiceCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const ServiceCard = ({ data }) => {
  return (
    <div
      className="col-12 col-md-6 col-lg-4 my-3"
      style={{ cursor: "pointer" }}
    >
      <Link
        to={data.link}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        className="service-link b-20 bg-grey"
        style={{
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <div className="card service-card">
          <div className="card-body service-card-body b-20 bg-grey border-none">
            <LazyLoadComponent>
              <div className="center furnaceImg p-2 mb-3">
                <LazyLoadImage
                  src={data.imgUrl || "https://i.stack.imgur.com/y9DpT.jpg"}
                  className="img-fluid p-2 service-img"
                  alt={data.productTitle}
                  effect="blur"
                  threshold={100}
                />
              </div>
            </LazyLoadComponent>

            <div className="card-title center fs-5 dim service-title">
              {data.productTitle}
            </div>
            <p className="card-text text-secondary service-text">
              {data.ProductDescription}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default React.memo(Services);
