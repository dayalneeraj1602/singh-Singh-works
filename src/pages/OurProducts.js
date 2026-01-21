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
    <div className="products-section">
      <div className="products-container">
        <div className="section-header">
          <span className="section-badge">Premium Selection</span>
          <h2 className="section-title">Our <span className="highlight">Products</span></h2>
          <p className="section-subtitle">Explore our comprehensive range of industrial furnaces and heating solutions</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            576: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                to={`/furnace/${item.id}`}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  })
                }
                className="product-card"
              >
                <div className="product-image-wrapper">
                  <LazyLoadImage
                    title={item.title}
                    alt={item.id}
                    src={item.img}
                    effect="blur"
                    threshold={100}
                    width="100%"
                    height="250px"
                    className="product-image"
                  />
                  <div className="product-overlay">
                    <span className="view-details">View Details →</span>
                  </div>
                </div>

                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-label">Industrial Furnace</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallery;
