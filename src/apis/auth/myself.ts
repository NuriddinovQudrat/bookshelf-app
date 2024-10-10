import { request } from "../../configs/request";
import { ENDPOINTS } from "../../constants/endpoints";

export const getMySelf = async () => {
  try {
    const response = await request.get(ENDPOINTS.MYSELF);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
    throw error;
  }
};
