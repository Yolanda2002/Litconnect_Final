import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TotalActivitiesChart = ({ data }) => {
    // 将数据从对象转换为数组形式，方便 Recharts 使用
    const dataArray = Object.keys(data).map(key => ({
        month: `${data[key].month}`,
        likeCount: data[key].likeCount,
        commentCount: data[key].commentCount,
        favoriteCount: data[key].favoriteCount,
        reviewCount: data[key].reviewCount
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={dataArray}
                margin={{
                    top: 20,
                    right: 30,
                    left: -20,
                    bottom: 15,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="reviewCount" stackId="a" fill="#778fcc" name="Reviews" />
                <Bar dataKey="favoriteCount" stackId="a" fill="#82ca9d" name="Favorites" />
                <Bar dataKey="likeCount" stackId="a" fill="#ffc658" name="Likes" />
                <Bar dataKey="commentCount" stackId="a" fill="#ff8042" name="Comments" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default TotalActivitiesChart;
