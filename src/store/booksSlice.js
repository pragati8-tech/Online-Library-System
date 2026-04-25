import { createSlice } from "@reduxjs/toolkit";
import { books as initialBooks } from "../data/books";

// 🔹 Create a Redux slice for managing books
const booksSlice = createSlice({
  name: "books",

  // 🔹 Initial state (starting data)
  initialState: {
    books: initialBooks,
  },

  reducers: {

    // 🔹 Add a new book to the list
    addBook: (state, action) => {

      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;