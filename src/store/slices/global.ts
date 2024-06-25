import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    toggleApartmentDetails: false,
  },
  reducers: {
    toggleApartmentDetails: (state) => {
      state.toggleApartmentDetails = !state.toggleApartmentDetails;
    },
  },
});

export const { toggleApartmentDetails } = globalSlice.actions;
export default globalSlice.reducer;
