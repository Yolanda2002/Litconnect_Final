import {FaRegUser, FaUser} from "react-icons/fa";
import {Card} from "antd-mobile";
import {BsChatRightText} from "react-icons/bs";
import {FaUserGroup} from "react-icons/fa6";
import {LuUsers} from "react-icons/lu";
import {useEffect, useState} from "react";
import { FaHome } from "react-icons/fa";
import { MdContentPaste } from "react-icons/md";
import { IoEnterSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import {useNavigate} from "react-router-dom";

export default function Groups({ rooms }){
    const [roomsAll, setRoomsAll] = useState([])
    let nav = useNavigate();
    useEffect(()=>{
        if(rooms){
            setRoomsAll(rooms)
        }
    },[rooms])

    console.log(roomsAll)
    return <section className='space-y-4'>
        {
            roomsAll.map((item , index)=> <section key={item.room_id}>

                <div className=' p-2 rounded-xl'>
                    <Card>
                        <div className='flex items-center justify-between'>

                            <div className='ml-2 flex items-center '>
                                <FaHome size={22}/>
                                 <span className='ml-2 text-xl font-bold'>
                                        { item.title }
                                 </span>
                            </div>

                            <IoEnterSharp onClick={()=>{
                                nav(`/roomChat/${item.room_id}`)
                            }} size={32}/>

                        </div>
                        <div className='flex items-center mt-4 border-t pt-4'>
                            <div className='ml-2'>
                                <span className='text-md'>Content:</span>
                                <span className='ml-2 text-md'>{item.content}</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>)
        }
    </section>
}
