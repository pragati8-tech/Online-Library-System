import { createSlice } from "@reduxjs/toolkit";
import { books as initialBooks } from "../data/books"; // dummy data se shuru karenge

const booksSlice = createSlice({
  name: "books",

  initialState: {
    books: initialBooks,
  },

  reducers: {

    addBook: (state, action) => {
   
      state.books.unshift(action.payload); 
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;