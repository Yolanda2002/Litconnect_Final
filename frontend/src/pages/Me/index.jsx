import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Toast, Space, List, Card , Tag , Button} from "antd-mobile";
import { useDispatch, useSelector } from "react-redux";
import { uploadImg } from "../../api/common";
import { updateImg } from "../../api/user";
import { useNavigate } from 'react-router-dom';
import { getAllBookBuId } from "../../api/books";
import { IMGURL } from "../../const";
import { setUserInfo } from '../../slices/user';
import './Me.css'; 
import Macy from 'macy'
import { setToken } from '../../slices/token';
import { CiStar } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import {PayCircleOutline, SetOutline, UnorderedListOutline} from "antd-mobile-icons";
import { FaRegStar } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
function Me() {
    const [masonry, setMasonry] = useState(null);
    const nav = useNavigate();
    const { username, profile_picture } = useSelector(state => state.user.userinfo);
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
    const [books, setBooks] = useState([]);
    const getMacy = () => {
        if (masonry) {
            //当数据更新时，会重新计算并排版
            masonry.reInit()
        } else {
            let masonry = new Macy({
                container: '.macy-container', // 图像列表容器
                trueOrder: false,
                waitForImages: false,
                useOwnImageLoader: false,
                debug: true,
                margin: { x: 10, y: 15 },    // 设计列与列的间距
                columns: 2,    // 设置列数
            })
            setMasonry(masonry)
        }
    }

    const handleSubmit = ()=>{
        console.log('handleSubmit');
        dispatch(setUserInfo());
        dispatch(setToken(''));
        Toast.show('logout success')
        nav('/')
    }
    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const result = await uploadImg(file);
                Toast.show('Avatar uploaded successfully');
                await updateImg(result.path);
                dispatch(setUserInfo({
                    username ,
                    profile_picture:  result.path
                }));
            } catch (err) {
                Toast.show('Failed to upload avatar');
            }
        }
    };

    return (
        <div className="me-page">
            <Space direction="vertical" size="large" align="center" className='bg-white w-full mv-4 p-4 mt-2'>
                <div onClick={handleAvatarClick} className="avatar-wrapper">
                    {profile_picture ? (
                        <Avatar src={IMGURL + profile_picture} style={{ '--size': '70px', '--border-radius': '50%',border:'3px solid #ccc' }} />
                    ) : (
                        <Avatar style={{ '--size': '120px', '--border-radius': '50%' }} />
                    )}
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    accept="image/*"
                />
                <h2 className="username text-center">{username}</h2>

            </Space>

            {/*<h4 className='flex font-bold mt-10 justify-start w-full text-[18px]'>*/}
            {/*    我的发布*/}
            {/*</h4>*/}
            <List style={{width:'100%'}}>
                <List.Item prefix={<VscPreview  />} onClick={() => {nav('/meReview')}}>
                    My book review
                </List.Item>
                <List.Item prefix={<AiOutlineLike />} onClick={() => {nav('/meCollection')}}>
                    My collection
                </List.Item>
                <List.Item prefix={<FaRegStar  />} onClick={() => {nav('/meLike')}}>
                    My likes
                </List.Item>
            </List>


            <section className='mt-10 w-full'>
                <Button color='primary' style={{width:'100%'}}  size='large' onClick={() => handleSubmit()}>Log out</Button>
            </section>
        </div>
    );
}

export default Me;
