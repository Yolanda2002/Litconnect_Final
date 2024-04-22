import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatsChart = ({ data }) => {
    // 将数据从对象转换为数组形式，方便 Recharts 使用
    const dataArray = Object.keys(data).map(key => ({
        month: data[key].month,
        reviewCount: data[key].reviewCount
    }));

    console.log(dataArray)

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
                <Bar dataKey="reviewCount" fill="#778fcc" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StatsChart;
