import { Password } from "@mui/icons-material";
import { object, string } from "yup";
export const contactValidation = object({
  name: string().required("All fields are required!"),
  email: string().email().required("All fields are required!"),
  msg: string().required("All fields are required!"),
});

export const loginValidation = object({
  email: string().required("Email is required!").email(),
  password: string().required("Password is required!").min(8).max(20),
});
export const signupValidation = object({
  name: string().required("Name is required!").max(20),
  email: string().required("Email is required!").email(),
  password: string().required("Password is required!").min(8).max(20),
});
