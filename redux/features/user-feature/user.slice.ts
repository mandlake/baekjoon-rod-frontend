import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import { fetchAllUsers } from "./user.service";
import { stat } from "fs";

const userThunks = [fetchAllUsers];

const status = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const handleFulfilled = (state: any, { payload }: any) => {
  state.array = payload;
};

const handlePending = (state: any) => {};

const handleRejected = (state: any) => {};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.fulfilled, handleFulfilled)
      .addCase(fetchAllUsers.pending, handlePending)
      .addCase(fetchAllUsers.rejected, handleRejected);
  },
});

export const getAllUsers = (state: any) => {
  return state.user.array.result;
};

export const {} = userSlice.actions;

export default userSlice.reducer;
