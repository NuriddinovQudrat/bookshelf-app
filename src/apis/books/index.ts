import { request } from "../../configs/request";
import { ENDPOINTS } from "../../constants/endpoints";

export const getAllBooks = async () => {
  try {
    const response = await request.get(ENDPOINTS.BOOKS);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch all books:", error);
    throw error;
  }
};

export const createBook = async (data: { isbn: string }) => {
  try {
    const response = await request.post(ENDPOINTS.BOOKS, data);
    return response.data;
  } catch (error) {
    console.error("Failed to create book:", error);
    throw error;
  }
};

export const updateBook = async (data: any, id: number) => {
  try {
    data.status = Number(data.status);
    const response = await request.patch(`${ENDPOINTS.BOOKS}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Failed to update book:", error);
    throw error;
  }
};

export const deleteBook = async (id: number) => {
  try {
    const response = await request.delete(`${ENDPOINTS.BOOKS}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete book:", error);
    throw error;
  }
};
