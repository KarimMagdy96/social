import { createSlice } from "@reduxjs/toolkit";

let counter = {
  counter: 0,
};
let counterSlice = createSlice({
  name: "counter",
  initialState: counter,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export let counterReducer = counterSlice.reducer;
