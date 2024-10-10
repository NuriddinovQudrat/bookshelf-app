import { request } from "../../configs/request";
import { ENDPOINTS } from "../../constants/endpoints";

export const getAllBooks = async () => {
  const response = await request.get(ENDPOINTS.BOOKS);
  return response.data;
};

export const createBook = async (data: { isbn: string }) => {
  const response = await request.post(ENDPOINTS.BOOKS, data);
  return response.data;
};

export const updateBook = async (data: any, id: number) => {
  data.status = Number(data.status);
  const response = await request.patch(`${ENDPOINTS.BOOKS}/${id}`, data);
  return response.data;
};

export const deleteBook = async (id: number) => {
  const response = await request.delete(`${ENDPOINTS.BOOKS}/${id}`);
  return response.data;
};
