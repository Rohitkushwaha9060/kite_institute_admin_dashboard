import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface initialStateType {
  isAuth: boolean;
  name: string;
}

interface authStoreType {
  auth: typeof initialState;
  signIn: (user: { name: string }) => void;
  signOut: () => void;
}

const initialState: initialStateType = {
  isAuth: false,
  name: "",
};

export const useAuthStore = create<authStoreType>()(
  devtools(
    persist(
      (set) => ({
        auth: initialState,
        signIn: (user: { name: string }) =>
          set(() => ({ auth: { isAuth: true, name: user?.name } })),
        signOut: () => set(() => ({ auth: initialState })),
      }),
      {
        name: "auth",
        getStorage: () => sessionStorage,
      }
    )
  )
);
