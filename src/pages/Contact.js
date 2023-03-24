import React, { useState } from "react";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { useForm } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const mailkey = process.env.REACT_APP_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(mailkey);
  const [sent, setsent] = useState("");

  if (state.succeeded) {
    toast.success("Message Sent Successfully");
  }
  return (
    <>
      <div className="container contact pop">
        <ToastContainer position="top-center" theme="colored" />
        <h1 className="text-center stroke ls-2">Contact Us</h1>
        <div className="row">
          {/* -------------------Image--------------- */}
          <div className="right_side col-lg-5 p-5 ">
            <motion.div
              initial={{
                y: "-100vh",
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, bounce: 0.57, type: "spring" }}
              whileHover={{ scale: 1.04 }}
              className="shadow-out p-2"
            >
              <div className="shadow-in p-2 rounded-2">
                <img
                  src="/contact.gif"
                  alt="contact img"
                  className="p-3  img-fluid rounded-3"
                />
              </div>
            </motion.div>
          </div>
          {/* ---------------------Form ------------------- */}
          <div className="col-lg-6 left_side mx-4 ">
            <motion.form
              onSubmit={handleSubmit}
              initial={{
                y: "100vh",
                opacity: 0,
              }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, bounce: 0.57, type: "spring" }}
              whileHover={{ scale: 1.04 }}
              autoComplete="off"
            >
              <div className="form-row shadow-in">
                <div className="col-lg-10 mb-3">
                  <label htmlFor="name">First name</label>
                  <input
                    type="text"
                    name="name"
                    className="inputs shadow-out "
                    placeholder="eg: Ryan Reynolds"
                    id="name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-lg-10 mb-3">
                  <label htmlFor="validationDefault02">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="inputs shadow-out "
                    id="email"
                    placeholder="eg: yourname@gmail.com"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="col-lg-10 mb-3">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="inputs shadow-out "
                    id="subject"
                    placeholder="enter the subject"
                    required
                  />
                </div>
                <div className="col-lg-10 mb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    rows={4}
                    type="text"
                    name="message"
                    className="inputs shadow-out "
                    id="message"
                    placeholder="enter the message"
                    required
                  />
                </div>

                <button
                  className={`shadow-btn ${
                    state.submitting ? "text-secondary" : "dim"
                  } mx-2  p-2 my-2 pop shadow-out`}
                  type="submit"
                >
                  {state.submitting ? "Sending..." : "Send"}
                </button>
                {sent && <p className="text-success fs-4">{sent}</p>}
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
