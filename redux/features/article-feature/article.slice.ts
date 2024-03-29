import { createSlice } from "@reduxjs/toolkit";
import { getAllArticles } from "./article.service";

const articleThunks = [getAllArticles];

const status = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const handlePending = (state: any) => {};

const handleFulFilled = (state: any) => {};

const handleRejected = (state: any) => {};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { pending, rejected } = status;

    builder.addCase("", handleFulFilled);
  },
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
