
import { object, string } from "yup";

export const messageSchema = object({
  body: object({
    from: string().required(),
    to: string().required(),
    message: string().required().max(1000, "message coudnt be more than 1000 symblos")   
  }),
});