import { object, string } from "yup";

export const userSignupSchema = object({
  body: object({
    email: string().email("invalid email adress").required(),
    password: string().min(6).max(20).required(),
    name: string()
      .max(20, "name could nit be more than 20 symblos")
      .min(3, "name must be more than 3 symbols"),
  }),
});

export const userLoginSchema = object({
  body: object({
    email: string().email("invalid email adress").required(),
    password: string().min(6).max(20).required(),
  }),
});
