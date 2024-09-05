import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { error } from "console";

let initialState = {
  allposts: [],
  userposts: [],
  isError: "",
  isloading: false,
};
let headers = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjZkOGYxNjc0ZTk0MmVjNTdjM2VjYTAzIiwiaWF0IjoxNzI1NDkzNzQ3fQ.t1nmcr1n3_cpOIjNut-OASSZSB9A7Ce1fqalica27NI",
};
export let getAllPosts = createAsyncThunk(
  "postsSlice/getAllPosts",
  async () => {
    let response = await fetch(
      "https://linked-posts.routemisr.com/posts?limit=50",
      {
        headers,
      }
    );
    let data = await response.json();
    console.log(data);
    return data;
  }
);
let postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      state.isloading = false;
      state.allposts = action.payload.posts;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      action.error.message
        ? (state.isError = action.error.message)
        : (state.isError = "Something went wrong!");
      state.isloading = true;
    });
    builder.addCase(getAllPosts.pending, (state) => {
      state.isloading = true;
    });
  },
});

export let postsReducer = postsSlice.reducer;
