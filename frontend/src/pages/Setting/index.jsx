import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineDisplaySettings, } from "react-icons/md";
import {SearchBar, List, Switch, Button, Toast} from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {actions} from '../../slices/header'
import {setToken} from '../../slices/token'
const Setting = () => {

    const dispath = useDispatch();
    useEffect(()=>{
        dispath(actions.hidden());
    },[])
    const nav = useNavigate();
    return (
        <div>
            <div className='flex items-center justify-between px-4 pt-4'>
                <h1 className='text-3xl font-bold'>Setting</h1>
                <MdOutlineDisplaySettings />
            </div>
            <div className='p-4'>
                <SearchBar placeholder='Please enter content' />
            </div>
            <div>
                <List header='Settings list'>
                    <List.Item extra={<Switch defaultChecked />}>New message notification</List.Item>
                    <List.Item extra='No' clickable>
                        Large font size mode
                    </List.Item>
                    <List.Item description='Manage licensed products and devices' clickable>
                        Authorization management
                    </List.Item>
                    <List.Item title='Subtitle information A' description='Subtitle information B' clickable>
                        Here is the main information
                    </List.Item>
                    <List.Item title='Subtitle information A' description='Subtitle information B' clickable>
                        Here is the main information
                    </List.Item>
                    <List.Item title='Subtitle information A' description='Subtitle information B' clickable>
                        Here is the main information
                    </List.Item>
                    <List.Item extra={<Switch defaultChecked />}>New message notification</List.Item>
                    <List.Item extra={<Switch defaultChecked />}>New message notification</List.Item>
                </List>

                <div className='my-6 mx-4'>
                    <Button color='primary' block fill='solid' onClick={()=>{
                        dispath(setToken(''))
                        Toast.show('logout success ！')
                    }}>
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    );
}

Setting.propTypes = {};

export default Setting;