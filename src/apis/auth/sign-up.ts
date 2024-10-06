import { request } from "../../configs/request";

export const signUpUser = async <T>(data: T) => {
  const response = await request.post(`signup`, data);
  return response.data;
};
