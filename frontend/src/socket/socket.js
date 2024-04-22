// src/socket.js
import  store  from '../store';
import io from 'socket.io-client';
import {Toast} from "antd-mobile";
const SOCKET_URL = "http://localhost:4000";
const socket = io(SOCKET_URL,{
    query: {
        token: store.getState().token.value 
    }
});

socket.on('token-fail',()=>{
    // 使用 Toast 组件显示错误信息
    Toast.show({
        content: 'token invalid ,please sign in ！'
    });
    store.dispatch({
        type:'token/setToken',
        payload:''
    })
})
export default socket;
