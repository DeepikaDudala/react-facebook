import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date: "",
    gender: "",
  },
};
const formSlice = createSlice({
  initialState,
  name:"form",
  reducers: {
    updateField: (state, action) => {
      state.formData = {...state.formData, ...action.payload};
    },
    submitForm: (state,action) => {
      console.log(action.payload)
    },
  },
});

export const { updateField, submitForm } = formSlice.actions;
export default formSlice.reducer;
