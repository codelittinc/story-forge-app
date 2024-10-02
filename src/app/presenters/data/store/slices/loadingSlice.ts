import { StateCreator } from "zustand";

export interface LoadingSlice {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const loadingSlice: StateCreator<LoadingSlice> = (set) => ({
  loading: false,
  setLoading: async (loading) => {
    set({ loading });
  },
});
