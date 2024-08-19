import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

const StackedBarChart = ({ data }) => {
  // Calculate the total value for each bar
  const totalValue = data.reduce((acc, item) => {
    return acc + item.range + item.performance + item.target;
  }, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Display the total value at the top, aligned to the left */}
      <div style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '16px', textAlign: 'left' }}>
        Total Value: {totalValue}
      </div>

      <ResponsiveContainer width="100%" height={100}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" hide />
          <Tooltip />
          {/* Stacked Bar */}
          <Bar dataKey="range" stackId="a" fill="#e0e0e0" barSize={30} />
          <Bar dataKey="performance" stackId="a" fill="#8884d8" barSize={30} />
          <Bar dataKey="target" stackId="a" fill="#ff8042" barSize={30} />
        </BarChart>
      </ResponsiveContainer>

      {/* Custom Legend at the Bottom */}
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#e0e0e0', marginRight: '5px' }}></div>
          <span>Range: {data[0]?.range}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#8884d8', marginRight: '5px' }}></div>
          <span>Performance: {data[0]?.performance}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#ff8042', marginRight: '5px' }}></div>
          <span>Target: {data[0]?.target}</span>
        </div>
      </div>
    </div>
  );
};

export default StackedBarChart;
