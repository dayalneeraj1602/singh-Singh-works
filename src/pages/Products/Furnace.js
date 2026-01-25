import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
          background: linear-gradient(180deg, #ffffff 0%, #f9fafb 50%, #f3f4f6 100%);
          padding: 5rem 1rem;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .products-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .products-container::after {
          content: '';
          position: absolute;
          bottom: 5%;
          right: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .products-section {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Section Header */
        .products-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .products-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.08));
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #2563eb;
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          backdrop-filter: blur(10px);
        }

        .products-title {
          font-size: 3rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0.5rem 0;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .products-title .highlight {
          color: #3b82f6;
          position: relative;
        }

        .products-title .highlight::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 2px;
        }

        .products-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin-top: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          justify-items: center;
        }

        .product-card {
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          overflow: hidden;
          max-width: 350px;
          width: 100%;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .product-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.2);
        }

        .product-img-container {
          height: 300px;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-img {
          transform: scale(1.08);
        }

        .product-title {
          text-align: center;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 1.5rem 1.5rem 0;
          color: #1a1a2e;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.3px;
        }

        .product-card:hover .product-title {
          color: #3b82f6;
        }

        /* Mobile responsive */
        @media (max-width: 1024px) {
          .products-title {
            font-size: 2.5rem;
          }

          .products-subtitle {
            font-size: 1rem;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .products-container {
            padding: 3rem 1rem;
          }

          .products-section {
            margin-top: 2rem;
          }

          .products-header {
            margin-bottom: 3rem;
          }

          .products-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .products-subtitle {
            font-size: 0.95rem;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.2rem;
          }

          .product-img-container {
            height: 250px;
          }

          .product-title {
            font-size: 1.1rem;
            margin: 1rem 1rem 0;
          }
        }

        @media (max-width: 480px) {
          .products-container {
            padding: 2rem 1rem;
          }

          .products-header {
            margin-bottom: 2rem;
          }

          .products-title {
            font-size: 1.5rem;
          }

          .products-subtitle {
            font-size: 0.9rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .product-img-container {
            height: 200px;
          }

          .product-title {
            font-size: 1rem;
            margin: 0.8rem 0.8rem 0;
          }

          .product-card:hover {
            transform: translateY(-8px);
          }
        }
      `}</style>

      <div className="products-container">
        <div className="products-section">
          <div className="products-header">
            <span className="products-badge">Industrial Solutions</span>
            <h2 className="products-title">
              Industrial <span className="highlight">Furnaces</span>
            </h2>
            <p className="products-subtitle">
              Precision-engineered furnace systems designed for optimal
              performance and reliability in demanding industrial applications.
            </p>
          </div>
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
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/furnace/${item.id}`)}
    >
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
