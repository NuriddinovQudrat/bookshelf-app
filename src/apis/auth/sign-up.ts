import { request } from "../../configs/request";
import { ENDPOINTS } from "../../constants/endpoints";

export const signUpUser = async <T>(data: T) => {
  try {
    const response = await request.post(ENDPOINTS.SIGN_UP, data);
    return response.data;
  } catch (error) {
    console.error("Sign up failed:", error);
    throw error;
  }
};
