import React, { useEffect, useState } from 'react';
import {Input, Button, Toast} from 'antd-mobile';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import {NavLink, useNavigate} from 'react-router-dom';
import { FaFaceGrinHearts } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { actions } from '../../slices/header';
import {loginApi, regApi} from '../../api/user'; // 导入注册接口

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(actions.hidden());
    }, []);

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleRegister = async () => {
        try {
            await regApi({ username: form.username, password: form.password })
            setForm({
                username: '',
                password: ''
            })
            Toast.show('register success ！')
            navigate('/');
        }catch (err){ }
    };

    return (
        <div>
            <div className='flex justify-center mt-8'>
                <FaFaceGrinHearts size={100} />
            </div>
            <div className='px-8 mt-8'>
                <h2 className='py-4 text-4xl font-bold'>
                    Register
                </h2>
                <div className='mt-6'>
                    <section className='flex space-x-2 items-center'>
                        <FaRegUserCircle />
                        <p className='text-xl text-primary'>User name</p>
                    </section>
                    <div className='border-2 py-4 px-2 rounded-md mt-2'>
                        <Input
                            placeholder='Please enter the new user name'
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
                            placeholder='Please enter your password'
                            value={form.password}
                            onChange={val => {
                                setForm(item => ({ ...item, password: val }))
                            }}
                        />
                    </div>
                </div>
                <div className='py-2'>
                    <NavLink to='/'>Have an account? Click Login</NavLink>
                </div>
                <div className='mt-6'>
                    <Button color='primary' block fill='solid' size='large' onClick={handleRegister}>
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Register;
