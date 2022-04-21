import { Formik } from "formik";
import { ToastContainer, toast } from "react-toast";
import { loginValidation } from "../services/valSchema";
import { FaGoogle, FaFacebookF, FaHome } from "react-icons/fa";
import "../assets/css/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="img-container">
        <div className="img">
          <div className="text">
            <small>It's your time to own something valuable.</small>
            <p className="title">
              Login & START EXPLORING YOUR DREAM HOME RIGHT NOW.
            </p>
          </div>
        </div>
      </div>
      <div className="form-container">
        <div className="title">
          <FaHome className="icon" />
          realtor.com
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" });
          }}
          validationSchema={loginValidation}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <div className="form">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                  console.log(errors);
                }}
              >
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                />

                <button className="btn-primary" type="submit">
                  Log in
                </button>
              </form>
              <Link to="/forgot-password" className="forgot">
                Forgot your password?
              </Link>
              <div className="or">Or</div>
              <button className="btn-google">
                <FaGoogle className="icon" />
                Continue with google
              </button>
              <button className="btn-facebook">
                <FaFacebookF className="icon" />
                Continue with facebook
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
