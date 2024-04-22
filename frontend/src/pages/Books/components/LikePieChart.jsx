import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28FEF', '#FF4F81', '#FFCA28', '#6F52B8', '#3B9AE1', '#34BE82', '#F7D02C', '#D4A5A5'];

const LikePieChart = ({ data }) => {
    // 将数据从对象转换为数组形式，方便 Recharts 使用
    const dataArray = Object.keys(data).map(key => ({
        name: `Month ${data[key].month}`,
        value: data[key].likeCount
    }));

    return (
        <ResponsiveContainer width="100%" height={200}>
            <PieChart >
                <Pie
                    data={dataArray}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={150}
                    fill="#82ca9d"
                    dataKey="value"
                >
                    {dataArray.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default LikePieChart;
