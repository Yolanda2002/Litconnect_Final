// src/hooks/useSocket.js
import { useEffect } from 'react';
import io from 'socket.io-client';
import store from '../store';
const SOCKET_URL = "http://localhost:4000";
const useSocket = () => {
    useEffect(() => {
        const socket = io(SOCKET_URL, {
            query: {
                token: store.getState().token.value // 获取当前token
            }
        });

        socket.on('connect', () => {
            console.log('Socket connected');
        });

        socket.on('token-fail', () => {
            // 使用 Toast 组件显示错误信息
            // Toast.show({
            //     content: 'Token invalid, please sign in!'
            // });
            store.dispatch({
                type: 'token/setToken',
                payload: ''
            });
            socket.disconnect(); // token失效时断开连接
        });

        // 在组件卸载或token更新时断开连接
        return () => {
            console.log('Disconnecting socket as component unmounts or token changes');
            socket.disconnect();
        };
    }, [store.getState().token.value]);
};

export default useSocket;
