import { object, ref, string } from "yup";


export const signupSchema = object({
  name:string().trim().required().max(20).min(3),
  email: string().trim().email().required(),
  password: string().trim().min(6).max(23).required(),
  confirmPassword: string()
    .oneOf([ref("password")], "Password must be the same!")
    .required("Required!"),
});


export const loginSchema = object({
  email: string().trim().email().required(),
  password: string().trim().min(6).max(20).required(),
}); 