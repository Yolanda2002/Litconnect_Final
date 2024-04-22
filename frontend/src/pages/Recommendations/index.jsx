import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {InfiniteScroll, Card, SearchBar, Tag, Avatar, Button, Toast, FloatingBubble, CapsuleTabs} from 'antd-mobile';
import { bookDelete, getAllBookReviews } from "../../api/books";
import Macy from 'macy';
import { IMGURL } from '../../const';
import { MdDeleteForever } from "react-icons/md";
import { actions } from '../../slices/header';
import {AddOutline, MessageFill} from "antd-mobile-icons";

function Recommendations() {
    const [searchValue, setSearchValue] = useState('');
    const [books, setBooks] = useState([]);
    const [tabs , setTabs]  = useState([] )
    const [tabSelect,setTabsSelect] = useState('')
    const [masonry, setMasonry] = useState(null);
    const userinfo = useSelector(state => state.user.userinfo);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const onClick = () => {
        nav('/recommendations/add');
    }
    // 获取书评数据
    const fetchData = async () => {
        console.log(tabSelect)


        try {
            const result = await getAllBookReviews({ search: searchValue , chapter: tabSelect==='All'?'':tabSelect });
            setBooks(result.data);
        } catch (e) {
            console.log(e);
        }
    };
    function uniqueChapters(data) {
        // 创建一个新的 Set 对象来存储唯一的 chapter 值
        const chapters = new Set();

        // 遍历传入的数据数组，将每个元素的 chapter 加入 Set 中
        data.forEach(item => chapters.add(item.chapter));

        // 将 Set 对象转换回数组并返回
        return Array.from(chapters);
    }
    const fetchData2 = async () => {
        try {
            const result = await getAllBookReviews({ search: searchValue });
            console.log(uniqueChapters(result.data))
            // setBooks(result.data);
            setTabs(uniqueChapters(result.data))
            console.log()
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        fetchData2(); // 首次加载数据
    }, [searchValue]);
    // 删除书评
    const handleDel = async (id) => {
        try {
            await bookDelete(id);
            Toast.show('Delete success');
            fetchData(); // 重新获取数据
        } catch (e) {
            console.log(e);
        }
    };

    // 初始化Macy实例
    const getMacy = () => {
        if (!masonry) {
            const newMasonry = new Macy({
                container: '.macy-container',
                trueOrder: false,
                waitForImages: false,
                useOwnImageLoader: false,
                debug: true,
                margin: { x: 10, y: 15 },
                columns: 2,
            });
            setMasonry(newMasonry);
        } else {
            masonry.reInit();
        }
    };

    useEffect(() => {
        dispatch(actions.show());
        fetchData(); // 首次加载数据
    }, [searchValue , tabSelect]);

    useEffect(() => {
        if (books.length) {
            setTimeout(() => {
                getMacy();
            }, 0);
        }
    }, [books]);
    const onTabChange =(key)=>{
        console.log(key)

        setTabsSelect(key)
    }
    return (
        <div className="Recommendations h-full">
            <section className='bg-white px-4 py-4'>
                <SearchBar onChange={(val) => {
                    setSearchValue(val);
                }} value={searchValue} placeholder='Please enter content' />
            </section>
            <section className='bg-white'>
                <CapsuleTabs onChange={onTabChange} defaultActiveKey='All' >
                    <CapsuleTabs.Tab key={'All'} title={'All'} >

                    </CapsuleTabs.Tab>
                    {
                        tabs.map(item => <CapsuleTabs.Tab key={item} title={item} >

                        </CapsuleTabs.Tab>)
                    }

                    {/*<CapsuleTabs.Tab title='Espresso' key='1'>*/}
                    {/*    1*/}
                    {/*</CapsuleTabs.Tab>*/}
                    {/*<CapsuleTabs.Tab title='Coffee Latte' key='2'>*/}
                    {/*    2*/}
                    {/*</CapsuleTabs.Tab>*/}
                    {/*<CapsuleTabs.Tab title='Cappuccino' key='3'>*/}
                    {/*    3*/}
                    {/*</CapsuleTabs.Tab>*/}
                    {/*<CapsuleTabs.Tab title='Americano' key='4'>*/}
                    {/*    4*/}
                    {/*</CapsuleTabs.Tab>*/}
                    {/*<CapsuleTabs.Tab title='Flat White' key='5'>*/}
                    {/*    5*/}
                    {/*</CapsuleTabs.Tab>*/}
                    {/*<CapsuleTabs.Tab title='Caramel Macchiato' key='6'>*/}
                    {/*    6*/}
                    {/*</CapsuleTabs.Tab>*/}
                    {/*<CapsuleTabs.Tab title='Cafe Mocha' key='7'>*/}
                    {/*    7*/}
                    {/*</CapsuleTabs.Tab>*/}
                </CapsuleTabs>
            </section>

            <section className={'fixed bottom-[100px] right-[30px] z-40'}>
                <Button block shape='rounded' color='primary' onClick={onClick}>
                    <div className='flex items-center'>
                        <p>Add Reviews Here!   </p>
                        <AddOutline fontSize={35} />
                    </div> 
                </Button>
            </section>
            {/*<FloatingBubble*/}
            {/*    style={{*/}
            {/*        '--initial-position-bottom': '84px',*/}
            {/*        '--initial-position-right': '24px',*/}
            {/*        '--edge-distance': '24px',*/}
            {/*        '--size': '70px'*/}
            {/*    }}*/}
            {/*    onClick={onClick}*/}
            {/*>*/}
            {/*    <AddOutline fontSize={35} />*/}
            {/*    /!*Add Reviews Here！*!/*/}
            {/*    <p className={'text-xs'}>*/}
            {/*        Add Reviews Here！*/}
            {/*    </p>*/}
            {/*</FloatingBubble>*/}
            <section className='px-4'>
                <section className='macy-container px-4 py-4 space-y-4'>
                    {books.map(item => (
                        <section key={item.id}>
                            <div className='border mt-4 w-full'>
                                <Card title={
                                    <div  onClick={() => nav(`/recommendations/${item.id}`)} className='flex justify-between items-center'>
                                        <Avatar src={IMGURL + item.profile_picture}
                                                style={{'--border-radius': '50%', '--size': '30px'}}/>
                                        <span className='ml-2 text-lg font-bold'>{item.username}</span>
                                    </div>
                                }>
                                    <img src={item.cover_image.split(',')[0]}
                                         onClick={() => nav(`/recommendations/${item.id}`)} alt=""/>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <div className='mt-2'  onClick={() => nav(`/recommendations/${item.id}`)}>{item.content}</div>
                                            <div className='mt-1'  onClick={() => nav(`/recommendations/${item.id}`)}>
                                                <Tag color='primary' fill='outline'>{item.chapter}</Tag>
                                            </div>
                                        </div>
                                        <div style={{display: userinfo.role === 'admin' ? 'block' : 'none'}}>
                                            {/*<Button fill='solid' size='mini' >*/}
                                                <MdDeleteForever color='red' onClick={() => handleDel(item.id)}/>
                                            {/*</Button>*/}
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </section>
                    ))}
                </section>
            </section>
        </div>
    );
}

export default Recommendations;
