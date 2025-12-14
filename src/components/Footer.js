import "../styles/Footer.css";

const Footer = () => {
  const companyAddress = "B-16, B Block, Sector 64, Noida - 201301";
  const googleMapsLink = `https://www.google.com/maps/dir//${encodeURIComponent(
    companyAddress
  )}/`;

  return (
    <footer className="footer py-5 ">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 d-flex justify-content-around flex-column">
            <div className="address">
              <h4 className="">Address</h4>
              <div className="s-border"></div>
              <div className="m-border"></div>
              <div className="ps-2">
                <p>
                  <i className="fa-solid fa-location-dot me-2"></i>
                  {companyAddress}
                </p>
                <p>
                  <i className="fa-solid fa-envelope me-2"></i>{" "}
                  prabhudayal.singh@gmail.com
                </p>
                <p>
                  <i className="fa-solid fa-envelope me-2"></i>{" "}
                  singhengineeringworks.1999@gmail.com
                </p>
                <p>
                  <i className="fa-solid fa-phone me-2"></i> +91 9810802982
                </p>
                <p>
                  <i className="fa-solid fa-phone me-2"></i> +91 9810804532
                </p>
              </div>
            </div>
            <div className="timing">
              <h4>Opening Hours</h4>
              <div className="s-border"></div>
              <div className="m-border"></div>
              <div className="ps-2">
                <p>
                  {" "}
                  <i className="me-2 fa-solid fa-clock"></i>Mon - Sat: 9:00 am -
                  5:30 pm
                </p>
                <p>
                  {" "}
                  <i className="fa-solid fa-star me-2"></i>Sun: Holiday
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-5 d-flex maps  flex-column">
            {/* Google Maps Integration - Get Directions */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.728712977207!2d77.38255797554164!3d28.60791427567829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d3c20bedb7%3A0xc6237134267e953b!2sSingh%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1706278332444!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ borderRadius: " 8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5941036364447!2d77.3773047!3d28.6119512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d3c20bedb7%3A0xc6237134267e953b!2sSingh%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1765634128605!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ borderRadius: " 8px" }}
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="mt-4 text-start">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-start d-flex align-items-center text-decoration-none"
              >
                <i className="fa-solid fa-diamond-turn-right me-2"></i>Get
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
