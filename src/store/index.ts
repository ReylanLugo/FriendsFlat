import { configureStore } from "@reduxjs/toolkit";
import global from "./slices/global";
import roomForm from "./slices/room";
import apartmentForm from "@/store/slices/apartment";
import toast from "@/store/slices/toast";

export const makeStore = () => {
  return configureStore({
    reducer: {
      global: global,
      roomForm: roomForm,
      apartmentForm: apartmentForm,
      toast: toast,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
