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
        .services-container {
          min-height: 100vh;
          background-color: #f8f9fa;
          padding: 2rem 1rem;
        }

        .services-section {
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 5rem;
          margin-bottom: 4rem;
        }

        .services-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #000;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .service-link {
          display: block;
          text-decoration: none;
          color: inherit;
          width: 100%;
        }

        .service-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          max-width: 350px;
          width: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          border: none;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .service-img-container {
          height: 300px;
          width: 100%;
          overflow: hidden;
          border-radius: 8px;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-title {
          text-align: center;
          font-size: 1.25rem;
          font-weight: bold;
          margin-top: 1rem;
          color: #000;
        }

        .service-text {
          text-align: center;
          padding: 0 1rem;
          color: #6c757d;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .services-container {
            padding: 1rem;
          }

          .services-section {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .services-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .service-img-container {
            height: 230px;
          }
        }
      `}</style>

      <div className="services-container">
        <div className="services-section">
          <h2 className="services-title">Our Services</h2>
          <div className="services-grid">
            {dataInfo.map((item) => (
              <ServiceCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ServiceCard = ({ data }) => {
  return (
    <Link
      to={data.link}
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
      className="service-link"
    >
      <div className="service-card">
        <LazyLoadComponent>
          <div className="service-img-container">
            <LazyLoadImage
              src={data.imgUrl || "https://i.stack.imgur.com/y9DpT.jpg"}
              className="service-img"
              alt={data.productTitle}
              effect="blur"
              threshold={100}
            />
          </div>
        </LazyLoadComponent>

        <h3 className="service-title">{data.productTitle}</h3>
        <p className="service-text">{data.ProductDescription}</p>
      </div>
    </Link>
  );
};

export default React.memo(Services);