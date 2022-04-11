import { Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import { ToastContainer, toast } from "react-toast";
import "../assets/css/Contact.css";

const Contact = () => {
  const contactValidation = object({
    name: string().required("All fields are required!"),
    email: string().email().required("All fields are required!"),
    msg: string().required("All fields are required!"),
  });
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
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm({ values: "" });
            }}
            validationSchema={contactValidation}
          >
            {({ handleChange, handleSubmit, errors, values }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  console.log(errors);
                  if (errors.name) {
                    toast.warn(errors.name);
                  } else if (errors.email) {
                    toast.warn(errors.email);
                  } else if (errors.msg) {
                    toast.warn(errors.msg);
                  } else {
                    toast.success("Thank you for contacting us!");
                  }
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={values.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                <textarea
                  name="msg"
                  placeholder="Message"
                  value={values.msg}
                  onChange={handleChange}
                  className="msg"
                />
                <button type="submit" name="submit" className="btn-primary">
                  Send Now
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer delay={2000} position="bottom-right" />
    </div>
  );
};

export default Contact;
