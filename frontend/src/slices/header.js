import {createSlice} from "@reduxjs/toolkit";

const headerSclic = createSlice({
    name:'header',
    initialState: {
        // 初始状态
        isShow:false
    },
    reducers: {
        // 处理不同的 action 类型
        show: state => {
            state.isShow = true
        },
        hidden: state => {
            state.isShow = false
        },
        change: state => {
            state.isShow = !state.isShow
        }
    },
})
export const { actions, reducer } = headerSclic;
