import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ToastProps } from "../interfaces";

export interface AppState {
  toasts: ToastProps[];
}

const initialState: AppState = {
  toasts: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToasts: (state, action: PayloadAction<ToastProps[]>) => {
      state.toasts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToasts } = appSlice.actions;

export default appSlice.reducer;
