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
      <div className="pt-5 mt-5 ">
        <div className="text-center fw-bold fs-2 p-1">Furnace</div>
        <div className="row px-5 m-0">
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
    <div className="col-12 col-md-6 col-lg-4 my-3" key={item.id}>
      <div
        className="card py-3 px-2"
        style={{
          // border: "none",
          borderRadius: "7px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <LazyLoadComponent>
          <div className="center furnaceImg p-2">
            <LazyLoadImage
              alt={item.title}
              src={item.img}
              effect="blur"
              threshold={100}
              className="img-fluid p-2"
              style={{
                height: "300px",
                borderRadius: "12px",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </LazyLoadComponent>
        <div className="card-body">
          <h5 className="card-title center dim">{item.title}</h5>
          <p className="card-text ">{item.price}</p>
          <p className="card-text ">{item.material}</p>
          <p className="card-text ">{item.power}</p>
          <p className="card-text ">{item.Loading}</p>
          <p className="card-text ">{item.type}</p>
          <p className="card-text ">{item.temp}</p>
          <p className="card-text ">{item.rated}</p>
          <p className="card-text ">{item.input}</p>
          <p className="card-text ">{item.Consumption}</p>
          <p className="card-text ">{item.automation}</p>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Products);
