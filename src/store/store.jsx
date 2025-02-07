import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import candidateReducer from "./slices/candidateSlice"
export const store = configureStore({
    reducer: {
        authSlice: authReducer,
        candidateSlice: candidateReducer,
    }
})