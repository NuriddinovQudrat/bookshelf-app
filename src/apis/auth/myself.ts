import { request } from "../../configs/request";
import { ENDPOINTS } from "../../constants/endpoints";

export const getMySelf = async () => {
  const response = await request.get(ENDPOINTS.MYSELF);
  return response.data;
};
