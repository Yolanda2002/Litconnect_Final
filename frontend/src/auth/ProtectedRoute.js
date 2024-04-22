import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import {useSelector} from "react-redux";


const ProtectedRoute = ({ children }) => {
    let value = useSelector(state => state.token.value)
    value =!!value;
    if (!value) {
        // 如果未登录，重定向到登录页面
        return <Navigate to="/" />;
    }

    return children; // 如果已登录，渲染传递给 ProtectedRoute 的子组件
};

export  default  ProtectedRoute