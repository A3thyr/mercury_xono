import { create } from "zustand";

type StoreType = {
  locale: string;
  setLocale: (value: string) => void;
};

export const useSetLocale = create<StoreType>((set) => ({
  locale: "en",
  setLocale: (value: string) => set(() => ({ locale: value })),
}));
