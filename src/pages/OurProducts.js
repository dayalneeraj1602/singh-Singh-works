import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

import "swiper/css";
import "../styles/OurProducts.css";

const ImageGallery = () => {
  const { dataFurnace: data } = useContext(DataContext);

  return (
    <div className="my-5 carousel">
      <div className="section-head col-sm-12">
        <h4>
          <span>Our</span> Products
        </h4>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="image-wrapper carousel-item">
              <Link
                to={`/product/${item.id}`}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="carousel-item-link"
                style={{ textDecoration: "none" }}
              >
                <LazyLoadImage
                  title={item.title}
                  alt={item.id}
                  src={item.img}
                  effect="blur"
                  threshold={100}
                  width="250px"
                  height="250px"
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
