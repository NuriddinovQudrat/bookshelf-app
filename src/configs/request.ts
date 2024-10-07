import axios from "axios";
import { ErrorProps } from "../types/error";
import { BASE_URL } from "../constants";

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
    return await Promise.reject(error);
  },
);
