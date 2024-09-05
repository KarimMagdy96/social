import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { postsReducer } from "./postsSlice";

export let store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
