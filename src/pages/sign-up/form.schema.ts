import { object, string, type InferType } from "yup";

export const schema = object().shape({
  name: string().default("").required("Name is required!"),
  email: string().email("Invalid email format!").required("Email is required!"),
  key: string().default("").required("Key is required!"),
  secret: string().default("").required("Secret is required!"),
});

export type SchemaType = InferType<typeof schema>;
