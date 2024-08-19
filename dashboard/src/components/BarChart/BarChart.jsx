import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';

const SimpleBarChart = () => {
  const data = [
    { name: 'Critical', value: 9, color: '#FF4D4F' },
    { name: 'High', value: 150, color: '#FFA940' },
    { name: 'Medium', value: 320, color: '#FFD700' },
    { name: 'Low', value: 420, color: '#52C41A' },
  ];

  return (
    <BarChart width={300} height={180} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default SimpleBarChart;
