import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../utils/LocalStorageService'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userinfo: LocalStorageService.getItem('userinfo') || '',
    },
    reducers: {
        setUserInfo: (state, action) => {
            LocalStorageService.setItem('userinfo',action.payload)
            if(!state){
                localStorage.removeItem('userinfo')
            }
            state.userinfo = action.payload;
        },
    }
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
