import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JobSeeker {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  accountVerified: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface JobSeekerState {
  jobSeeker: JobSeeker | null;
}

const initialState: JobSeekerState = {
  jobSeeker: null,
};

export const jobSeekerSlice = createSlice({
  name: "jobSeeker",
  initialState,
  reducers: {
    createJobSeeker: (state, action: PayloadAction<JobSeeker>) => {
      state.jobSeeker = action.payload;
    },
    updateJobSeeker: (state, action: PayloadAction<Partial<JobSeeker>>) => {
      state.jobSeeker = { ...state.jobSeeker, ...action.payload } as JobSeeker;
    },
    logoutJobSeeker: (state) => {
      state.jobSeeker = null;
    },
  },
});

export const { createJobSeeker, updateJobSeeker, logoutJobSeeker } =
  jobSeekerSlice.actions;

export default jobSeekerSlice.reducer;
