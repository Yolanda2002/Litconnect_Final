import axios from 'axios';
import queryString from 'query-string';
import  store  from '../store'; 
import { Toast } from 'antd-mobile';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:4000',
    // baseURL: process.env.REACT_APP_ENV === 'development' ? 'http://127.0.0.1:4000' : '',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 请求拦截器，添加 token
axiosInstance.interceptors.request.use((config) => {
    const token = store.getState().token.value;
    if (token) {
        config.headers['Authorization'] = `${token}`;
    }
    return config;
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data.data;
    },
    error => {
        console.log(error);
        // 对响应错误做点什么
        if (error.response && error.response.data && error.response.data.message) {

            // 使用 Toast 组件显示错误信息
            Toast.show({
                content: error.response.data.message,
            });

            if(error.response.status === 403){
                store.dispatch({
                    type:'token/setToken',
                    payload:''
                })
            }
        } else {
            // 如果后端没有提供具体的错误信息，显示通用错误
            Toast.show({
                content: 'An error occurred',
            });
        }
        return Promise.reject(error);
    }
);

// 封装 GET 和 POST 请求，自动处理参数格式和 token
const apiRequest = {
    get: (url, params) => {
        return axiosInstance.get(url, {
            params,
            paramsSerializer: params => queryString.stringify(params),
        });
    },
    post: (url, data ,config) => {
        return axiosInstance.post(url, data,config);
    },
    upload: async (url, data, customParams = {}) => {
        const formData = new FormData();

        // 添加文件到FormData
        if (data) {
            formData.append('image', data);
        }

        // 添加其他自定义参数到FormData
        Object.keys(customParams).forEach(key => {
            formData.append(key, customParams[key]);
        });


        // 自定义请求配置
        const config = {
            headers: {
                // 设置multipart/form-data是为了上传文件
                'Content-Type': 'multipart/form-data'
            }
        };

        // 调用post方法发送请求
        return apiRequest.post(url, formData, config)
    }
};

export  default  apiRequest;
