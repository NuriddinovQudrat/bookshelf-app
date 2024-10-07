import { create } from "zustand";
import { clearUser, getUser, setUser as localSetUser } from "../../utils/user";
import { UserDetail } from "../../types/auth";

interface UserStoreProps {
  user: UserDetail;
  setClearUser: () => void;
  setUser: (user: UserDetail) => void;
}

export const useUserStore = create<UserStoreProps>(set => ({
  user: getUser(),
  setUser: user => {
    set({ user: user });
    localSetUser(user);
  },
  setClearUser: () => {
    set({ user: undefined });
    clearUser();
  },
}));
