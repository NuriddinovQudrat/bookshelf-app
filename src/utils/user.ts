import { UserDetail } from "../types/auth";

export const clearUser = () => {
  localStorage.clear();
};

export const setUser = (data: UserDetail) => {
  const user = JSON.stringify(data);
  localStorage.setItem("user", user);
};

export const getUser = (): UserDetail => {
  const user: UserDetail = JSON.parse(
    localStorage.getItem("user") === "undefined"
      ? "null"
      : (localStorage.getItem("user") as string),
  );

  return user;
};
