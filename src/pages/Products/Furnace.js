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
          padding-top: 3rem;
          padding-bottom: 3rem;
        }

        .products-row {
          margin: 0;
        }

        .product-col {
          cursor: pointer;
        }

        .product-card {
          border: none;
          border-radius: 7px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease-in-out;
        }

        .product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .product-card-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
        }

        .product-img {
          height: 300px;
          width: 100%;
          object-fit: cover;
          border-radius: 12px;
        }

        .product-title {
          text-align: center;
          margin-top: 1rem;
          margin-bottom: 0.75rem;
        }

        .product-text {
          margin-bottom: 0.2rem;
          line-height: 1.5;
        }

        /* Mobile: reduce side padding + image height */
        @media (max-width: 768px) {
          .products-container {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .products-row {
            padding: 0 1rem;
          }

          .product-card-body {
            padding: 1rem;
          }

          .product-img {
            height: 230px;
          }
        }
      `}</style>

      <div className="pt-5 mt-5 container products-container">
        <div className="text-center fw-bold fs-2 p-1">Furnace</div>
        <div className="row products-row">
          {data.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ item }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 my-3 product-col">
      <div className="card py-3 px-2 product-card">
        <LazyLoadComponent>
          <div className="center furnaceImg p-2">
            <LazyLoadImage
              alt={item.title}
              src={item.img}
              effect="blur"
              threshold={100}
              className="img-fluid p-2 product-img"
            />
          </div>
        </LazyLoadComponent>
        <div className="card-body product-card-body">
          <h5 className="card-title center dim product-title">{item.title}</h5>

          <p className="card-text product-text">{item.price}</p>
          <p className="card-text product-text">{item.material}</p>
          <p className="card-text product-text">{item.power}</p>
          <p className="card-text product-text">{item.Loading}</p>
          <p className="card-text product-text">{item.type}</p>
          <p className="card-text product-text">{item.temp}</p>
          <p className="card-text product-text">{item.rated}</p>
          <p className="card-text product-text">{item.input}</p>
          <p className="card-text product-text">{item.Consumption}</p>
          <p className="card-text product-text">{item.automation}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Products);
