import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./features/tokenSlice";

export const store = configureStore({
  reducer: {
    tokens: tokenReducer,
  },
});
