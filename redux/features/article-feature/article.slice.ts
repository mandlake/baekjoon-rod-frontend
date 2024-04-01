import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { fetchAllArticles } from "./article.service";

const articleThunks = [fetchAllArticles];

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

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { pending, rejected } = status;

    builder
      .addCase(fetchAllArticles.fulfilled, handleFulfilled)
      .addCase(pending, handlePending)
      .addCase(rejected, handleRejected);
  },
});

export const getAllArticles = (state: any) => {
  return state.article.array.result;
};

export const {} = articleSlice.actions;

export default articleSlice.reducer;
