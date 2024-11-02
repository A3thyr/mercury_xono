import { create } from "zustand";

type StoreType = {
  isOpen: boolean;
  setIsOpen: () => void;
  setIsClose: () => void;
};

export const useBurgerMenu = create<StoreType>((set) => ({
  isOpen: false,
  setIsOpen: () => set(() => ({ isOpen: true })),
  setIsClose: () => set(() => ({ isOpen: false })),
}));
