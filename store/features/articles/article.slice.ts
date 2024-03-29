import { createSlice } from "@reduxjs/toolkit";

const initialState: IArticle = {
  id: 0,
  title: "",
  content: "",
  writer: "",
  registerDate: "",
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
