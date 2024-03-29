import { createSlice } from "@reduxjs/toolkit";
import { getAllArticles } from "./article.service";
import { initialState } from "./article.init";

const articleThunks = [getAllArticles];

const status = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const handleFulfilled = (state: any, { payload }: any) => {
  console.log(payload);
};

const handlePending = (state: any) => {};

const handleRejected = (state: any) => {};

export const articleSlice = createSlice({
  name: "article",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { pending, rejected } = status;

    builder.addCase(getAllArticles.fulfilled, handleFulfilled);
  },
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
