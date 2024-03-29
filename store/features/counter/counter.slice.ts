import { createSlice } from "@reduxjs/toolkit";

const initialState: ICounter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    handleplus: (state) => {
      state.value += 1;
    },
    handleMinus: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { handleplus, handleMinus, incrementByAmount } =
  counterSlice.actions;

export const getCount = (state: any) => state.count.value;

export default counterSlice.reducer;
