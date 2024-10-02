import { create } from "zustand";

import { LoadingSlice, loadingSlice } from "./slices/loadingSlice";

type StoreState = LoadingSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...loadingSlice(...a),
}));
