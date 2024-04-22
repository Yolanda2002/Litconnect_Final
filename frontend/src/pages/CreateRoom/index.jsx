import React, {useEffect, useState} from "react";
import { Button, Input, TextArea, Toast } from "antd-mobile";
import { FaDoorOpen } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { useDispatch } from "react-redux";
import { createRoomApi } from '../../api/chat';
import {actions} from "../../slices/header";
import {useNavigate} from "react-router-dom"; // 假设你有相应的API函数
function CreateRoom() {
    const nav =useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        title: '',
        content: '',
    });

    const handleInputChange = (value, field) => {
        setForm(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    useEffect(() => {
        dispatch(actions.show());
    }, [dispatch]);

    const handleSubmit = async () => {
        try {
            await createRoomApi(form);
            Toast.show('Room created successfully!');
            // Reset form
            setForm({
                title: '',
                content: '',
            });

            nav('/chat')
        } catch (err) {
            Toast.show('Failed to create room');
        }
    };

    return (
        <div className="CreateRoom p-2 px-6">
            <h2 className='text-3xl font-bold mt-2'>Create a Room!</h2>
            <div className='mt-8'>
                <section className='flex space-x-2 items-center'>
                    <FaDoorOpen />
                    <p className='text-xl text-primary'>Room Name</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <Input
                        placeholder='Please enter the room name'
                        value={form.title}
                        onChange={e => handleInputChange(e, 'title')}
                    />
                </div>
            </div>
            <div className='mt-6'>
                <section className='flex space-x-2 items-center'>
                    <MdDescription />
                    <p className='text-xl text-primary'>Room Description</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <TextArea
                        placeholder='Describe your room'
                        value={form.content}
                        onChange={e => handleInputChange(e, 'content')}
                        showCount
                        maxLength={500}
                    />
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <Button color='primary' style={{width:'100%'}} size='large' onClick={() => handleSubmit()}>Create Room</Button>
            </div>
        </div>
    );
}

export default CreateRoom;
