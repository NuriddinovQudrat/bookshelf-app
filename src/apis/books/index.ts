import { request } from "../../configs/request";
import { ENDPOINTS } from "../../constants/endpoints";
import { generateSignature } from "../../utils/generate-signature";
import { getUser } from "../../utils/user";

const user = getUser();

export const getAllBooks = async () => {
  const response = await request.get(ENDPOINTS.BOOKS, {
    headers: {
      Key: user ? user.key : undefined,
      Sign: user ? generateSignature("GET", ENDPOINTS.BOOKS, "", user.secret) : undefined,
    },
  });
  return response.data;
};
