import React, { useEffect, useState } from "react";
import {Button, ImageUploader, Input, TextArea, Toast} from "antd-mobile";
import { FaBook } from "react-icons/fa";
import { GrChapterAdd } from "react-icons/gr";
import { TbBooks } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import { actions } from "../../slices/header";
import { setBook } from "../../slices/books";
import { createBook } from '../../api/books'
import { uploadImg } from "../../api/common";
import {ImFilePicture} from "react-icons/im";
import {IoMdAddCircleOutline} from "react-icons/io";
import {IMGURL} from "../../const";
import { useNavigate } from "react-router-dom";
function Books() {
    const dispatch = useDispatch();
    let bookForm = useSelector(state => state.books.bookForm)
    const nav = useNavigate();
    const [fileList, setFileList] = useState([])

    useEffect(()=>{
        setForm(bookForm)
        setFileList(bookForm.cover_image)
    },[bookForm])

    const [form, setForm] = useState(bookForm);
    useEffect(() => {
        dispatch(actions.show());
    }, [dispatch]);

    const handleInputChange = (value, field) => {
        setForm(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            // fileList
            await createBook({
                ...form,
                cover_image:fileList.map(item => item.url).join()
            })
            Toast.show('Submit success！')
            nav('/recommendations')
            // reset
            dispatch(setBook({
                bookName: '',
                chapter: '',
                content: '',
                review: '',
                cover_image: []
            }))
        }catch (err){}
    };

    const handleSave = async () => {
        dispatch(setBook({
            ...form,
            cover_image:fileList
        }))
        Toast.show('Save success ！')
    };


    const upload = async (file)=>{
        try {
            let result = await uploadImg(file)
            Toast.show('uploaded success')
            console.log(IMGURL + result.path)
            return {
                url: IMGURL + result.path
            }
        }catch (err){

        }
    }

    return (
        <div className="Books p-2 px-6">
            <h2 className='text-3xl font-bold mt-2'>Create your book review!</h2>
            <div className='mt-8'>
                <section className='flex space-x-2 items-center'>
                    <FaBook/>
                    <p className='text-xl text-primary'>Book name</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <Input
                        placeholder='Please enter the book title'
                        value={form.bookName}
                        onChange={e => handleInputChange(e, 'bookName')}
                    />
                </div>
            </div>
            <div className='mt-6'>
                <section className='flex space-x-2 items-center'>
                    <GrChapterAdd/>
                    <p className='text-xl text-primary'>Tag</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <Input
                        placeholder='Please enter the tag'
                        value={form.chapter}
                        onChange={e => handleInputChange(e, 'chapter')}
                    />
                </div>
            </div>
            <div className='mt-6'>
                <section className='flex space-x-2 items-center'>
                    <TbBooks/>
                    <p className='text-xl text-primary'>Title of Review</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <Input
                        placeholder='Please enter the title of review'
                        value={form.content}
                        onChange={e => handleInputChange(e, 'content')}
                    />
                </div>
            </div>
            <div className='mt-6'>
                <section className='flex space-x-2 items-center'>
                    <CiEdit/>
                    <p className='text-xl text-primary'>Book Review</p>
                </section>
                <div className='border-2 py-4 px-2 rounded-md mt-2'>
                    <TextArea
                        placeholder="Write your review here"
                        value={form.review}
                        onChange={e => handleInputChange(e, 'review')}
                        showCount
                        maxLength={500}
                    />
                </div>
            </div>

            <div className='mt-6'>
                <section className='flex space-x-2 items-center'>
                    <ImFilePicture/>
                    <p className='text-xl text-primary'>Book Images</p>
                </section>
                <div className=' py-4 rounded-md mt-2'>
                    <ImageUploader
                        value={fileList}
                        onChange={setFileList}
                        upload={upload}
                    >
                        <div className='border-2 p-6 rounded-md'>
                            <IoMdAddCircleOutline size={40} />
                        </div>
                    </ImageUploader>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-8 mb-6'>
                <Button color='primary' fill='outline' size='large' onClick={() => handleSave()}>Save</Button>
                <Button color='primary' size='large' onClick={() => handleSubmit()}>Submit</Button>
            </div>
        </div>
    );
}

export default Books;
