import { create } from "zustand";
import { getUser, setUser as localSetUser } from "../../utils/user";
import { UserDetail } from "../../types/auth";

interface UserStoreProps {
  user: UserDetail;
  setClearUser: () => void;
  setUser: (user: UserDetail) => void;
}

export const useUserStore = create<UserStoreProps>(set => ({
  user: getUser(),
  setUser: user => {
    localSetUser(user);
    set({ user: user });
  },
  setClearUser: () => {
    set({ user: undefined });
  },
}));
