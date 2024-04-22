import React from 'react';
// import PropTypes from 'prop-types';
// import { MdOutlineDisplaySettings, } from "react-icons/md";
import { SearchBar,  Tag , Divider } from 'antd-mobile'
import { useNavigate } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdOutlineFolderDelete } from "react-icons/md";
import { RiUploadCloudLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { LuBoxSelect } from "react-icons/lu";
import { FaRegFileArchive } from "react-icons/fa";

const UserInfo = () => {
    const nav = useNavigate();
    return (
        <div>
            <div className='flex items-center justify-between px-4 pt-4'>
                <h1 className='text-3xl font-bold'>Alice's Page</h1>
                <HiOutlineUserCircle size={50} />
            </div>
            <div className='p-4'>
                <SearchBar placeholder='Please enter content' />
            </div>
            <div className='space-x-2 px-4'>
                <Tag color='success' round>Dec 2023</Tag>
                <Tag color='#2db7f5' round>3 Reviews</Tag>
            </div>
            <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4 px-2'>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 1</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 2</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 3</p>
                </div>
            </div>

            <div className='flex justify-around mt-4'>
                <LuBoxSelect/>
                <MdOutlineFolderDelete/>
                <RiUploadCloudLine/>
                <FiEdit/>
                <FaRegFileArchive/>
            </div>
            <Divider />

            <div className='space-x-2 px-4'>
                <Tag color='success' round>Nov 2020</Tag>
                <Tag color='#2db7f5' round>5 Reviews</Tag>
            </div>
            <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4 px-2'>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 1</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 2</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 3</p>
                </div>
            </div>

            <div className='flex justify-around mt-4'>
                <LuBoxSelect/>
                <MdOutlineFolderDelete/>
                <RiUploadCloudLine/>
                <FiEdit/>
                <FaRegFileArchive/>
            </div>
            <Divider />

            <div className='space-x-2 px-4'>
                <Tag color='success' round>Oct 2023</Tag>
                <Tag color='#2db7f5' round>4 Reviews</Tag>
            </div>
            <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4 px-2'>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 1</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 2</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 3</p>
                </div>
            </div>

            <div className='flex justify-around mt-4'>
                <LuBoxSelect/>
                <MdOutlineFolderDelete/>
                <RiUploadCloudLine/>
                <FiEdit/>
                <FaRegFileArchive/>
            </div>
            <Divider />
            <div className='space-x-2 px-4'>
                <Tag color='success' round>Sep 2023</Tag>
                <Tag color='#2db7f5' round>8 Reviews</Tag>
            </div>
            <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4 px-2'>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 1</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 2</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 3</p>
                </div>
            </div>

            <div className='flex justify-around mt-4'>
                <LuBoxSelect/>
                <MdOutlineFolderDelete/>
                <RiUploadCloudLine/>
                <FiEdit/>
                <FaRegFileArchive/>
            </div>
            <Divider />
            <div className='space-x-2 px-4'>
                <Tag color='success' round>Aug 2020</Tag>
                <Tag color='#2db7f5' round>5 Reviews</Tag>
            </div>
            <div className='grid grid-cols-3 grid-rows-1 gap-x-2 mt-4 px-2 '>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 1</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 2</p>
                </div>
                <div className='border p-4 rounded-xl'>
                    <p className='text-xl'>Book review 3</p>
                </div>
            </div>

            <div className='flex justify-around mt-4'>
                <LuBoxSelect/>
                <MdOutlineFolderDelete/>
                <RiUploadCloudLine/>
                <FiEdit/>
                <FaRegFileArchive/>
            </div>
            <Divider />
        </div>
    );
}

UserInfo.propTypes = {};

export default UserInfo;