import {Button, CapsuleTabs, Input, TextArea, Toast} from 'antd-mobile'
import { useDispatch } from "react-redux";
import { actions } from '../../slices/header'
import React, {useEffect, useState} from 'react';
import Chats from "../Chat/Chats";
import { useSocket } from '../../SocketContext';

import { IoSendSharp } from "react-icons/io5";
import { getRoomChatsApi , getAllRoomsApi} from '../../api/chat'
import {IoMdAddCircleOutline} from "react-icons/io";
import {useNavigate, useParams} from "react-router-dom";


function Chat() {
    let {roomId} = useParams();
    console.log(roomId)
    const socket = useSocket();
    const [rooms, setRooms] = useState([])
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState()
    const dispath = useDispatch();
    useEffect(() => {
        dispath(actions.show());
    }, [])

    const  nav = useNavigate();

    useEffect(()=>{
        if(!socket) return;
        socket.on('newRoomMessage', (newMessage)=>{
            console.log(newMessage)
            setMessages(message => [
                ...message,
                newMessage
            ])
        });
    },[socket])

    useEffect(() => {
        getRoomChatsApi(roomId).then(res=>{
            setMessages(res.messages)
        })
    }, []);

    const send = ()=>{
        // 如果有值 则发送
        if (message) {
            socket.emit('roomChatMessage', { message , roomId });
            setMessage('');
        }else{
            Toast.show('Write your message here !')
        }
    }
    if(!socket) return  <>loading socket...</>


    return (
        <div className="Chat">
            <section className='flex flex-col overflow-auto h-full'>
                <section className='flex-1 overflow-auto h-full p-3'>
                    <Chats messageList={messages}/>
                </section>
                <div className='px-4 shadow-2xl  pb-4 flex'>
                    <div className='border py-3  border-primary text-white px-2 rounded-md mt-4 mb-2 flex-1'>
                        <TextArea
                            placeholder="Write your message here"
                            value={message}
                            onChange={val => {
                                setMessage(val)
                            }}
                        />
                        <div className='flex justify-end'>
                            <Button color='primary' size='small' fill='outline' onClick={send} className='flex'>
                                <div className='flex items-center p-1'>
                                            <span className='mr-2'>
                                                Send
                                            </span> <IoSendSharp size={20} className='text-lg'/>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Chat;
