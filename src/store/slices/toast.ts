import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    title: "",
    message: "",
    type: "success",
    visible: false,
  },
  reducers: {
    showToast: (state, action) => {
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.visible = true;
    },
    hideToast: (state) => {
      state.title = "";
      state.message = "";
      state.type = "success";
      state.visible = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
