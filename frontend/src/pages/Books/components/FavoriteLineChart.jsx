import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FavoriteLineChart = ({ data }) => {
    // 将数据从对象转换为数组形式，方便 Recharts 使用
    const dataArray = Object.keys(data).map(key => ({
        month: `${data[key].month}`,
        favoriteCount: data[key].favoriteCount
    }));

    return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart
                data={dataArray}
                margin={{
                    top: 20,
                    right: 30,
                    left: -20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="favoriteCount" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default FavoriteLineChart;
