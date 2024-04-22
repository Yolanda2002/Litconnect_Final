import React, {useEffect, useState} from 'react';
import {myYearlyStats} from "../../api/books";
import StatsChart from "./components/StatsChart";
import CommentLineChart from "./components/CommentLineChart";
import LikePieChart from "./components/LikePieChart";
import LikeBarChart from "./components/LikeBarChart";
import FavoriteLineChart from "./components/FavoriteLineChart";
import TotalActivitiesChart from "./components/TotalActivitiesChart";
import TotalCountsDisplay from "./components/TotalCountsDisplay";

function Index(props) {
    const [chatState, setChatState] = useState([])
    const getData = async ()=>{
        let data = await myYearlyStats()
        console.log(data)
        setChatState(data)
    }
    useEffect(()=>{
        getData()
    },[])
    return (

        <div className={'px-4 bg-gray-100 space-y-4 mb-4'}>
            <TotalCountsDisplay data={chatState}/>
            <section className='bg-white py-2 rounded-lg sahadow-2xl'>
                <h1 className='px-4 font-bold'>TotalActivities</h1>
                <TotalActivitiesChart data={chatState}/>
            </section>
            <section className='bg-white py-2 rounded-lg sahadow-2xl'>
                <h1 className='px-4 font-bold'>reviewCount</h1>
                <StatsChart data={chatState}/>
            </section>
            <section className='bg-white py-2 rounded-lg sahadow-2xl'>
                <h1 className='px-4 font-bold'>commentCount</h1>
                <CommentLineChart data={chatState}/>
            </section>
            <section className='bg-white py-2 rounded-lg sahadow-2xl'>
                <h1 className='px-4 font-bold'>likeCount</h1>
                <LikeBarChart data={chatState}/>
            </section>
            <section className='bg-white py-2 rounded-lg sahadow-2xl'>
                <h1 className='px-4 font-bold'>favoriteCount</h1>
                <FavoriteLineChart data={chatState}/>
            </section>
        </div>
    );
}

export default Index;
