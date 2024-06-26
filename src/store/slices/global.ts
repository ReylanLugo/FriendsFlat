import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    toggleApartmentDetails: false,
    toggleNewApartment: false,
    toggleNewRoom: false,
  },
  reducers: {
    toggleApartmentDetails: (state) => {
      state.toggleApartmentDetails = !state.toggleApartmentDetails;
    },
    toggleNewApartment: (state) => {
      state.toggleNewApartment = !state.toggleNewApartment;
    },
    toggleNewRoom: (state) => {
      state.toggleNewRoom = !state.toggleNewRoom;
    },
  },
});

export const { toggleApartmentDetails, toggleNewApartment, toggleNewRoom } =
  globalSlice.actions;
export default globalSlice.reducer;
