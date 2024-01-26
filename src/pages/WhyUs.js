import React from "react";
import "../styles/WhyUs.css";

const WhyUs = () => {
  return (
    <div className="feat bg-gray pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4>
              <span>Why Choose</span> Us?
            </h4>
            <p>
              We are dedicated to providing top-notch furnace solutions,
              ensuring the efficiency and longevity of your industrial
              processes.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <span className="icon feature_box_col_one">
              <i className="fa fa-globe"></i>
            </span>
            <h6>Modern Furnace Design</h6>
            <p>
              We use the latest technology to create modern furnace designs,
              meeting the demands of contemporary industrial processes.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <span className="icon feature_box_col_two">
              <i className="fa fa-anchor"></i>
            </span>
            <h6>Creative Furnace Solutions</h6>
            <p>
              Our creative approach ensures unique and innovative furnace
              solutions tailored to meet the specific needs of our customers.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <span className="icon feature_box_col_three">
              <i className="fa fa-hourglass-half"></i>
            </span>
            <h6>24 x 7 Furnace User Support</h6>
            <p>
              Our customer support team is available 24/7 to assist with any
              furnace-related queries or issues our customers may encounter.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <span className="icon feature_box_col_four">
              <i className="fa fa-database"></i>
            </span>
            <h6>Furnace Business Growth</h6>
            <p>
              Experience business growth with our reliable and efficient
              furnace solutions that propel your industrial processes forward.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <span className="icon feature_box_col_five">
              <i className="fa-solid fa-bullseye"></i>
            </span>
            <h6>Strategic Furnace Planning</h6>
            <p>
              Our market strategies are designed to integrate cutting-edge
              furnace technologies, ensuring your business stays ahead in the
              industry.
            </p>
          </div>
          <div
            className="col-lg-4 col-sm-6 item"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="500"
          >
            <span className="icon feature_box_col_six">
              <i className="fa-solid fa-square-poll-vertical"></i>
            </span>
            <h6>Affordable Furnace Solutions</h6>
            <p>
              Our furnace solutions are not only effective but also
              cost-efficient, making quality industrial heating accessible to
              all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
