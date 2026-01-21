import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page-container">
      <section className="about-us-section">
        <div className="section-header">
          <span className="section-badge">Our Story</span>
          <h2 className="section-title">About Singh Engineering Works</h2>
          <p className="section-subtitle">Delivering excellence since 2001</p>
        </div>
        
        <div className="about-content">
          <p className="about-text">
            Singh Engineering Works in Noida and NCR satisfactorily caters to the
            demands of its customer base. Located at B-16, B Block, Sector
            64-201301, the workshop has earned stamps like Just Dial Verified and Indiamart
            Assured, substantiating the credentials of the business. We strive to provide a
            positive experience through our offerings, and our accepted modes of
            payment, such as Cash, UPI and Bank transfer, make every business transaction easy and
            seamless.
          </p>
          <p className="about-text">
            We are a machine workshop situated in Sector 64, specializing in
            various categories, including fabrication work, metalwork, and
            furnaces of the heating zone. With over two decades of experience,
            our dedicated team continues to innovate and deliver superior quality products.
          </p>
        </div>
      </section>

      <section className="factsheet-section">
        <div className="section-header">
          <span className="section-badge">Company Details</span>
          <h2 className="section-title">Factsheet</h2>
          <p className="section-subtitle">Key information about our organization</p>
        </div>
        
        <div className="factsheet-grid">
          <div className="fact-card">
            <div className="fact-icon">
              <i className="fa-solid fa-industry"></i>
            </div>
            <h3>Nature of Business</h3>
            <p>Manufacturer</p>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h3>Additional Business</h3>
            <p>Trader</p>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <i className="fa-solid fa-user-tie"></i>
            </div>
            <h3>Company CEO</h3>
            <p>Prabhu Dayal Singh</p>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <h3>Total Employees</h3>
            <p>Upto 20 people</p>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <i className="fa-solid fa-calendar"></i>
            </div>
            <h3>Year of Establishment</h3>
            <p>2001</p>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3>Annual Turnover</h3>
            <p>Upto 35 lakh</p>
          </div>
        </div>
      </section>

      <section className="statutory-section">
        <div className="section-header">
          <span className="section-badge">Legal Info</span>
          <h2 className="section-title">Statutory Profile</h2>
          <p className="section-subtitle">Official credentials and certifications</p>
        </div>

        <div className="statutory-grid">
          <div className="stat-card">
            <h3>Banker</h3>
            <p>Indian Bank</p>
          </div>

          <div className="stat-card">
            <h3>GST No.</h3>
            <p>09AVFPS9164H1ZY</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <div className="section-header">
          <span className="section-badge">Our Strengths</span>
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">What sets us apart from the competition</p>
        </div>

        <div className="why-us-grid">
          <div className="why-us-card">
            <div className="why-us-icon">
              <i className="fa-solid fa-star"></i>
            </div>
            <h3>Qualitative Products</h3>
            <p>Premium quality manufacturing with strict quality control standards</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">
              <i className="fa-solid fa-shield-check"></i>
            </div>
            <h3>Positive Records</h3>
            <p>Verified and trusted by Indiamart and JustDial platforms</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">
              <i className="fa-solid fa-truck"></i>
            </div>
            <h3>Transport & Logistics</h3>
            <p>Excellent delivery network across NCR and pan-India reach</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">
              <i className="fa-solid fa-people-group"></i>
            </div>
            <h3>Professional Team</h3>
            <p>Dexterous and experienced team of skilled professionals</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>
            <h3>Client-Centric Approach</h3>
            <p>Customized solutions tailored to meet specific client needs</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">
              <i className="fa-solid fa-tags"></i>
            </div>
            <h3>Economical Pricing</h3>
            <p>Best value for money with competitive price ranges</p>
          </div>

          <div className="why-us-card">
            <div className="why-us-icon">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <h3>Prompt Delivery</h3>
            <p>On-time delivery ensuring minimal delays and maximum efficiency</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
