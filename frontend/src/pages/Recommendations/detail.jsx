import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Swiper, Toast, Card, Space, SpinLoading, Avatar, TextArea, Button, List} from 'antd-mobile';
import {
    getAllBookDetailBuID,
    bookLike,
    bookFavorite,
    bookCommentReview,
    bookCommentReviewList,
    bookDelete, delpinglun
} from '../../api/books';
import {useDispatch, useSelector} from 'react-redux';
import { FaStar } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { LiaComments } from "react-icons/lia";

import { actions } from "../../slices/header";
import {IMGURL} from '../../const'
import './detail.css'
import {IoSendSharp} from "react-icons/io5";
import {MdDeleteForever} from "react-icons/md";
function formatISODateTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false // 使用24小时制
    });
  }

const BookReviewDetail = () => {
    const { id } = useParams();
    const [reviewDetail, setReviewDetail] = useState(null);
    const dispatch = useDispatch();
    const [review, setReview] = useState('')
    const [showComment,setShowComment] = useState(false)
    const  [commentList,setCommentList] = useState([]);
    useEffect(() => {
        dispatch(actions.show());
    }, [dispatch]);
    const userinfo = useSelector(state => state.user.userinfo);

    const fetchReviewDetail = async () => {
        try {
            const response = await getAllBookDetailBuID(id);
            setReviewDetail(response);
        } catch (error) {
            Toast.show({
                content: 'Failed to fetch review details',
                duration: 2000,
            });
        }
    };
    useEffect(() => {
        fetchReviewDetail();
    }, [id]);


    const getBookCommentReviewList =  async ()=>{
      let data =   await bookCommentReviewList(id)
        setCommentList(data);
    }

    useEffect(()=>{
        getBookCommentReviewList();
    },[])


    const like = async (likeFlag) => {
            await bookLike({
                reviewId:id,
                like:likeFlag
            })
        // Toast.show('like success !');
        fetchReviewDetail();
    }

    const star = async (favoriteFlag) => {
        await bookFavorite({
            reviewId:id,
            favorite:favoriteFlag
        })
        // Toast.show('star success !');
        fetchReviewDetail();
    }

    if (!reviewDetail) {
        return (
            <div className="loading-container">
                <SpinLoading color="primary" />
            </div>
        );
    }
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const send = async ()=>{
        // 如果有值 则发送
        if (review) {
            await  bookCommentReview({
                reviewId:id,
                comment:review
            })
            Toast.show('send success !')
            getBookCommentReviewList();
            setReview('');
            setShowComment(false)
        }else{
            Toast.show('Write your message here !')
        }
    }
    const handleDel = async (id) => {
        try {
            await delpinglun(id);
            Toast.show('Delete success');
            getBookCommentReviewList();
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div className="book-review-detail-container p-5 flex flex-col">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Card title={<div className='py-1 flex items-center'>
                    <Avatar src={ IMGURL + reviewDetail.profile_picture} style={{'--border-radius':'50%' , '--size':'30px'}}  />
                    <span className='ml-4'>
                            {reviewDetail.book_name}
                            </span>
                </div>} className="book-detail-card ">
                <div className="review-content">Title：{reviewDetail.content}</div>
                    <div className="review-content">Review Content：{reviewDetail.review}</div>
                    <div className="review-content">Created Time：{formatISODateTime(reviewDetail.created_at)}</div>
                    <div className="review-content">Created User Name：{reviewDetail.username}</div>
                                    </Card>

                {reviewDetail.cover_image && reviewDetail.cover_image.split(',').length > 0 && (
                    <Swiper
                        loop
                        autoplay
                        indicatorProps={{
                            color: 'white',
                            activeColor: 'blue',
                            size: '8px',
                        }}
                        className="book-cover-swiper"
                    >
                        {reviewDetail.cover_image.split(',').map((image, index) => (
                            <Swiper.Item key={index}>
                                <section className='flex justify-center h-full'>
                                    <img src={image} alt={`Cover ${index + 1}`}
                                         style={{height: '100%', borderRadius: '8px'}}/>
                                </section>
                            </Swiper.Item>
                        ))}
                    </Swiper>
                )}


                <Card className="book-detail-card">
                    <section className='flex space-x-4'>
                        <span className={'flex items-center'}>{reviewDetail?.liked ?
                            <FaStar onClick={() => like(false)} color={'#92c57b'}/> :
                            <FaStar onClick={() => like(true)} color={'#ccc'}/>}
                            <span style={{height: '16px'}}>
                                （{reviewDetail.like_count}）
                            </span>
                        </span>
                        <span className={'flex items-center'}>{reviewDetail?.favorited ?
                            <AiOutlineLike onClick={() => star(false)} color={'#92c57b'}/> :
                            <AiOutlineLike onClick={() => star(true)} color={'#ccc'}/>}
                            <span style={{height: '16px'}}>
                                （{reviewDetail.favorite_count}）
                            </span>
                        </span>

                        <span className={'flex items-center'}>
                            {
                                <LiaComments onClick={()=>{
                                    scrollToTop();
                                    setShowComment(prev => !prev)
                                }} color={ showComment ? '#92c57b' : '#ccc'}/>

                            }
                            {/*scrollToTop*/}
                            <span style={{height: '16px'}}>
                                （{commentList.length}）
                            </span>
                        </span>
                    </section>
                </Card>

                <Card className="book-detail-card" style={{display:commentList.length>0 ? 'block' : 'none'}}>
                    <List>
                        {
                            commentList.map(item => <List.Item
                                key={item.id}
                                prefix={<Avatar  style={{ '--size': '40px', '--border-radius': '50%'}} src={ IMGURL + item.profile_picture} />}
                                description={<>
                                    <span>{item.comment}</span>
                                    <br/>
                                    <span>{formatISODateTime(item.created_at)}</span>
                                </>}
                            >
                                <div className='flex justify-between'>
                                    {
                                        item.username
                                    }
                                    <MdDeleteForever color='red' style={{display: userinfo.role === 'admin' ? 'block' : 'none'}} onClick={() => handleDel(item.id)}/>
                                </div>
                            </List.Item>)
                        }

                    </List>
                    {/*{*/}
                    {/*    commentList.map(item => <div key={item.id}>*/}

                    {/*    </div>)*/}
                    {/*}*/}
                </Card>
            </Space>

            <div className={showComment ? 'block absolute w-[90%] bg-white bottom-0' : 'hidden'}>
                <div className='border-2 py-4 px-2 rounded-md mt-2 border-primary'>
                    <TextArea
                        placeholder="Write your comment here"
                        value={review}
                        onChange={setReview}
                        showCount
                        maxLength={500}
                    />
                    <div className='flex justify-end  mt-2'>
                        <Button color='primary' size='small' fill='outline' onClick={send} className='flex'>
                            <div className='flex items-center p-1'>
                                <span className='mr-2'>
                                    Send
                                </span>
                                <IoSendSharp size={20} className='text-lg'/>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookReviewDetail;
