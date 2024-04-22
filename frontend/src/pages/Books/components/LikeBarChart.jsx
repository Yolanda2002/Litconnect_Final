import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LikeBarChart = ({ data }) => {
    // 将数据从对象转换为数组形式，方便 Recharts 使用
    const dataArray = Object.keys(data).map(key => ({
        month: `${data[key].month}`,
        likeCount: data[key].likeCount
    }));

    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart
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
                <Bar dataKey="likeCount" fill="#ffcb58" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default LikeBarChart;
