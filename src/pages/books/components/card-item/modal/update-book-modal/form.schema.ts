import { object, string, type InferType } from "yup";

export const schema = object().shape({
  status: string(),
});

export type SchemaType = InferType<typeof schema>;
