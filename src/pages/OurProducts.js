import Carousel from "react-grid-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/OurProducts.css";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
const ImageGallery = () => {
  const { dataFurnace: data } = useContext(DataContext);

  return (
    <div className="my-5 carousel">
      <div className="section-head col-sm-12">
        <h4>
          <span>Our</span> Products
        </h4>
      </div>
      <Carousel
        cols={4}
        rows={1}
        // gap={50}
        loop
        autoplay={1800}
        containerClassName="carousel-container "
      >
        {data?.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="image-wrapper carousel-item">
              <Link
                to={`/product/${item.id}`}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className="carousel-item-link"
                style={{ textDecoration: "none" }}
              >
                <LazyLoadImage
                  title={item.title}
                  alt={item.id}
                  src={item.img}
                  effect="blur"
                  threshold={100}
                  className=""
                  width={"250px"}
                  height={"250px"}
                  style={{
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />

                <p className="opacity-25 mt-2">
                  <b>{item.title}</b>
                </p>
              </Link>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
