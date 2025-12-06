import React from "react";

const About = () => {
  return (
    <div className="container " style={{marginTop:"8.5rem"}}>
      <section className="about-us-section rounded ">
        <h4 className="mb-2">About Us</h4>
        <div className="s-border"></div>
        <div className="m-border"></div>
        <p className="mb-4">
          Singh Engineering Works in Noida, Delhi, satisfactorily caters to the
          demands of its customer base. Located at B-16, B Block, Sector
          64-201301, the workshop has earned stamps like Jd Verified and Jd Pay,
          substantiating the credentials of the business. We strive to provide a
          positive experience through our offerings, and our accepted modes of
          payment, such as Cash, make every business transaction easy and
          seamless.
        </p>
        <p className="m-0">
          We are a machine workshop situated in Sector 64, specializing in
          various categories, including fabrication work, metalwork, and
          furnaces of the heating zone. For the address and contact details,
          please refer to the information above.
        </p>
      </section>

      <section className="factsheet-section my-5 rounded">
        <h4 className="mb-2">Factsheet</h4>
        <div className="s-border"></div>
        <div className="m-border"></div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <strong>Nature of Business</strong>
              </td>
              <td>Manufacturer</td>
            </tr>
            <tr>
              <td>
                <strong>Additional Business</strong>
              </td>
              <td>Trader</td>
            </tr>
            <tr>
              <td>
                <strong>Company CEO</strong>
              </td>
              <td>Prabhu Dayal Singh</td>
            </tr>
            <tr>
              <td>
                <strong>Total Number of Employees</strong>
              </td>
              <td>Upto 20 people</td>
            </tr>
            <tr>
              <td>
                <strong>Year of Establishment </strong>
              </td>
              <td>2001</td>
            </tr>
            <tr>
              <td>
                <strong>Annual Turnover </strong>
              </td>
              <td>Upto 50 lakh</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="my-5 rounded">
        <h4>Statutory Profile</h4>
        <div className="s-border"></div>
        <div className="m-border"></div>
        <table className="table mt-3 table-bordered">
          <tbody>
            <tr>
              <td>
                <strong>Banker</strong>
              </td>
              <td>Indian Bank</td>
            </tr>
            <tr>
              <td>
                <strong>GST No.</strong>
              </td>
              <td>09AVFPS9164H1ZY</td>
            </tr>
          </tbody>
        </table>
      </div>
      <section className="why-us-section mt-5 rounded ">
        <h4>Why Us?</h4>
        <div className="s-border"></div>
        <div className="m-border"></div>
        <ul>
          <li>Qualitative products</li>
          <li>Positive records</li>
          <li>Excellent transport & logistic facility</li>
          <li>Dexterous team of professionals</li>
          <li>Client-centric approach</li>
          <li>Economical price range</li>
          <li>Prompt delivery</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
