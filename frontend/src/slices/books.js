import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../utils/LocalStorageService'

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        bookForm: LocalStorageService.getItem('bookForm') || {
            bookName: '',
            chapter: '',
            content: '',
            review: '',
        },
    },
    reducers: {
        setBook: (state, action) => {
            LocalStorageService.setItem('bookForm',action.payload)
            state.bookForm = action.payload;
        },
    }
});

export const { setBook } = bookSlice.actions;

export default bookSlice.reducer;
