import axios from "axios";
import { ErrorProps } from "../types/error";
import { BASE_URL } from "../constants";
import { clearUser } from "../utils/user";

export const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  async config => {
    return config;
  },
  async error => {
    return await Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => {
    return response;
  },
  async (error: ErrorProps) => {
    if (error.status === 401) {
      clearUser();
      window.location.reload();
    }
    return await Promise.reject(error);
  },
);
