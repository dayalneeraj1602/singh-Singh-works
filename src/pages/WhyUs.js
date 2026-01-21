import React from "react";
import "../styles/WhyUs.css";

const WhyUs = () => {
  const features = [
    {
      icon: "fa-rocket",
      title: "Modern Furnace Design",
      description: "We use the latest technology to create modern furnace designs, meeting the demands of contemporary industrial processes.",
      color: "one"
    },
    {
      icon: "fa-lightbulb",
      title: "Creative Solutions",
      description: "Our creative approach ensures unique and innovative furnace solutions tailored to meet the specific needs of our customers.",
      color: "two"
    },
    {
      icon: "fa-headset",
      title: "24/7 Support",
      description: "Our customer support team is available round-the-clock to assist with any furnace-related queries or issues.",
      color: "three"
    },
    {
      icon: "fa-chart-line",
      title: "Business Growth",
      description: "Experience business growth with our reliable and efficient furnace solutions that propel your industrial processes forward.",
      color: "four"
    },
    {
      icon: "fa-target",
      title: "Strategic Planning",
      description: "Our market strategies are designed to integrate cutting-edge furnace technologies, ensuring your business stays ahead.",
      color: "five"
    },
    {
      icon: "fa-dollar-sign",
      title: "Affordable Solutions",
      description: "Our furnace solutions are not only effective but also cost-efficient, making quality industrial heating accessible to all.",
      color: "six"
    }
  ];

  return (
    <div className="why-us-section">
      <div className="container-why">
        <div className="section-header-why">
          <span className="section-badge-why">Why Partner With Us</span>
          <h2 className="section-title-why">Why <span className="highlight-why">Choose</span> Us?</h2>
          <p className="section-subtitle-why">
            We are dedicated to providing top-notch furnace solutions, ensuring the efficiency and longevity of your industrial processes.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card feature-card-${feature.color}`}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 100}
            >
              <div className="feature-icon-wrapper">
                <div className={`feature-icon icon-${feature.color}`}>
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
