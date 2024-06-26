import { createSlice } from "@reduxjs/toolkit";
import { globalStateType } from "@/utils/types/general.types";

const initialState: globalStateType = {
  toggleApartmentDetails: false,
  toggleNewApartment: false,
  toggleNewRoom: false,
  toggleProfile: false,
  toggleMenu: false,
  searchValue: "",
  minPrice: 0,
  maxPrice: 0,
  minSize: 0,
  maxSize: 0,
  selectApartment: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
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
    toggleProfile: (state) => {
      state.toggleProfile = !state.toggleProfile;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinSize: (state, action) => {
      state.minSize = action.payload;
    },
    setMaxSize: (state, action) => {
      state.maxSize = action.payload;
    },
    toggleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
    setSelectApartment: (state, action) => {
      state.selectApartment = action.payload;
    },
  },
});

export const {
  toggleApartmentDetails,
  setSearchValue,
  toggleNewApartment,
  toggleNewRoom,
  setMinPrice,
  setMaxPrice,
  setMinSize,
  setMaxSize,
  toggleProfile,
  toggleMenu,
  setSelectApartment,
} = globalSlice.actions;
export default globalSlice.reducer;
