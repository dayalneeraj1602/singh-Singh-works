import React, { useContext } from "react";

import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import { DataContext } from "../../Context/DataContext";
import "react-lazy-load-image-component/src/effects/blur.css";

const Products = () => {
  const { dataFurnace: data } = useContext(DataContext);

  return (
    <>
      {/* Local styles only for Products */}
      <style>{`
        .products-container {
          min-height: 100vh;
          background-color: #f8f9fa;
          padding: 2rem 1rem;
        }

        .products-section {
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 5rem;
        }

        .products-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 3rem;
          color: #000;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .product-card {
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

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }

        .product-img-container {
          height: 300px;
          width: 100%;
          overflow: hidden;
          border-radius: 8px;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-title {
          text-align: center;
          font-size: 1.25rem;
          font-weight: bold;
          margin-top: 1rem;
          color: #000;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .products-container {
            padding: 1rem;
          }

          .products-section {
            margin-top: 2rem;
          }

          .products-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .product-img-container {
            height: 230px;
          }
        }
      `}</style>

      <div className="products-container">
        <div className="products-section">
          <h2 className="products-title">Industrial Furnaces</h2>
          <div className="products-grid">
            {data.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <LazyLoadComponent>
        <div className="product-img-container">
          <LazyLoadImage
            alt={item.title}
            src={item.img}
            effect="blur"
            threshold={100}
            className="product-img"
          />
        </div>
      </LazyLoadComponent>
      <h3 className="product-title">{item.title}</h3>
    </div>
  );
};

export default React.memo(Products);