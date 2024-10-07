import { request } from "../../configs/request";
import { ENDPOINTS } from "../../constants/endpoints";

export const signUpUser = async <T>(data: T) => {
  const response = await request.post(ENDPOINTS.SIGN_UP, data);
  return response.data;
};
