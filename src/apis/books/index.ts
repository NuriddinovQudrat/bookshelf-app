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

export const createBook = async (data: { isbn: string }) => {
  const response = await request.post(ENDPOINTS.BOOKS, data, {
    headers: {
      Key: user ? user.key : undefined,
      Sign: user ? generateSignature("POST", ENDPOINTS.BOOKS, data, user.secret) : undefined,
    },
  });
  return response.data;
};

export const updateBook = async (data: any, id: number) => {
  const response = await request.patch(`${ENDPOINTS.BOOKS}/${id}`, data, {
    headers: {
      Key: user ? user.key : undefined,
      Sign: user
        ? generateSignature("PATCH", `${ENDPOINTS.BOOKS}/${id}`, data, user.secret)
        : undefined,
    },
  });
  return response.data;
};

export const deleteBook = async (id: number) => {
  const response = await request.delete(`${ENDPOINTS.BOOKS}/${id}`, {
    headers: {
      Key: user ? user.key : undefined,
      Sign: user
        ? generateSignature("DELETE", `${ENDPOINTS.BOOKS}/${id}`, "", user.secret)
        : undefined,
    },
  });
  return response.data;
};
