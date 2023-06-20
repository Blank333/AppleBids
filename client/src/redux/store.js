import { configureStore } from "@reduxjs/toolkit";
import appleReducer from "./appleSlice";

export const store = configureStore({
  reducer: {
    applebids: appleReducer,
  },
});
