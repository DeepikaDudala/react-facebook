import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./signUpFormSlice";

export const store = configureStore({
  reducer: {
    form:formSlice
  },
});
