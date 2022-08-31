import { createSlice } from "@reduxjs/toolkit";

const newProductSlice = createSlice({
    name: "newProduct",
    initialState: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    reducers: {
        newProductStart: (state) => {
        state.isFetching = true;
      },
      newProductSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      },
      newProductFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
    },
  });

export const { newProductStart, newProductSuccess, newProductFailure } = newProductSlice.actions;

export default newProductSlice.reducer;
