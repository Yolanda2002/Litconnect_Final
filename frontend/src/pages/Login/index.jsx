import React, { useEffect, useState } from 'react';
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { GrChapterAdd } from "react-icons/gr";
import {Input, Button, Toast} from 'antd-mobile';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { actions } from '../../slices/header';
import { setToken } from '../../slices/token';
import { setUserInfo } from '../../slices/user';
import { loginApi } from '../../api/user'; 

const Login = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actions.hidden());
    }, []);

    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleLogin = async () => {
         // 调用登录接口
          try {
             let data = await loginApi({ username: form.username, password: form.password })
              setForm({
                  username: '',
                  password: ''
              })
              dispatch(setToken(data.token));
              dispatch(setUserInfo(data.user));
              Toast.show('login success ！')
              navigate('/books');
          }catch (err){ }

    };

    return (
        <div>
            <div className='flex justify-center mt-8'>
                <FaRegFaceLaughWink size={100} />
            </div>
            <div className='px-8 mt-8'>
                <h2 className='py-4 text-4xl font-bold'>
                    Login
                </h2>
                <div className='mt-6'>
                    <section className='flex space-x-2 items-center'>
                        <FaRegUserCircle />
                        <p className='text-xl text-primary'>User name</p>
                    </section>
                    <div className='border-2 py-4 px-2 rounded-md mt-2'>
                        <Input
                            placeholder='Please enter the user name'
                            value={form.username}
                            onChange={val => {
                                setForm(item => ({ ...item, username: val }))
                            }}
                        />
                    </div>
                </div>
                <div className='mt-6'>
                    <section className='flex space-x-2 items-center'>
                        <RiLockPasswordLine />
                        <p className='text-xl text-primary'>Password</p>
                    </section>
                    <div className='border-2 py-4 px-2 rounded-md mt-2'>
                        <Input
                            type="password"
                            placeholder='Please enter the password'
                            value={form.password}
                            onChange={val => {
                                setForm(item => ({ ...item, password: val }))
                            }}
                        />
                    </div>
                </div>
                <div className='py-2'>
                    <NavLink to='/reg'>Don’t have an account yet? Click here to register</NavLink>
                </div>
                <div className='mt-6'>
                    <Button color='primary' block fill='solid' size='large' onClick={handleLogin}>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
