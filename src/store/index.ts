import { configureStore } from "@reduxjs/toolkit";
import global from "./slices/global";

export const makeStore = () => {
  return configureStore({
    reducer: {
      global: global,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
