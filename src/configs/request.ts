import axios from "axios";
import { ErrorProps } from "../types/error";
import { BASE_URL } from "../constants";
import { generateSignature } from "../utils/generate-signature";
import { useUserStore } from "../store/user";

export const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  async config => {
    const user = useUserStore.getState().user;

    if (user) {
      config.headers["Key"] = user ? user.key : undefined;
      config.headers["Sign"] = user
        ? generateSignature(
            `${config?.method?.toUpperCase()}`,
            `${config?.url}`,
            config.data ? config.data : "",
            user.secret,
          )
        : undefined;
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
    if (error?.response?.status === 401) {
      const user = useUserStore.getState();
      user.setClearUser();
    }
    return await Promise.reject(error);
  },
);
