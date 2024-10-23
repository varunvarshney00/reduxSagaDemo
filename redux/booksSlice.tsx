import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';


type Book = { bookId: string; title: string }


const booksAdapter = createEntityAdapter({
  selectId: (book: Book) => book.bookId,

  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

console.log('booksadapter==>',booksAdapter);



const booksSlice = createSlice({
  name: 'books',

  initialState: booksAdapter.getInitialState(),

  reducers: {

    bookAdded: booksAdapter.addOne,

    booksReceived(state, action) {
      booksAdapter.setAll(state, action.payload.books);
    },

  },
});

console.log('booksslice==>', booksSlice);

export const { bookAdded, booksReceived } = booksSlice.actions;


export default booksSlice.reducer;


export const booksSelectors = booksAdapter.getSelectors((state: any) => state.books);
