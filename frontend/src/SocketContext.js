// src/SocketContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import store from './store';
import {Toast} from "antd-mobile";
import {useSelector} from "react-redux";
const SOCKET_URL = "http://localhost:4000";
const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    let token = useSelector(state => state.token.value)
    useEffect(() => {
        const newSocket = io(SOCKET_URL, {
            query: {
                token: token
            }
        });
        newSocket.on('connect', () => {
            setSocket(newSocket);
            newSocket.on('token-fail', () => {
                // 使用 Toast 组件显示错误信息
                // Toast.show({
                //     content: 'Token invalid, please sign in!'
                // });
                store.dispatch({
                    type: 'token/setToken',
                    payload: ''
                });
                newSocket.disconnect(); // token失效时断开连接
            });
        });
        return () => newSocket.close();
    }, [token]);
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);
