import { Formik } from "formik";
import React from "react";
import { contactValidation } from "../services/valSchema";
import { ToastContainer, toast } from "react-toast";
import "../assets/css/Contact.css";
import { useTitle } from "../hooks/useTitle";

const Contact = ({ fromHome }) => {
  var title = "";
  fromHome ? (title = "Contact | Realtor") : (title = "Contact | Realtor");
  useTitle(title);
  return (
    <div className="contact-container">
      <div className="img-container">
        <div className="bg-img"></div>
      </div>
      <div className="contact">
        <div className="text-container">
          <p className="text">Need a consultaion?</p>
          <p>
            <strong>Contact us & we will help you.</strong> Autem voluptatum
            praesentium officia eaque aperiam doloremque obcaecati eveniet iusto
            aspernatur repudiandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod, vitae!
          </p>
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
                  } else if (errors && values.name !== "") {
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
