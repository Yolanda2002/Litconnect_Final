import {FaRegUser, FaUser} from "react-icons/fa";
import {Card , Avatar} from "antd-mobile";
import {BsChatRightText} from "react-icons/bs";
import {useEffect, useRef, useState} from "react";
import { IMGURL } from "../../const"; 

export default function Chats({messageList}){
    const [messages, setMessages] = useState([])

    const scrollRef = useRef(null); // 用于指向局部滚动容器的ref

    useEffect(()=>{
        if(messageList){
            setMessages(messageList)


        }
    },[messageList])


    useEffect(()=>{
        // 需要等待数据加载后才去 初始化数据
        if (scrollRef.current) {
            const { scrollHeight, clientHeight } = scrollRef.current;
            scrollRef.current.scrollTop = scrollHeight - clientHeight ; // 滚动到底部
        }
    },[messages])
    console.log(messages)
    return <section className='space-y-4  overflow-y-auto h-full pb-2'  ref={scrollRef}>
        {
            messages.map((mes , index) => {
                return <section key={index}>
                    <div className='flex items-center'>

                        {
                           <Avatar src={ IMGURL + mes.profile_picture} style={{'--border-radius':'50%' , '--size':'40px'}}  />
                        }
                        <span className='ml-2 text-2xl font-bold'>{mes.username}</span>
                    </div>
                    <div className='border mt-4  rounded-xl'>
                        <Card>
                          <BsChatRightText size={16}/>
                            <p className='mt-1'>
                                {mes.message_content}
                            </p>
                        </Card>
                    </div>
                </section>

            })
        }
    </section>
}
