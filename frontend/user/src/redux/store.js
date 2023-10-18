import { configureStore } from "@reduxjs/toolkit";
import { petsApiSlice } from "./api/petsApiSlice";
import authReducer from "./features/auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query"
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        [petsApiSlice.reducerPath]: petsApiSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petsApiSlice.middleware, apiSlice.middleware),
    devTools: true,
});

setupListeners(store.dispatch)