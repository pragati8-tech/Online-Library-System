
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

// 🔹 Create the Redux store (central state container)
const store = configureStore({

  // 🔹 Register reducers (state slices)
  reducer: {
    books: booksReducer,
  },
});

export default store;