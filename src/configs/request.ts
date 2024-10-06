import axios from "axios";
import md5 from "md5";
import { ErrorProps } from "../types/error";
import { BASE_URL } from "../constants";
import { getUser } from "../utils/user";

const user = getUser();

export const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  async config => {
    if (user) {
      const { url, method } = config;
      const { key, secret } = user;

      const signKeyString = `${method}${BASE_URL}/${url}${secret}`;
      const sign = md5(signKeyString);

      console.log(JSON.parse(config.data));

      config.headers.set("Key", key);
      config.headers.set("Sign", sign);
    }
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
