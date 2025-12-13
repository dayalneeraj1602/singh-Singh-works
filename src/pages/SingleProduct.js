import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SingleProduct = () => {
  const id = useParams()?.id;
  const { dataFurnace: data } = useContext(DataContext);

  console.log(id);
  const item = data?.find((item) => item.id === id);

  console.log(item);
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <div
        className="py-3 px-2 d-flex"
        style={{
          border: "none",
          borderRadius: "7px",
          gap: "10rem",

          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="center px-5 py-3">
          <LazyLoadImage
            alt={item?.title}
            src={item?.img}
            effect="blur"
            threshold={100}
            className="img-fluid p-2"
            style={{
              height: "300px",
              borderRadius: "12px",

              objectFit: "cover",
            }}
          />
        </div>

        <div className="fs-5 pt-2">
          <h2 className="card-title fw-bolder center dim">{item.title}</h2>
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

export default SingleProduct;
