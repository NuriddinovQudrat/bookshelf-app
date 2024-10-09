import { object, string, type InferType } from "yup";

export const schema = object().shape({
  isbn: string().default("").required("ISBN is required!"),
});

export type SchemaType = InferType<typeof schema>;
