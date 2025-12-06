import React, { useEffect, useState } from "react";
import "../styles/Contact.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const mailkey = process.env.REACT_APP_FORMSPREE_ID;
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string(),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        const response = await axios.post(
          `https://formspree.io/f/${mailkey}`,
          values
        );
        console.log(values);
        if (response.status === 200) {
          setMessage("Message sent successfully!");

          resetForm();
        } else {
          setMessage("Error sending message. Please try again later.");
        }
      } catch (error) {
        console.error("Error sending message", error);
        setMessage("Error sending message. Please try again later.");
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (message)
      setTimeout(() => {
        setMessage(null);
      }, 5000);
  }, [message]);
  return (
    <>
      <div className="container-contact mx-0 mt-5 pt-5">
        <span className="big-circle"></span>

        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">Feel free to leave a message.</p>

            <div className="info">
              <div className="information">
                <i className="fa-solid fa-location-dot me-2"></i>
                <p>B-16, B Block, Sector 64, Noida Sector 64, Noida - 201301</p>
              </div>
              <div className="information">
                <i className="fa-solid fa-envelope me-2"></i>{" "}
                <p>prabhudayal.Singh@gmail.com
                  Singhengineeringworks.1999@gmail.com
                </p>
                
              </div>
              <div className="information">
                <i className="fa-solid fa-phone me-2"></i>
                <p>+91 9810802982
                  +91 9810804532
                </p>
                
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form onSubmit={formik.handleSubmit}>
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="error">{formik.errors.name}</div>
                )}
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error">{formik.errors.email}</div>
                )}
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="error">{formik.errors.phone}</div>
                )}
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="error">{formik.errors.message}</div>
                )}
              </div>
              <div
                className={`message my-2  ${
                  message && message.includes("successfully")
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {message}
              </div>

              <input
                type="submit"
                value={loading ? "Sending..." : "Send"}
                className={`btn ${loading ? "loading" : ""}`}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
