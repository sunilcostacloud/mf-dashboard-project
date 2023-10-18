import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: { token: null },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    setCredentials: (state, action) => {
      const { accessToken } = action.payload
      state.token = accessToken
    },
    logOut: (state) => {
      state.token = null
    },
  },
});

export const { saveToken, setCredentials, logOut } = tokenSlice.actions;

export default tokenSlice.reducer;
