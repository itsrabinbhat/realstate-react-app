import { Formik } from "formik";
import React, { useRef } from "react";
import { object, string } from "yup";
import { Notyf } from "notyf";
import "../assets/css/Contact.css";

const Contact = () => {
  const errMsg = useRef(null);
  const contactValidation = object({
    name: string().required("All fields are required!"),
    email: string().email().required("All fields are required!"),
    msg: string().required("All fields are required!"),
  });
  const notify = new Notyf();
  return (
    <div className="contact-container">
      <div className="img-container">
        <div className="bg-img"></div>
      </div>
      <div className="contact">
        <div className="text">
          Need a consultaion? contact us & we will help you.
        </div>
        <div className="form-container">
          <Formik
            initialValues={{ name: "", email: "", msg: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={contactValidation}
          >
            {({ handleChange, handleSubmit, errors, values }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  console.log(errMsg);
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                />
                <span className="err-msg" ref={errMsg}>
                  {errors.name}
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <span className="err-msg" ref={errMsg}>
                  {errors.email}
                </span>
                <textarea
                  name="msg"
                  placeholder="Message"
                  onChange={handleChange}
                  className="msg"
                />
                <span className="err-msg" ref={errMsg}>
                  {errors.msg}
                </span>
                <button type="submit" name="submit" className="btn-primary">
                  Send Now
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
