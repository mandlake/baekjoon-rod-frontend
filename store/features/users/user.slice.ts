import { createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  id: 0,
  username: "",
  password: "",
  name: "",
  phone_number: "",
  address: "",
  job: "",
  height: 0,
  weight: 0,
};

export const articleSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = articleSlice.actions;

export default articleSlice.reducer;
