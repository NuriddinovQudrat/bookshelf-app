import { request } from "../../configs/request";
import { ENDPOINTS } from "../../constants/endpoints";
import { generateSignature } from "../../utils/generate-signature";
import { getUser } from "../../utils/user";

const user = getUser();

export const getMySelf = async () => {
  const response = await request.get(ENDPOINTS.MYSELF, {
    headers: {
      Key: user ? user.key : undefined,
      Sign: user ? generateSignature("GET", ENDPOINTS.MYSELF, "", user.secret) : undefined,
    },
  });
  return response.data;
};
