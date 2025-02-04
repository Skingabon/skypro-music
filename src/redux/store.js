import { configureStore } from "@reduxjs/toolkit";
import { trackReducer } from "./trackSlice";
import { tracksApi } from "../Api/tracksApi";

export const store = configureStore({
    reducer: {
        tracks: trackReducer,
        [tracksApi.reducerPath]: tracksApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tracksApi.middleware),
})  