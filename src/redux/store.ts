import { configureStore } from "@reduxjs/toolkit";
import jobSeekerReducer from "./JobSeekerSlice";

export const store = configureStore({
  reducer: {
    jobSeeker: jobSeekerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
