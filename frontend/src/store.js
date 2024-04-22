// store.js
import { configureStore } from '@reduxjs/toolkit';
import { reducer as headerReducer } from './slices/header';
import tokenReducer from './slices/token';
import booksReducer from './slices/books';
import userReducer from './slices/user';

// 创建 Redux store
const store = configureStore({
    reducer: {
        user: userReducer,
        header: headerReducer,
        token: tokenReducer,
        books: booksReducer
    },
});
export default store;
