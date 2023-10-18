import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: { token: null },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { saveToken } = tokenSlice.actions;

export default tokenSlice.reducer;
