import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../utils/LocalStorageService'

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        value: LocalStorageService.getItem('token') || '',
    },
    reducers: {
        setToken: (state, action) => {
            LocalStorageService.setItem('token',action.payload)
            state.value = action.payload;
        },
    }
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
