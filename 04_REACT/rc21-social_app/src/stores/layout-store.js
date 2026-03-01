import { create } from "zustand";

const useLayoutStore = create((set) => ({
  open: false,
  setOpen: () => set((state) => ({ open: !state.open })),
}));

export default useLayoutStore;
