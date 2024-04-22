import React, {useEffect, useState} from 'react';
import {actions} from "../../slices/header";
import {useDispatch} from "react-redux";
import Macy from "macy";
import {getAllBookBuId} from "../../api/books";
import {Card, Empty, Tag, Toast} from "antd-mobile";
import {useNavigate} from "react-router-dom";

function BookReview(props) {
    const nav = useNavigate();
    const [masonry, setMasonry] = useState(null);
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await getAllBookBuId();
                console.log(data.data);
                setBooks(data.data);
            } catch (error) {
                Toast.show({
                    content: 'Failed to fetch books',
                    duration: 2000,
                });
            }
        };

        fetchBooks();
    }, []);
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
    useEffect(() => {
        setTimeout(() => {
            getMacy()
        }, 0);
    }, [books])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.show());
    }, [dispatch]);
    return (
        <div className='px-4'>
            <h1 className='pt-4 text-xl font-bold text-primary'>My Book Review</h1>
            {
                books.length > 0 ?  null :  <Empty
                    style={{padding: '64px 0'}}
                    imageStyle={{width: 128}}
                    description={<p className={'text-primary text-lg'}>No more data</p>}
                />
            }
            <section className='macy-container px-4  space-y-4 w-full'>


                {
                    books.map(item => <section key={item.id}>
                        <div onClick={() => nav(`/recommendations/${item.id}`)} className='border mt-4  w-full'>
                            <Card>
                                <img src={item.cover_image.split(',')[0]}/>
                                <div className='mt-2'>
                                    {
                                        item.content
                                    }
                                </div>
                                <div className='mt-1'>
                                    <Tag color='primary' fill='outline'>
                                        {
                                            item.chapter
                                        }
                                    </Tag>
                                </div>
                            </Card>
                        </div>
                    </section>)
                }

            </section>
        </div>
    );
}

export default BookReview;
