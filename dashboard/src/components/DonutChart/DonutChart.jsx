import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './DonutChart.css';

const DonutChart = ({ data }) => {
  // Calculate total value
  const totalValue = Array.isArray(data) ? data.reduce((sum, entry) => sum + entry.value, 0) : 0;

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={Array.isArray(data) ? data : []}
        cx="50%"
        cy="50%"
        innerRadius={50}  // Keep the original inner radius
        outerRadius={70}
        dataKey="value"
        stroke="none" // Remove the path outline
        label={false} // Hide segment labels
      >
        {Array.isArray(data) ? data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        )) : null}
      </Pie>
      <Tooltip />
      <Legend
        layout="vertical"
        verticalAlign="middle"
        align="right"
        iconSize={5} // Adjust size as needed
        content={({ payload }) => (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {payload.map((entry, index) => (
              <li key={`item-${index}`} style={{ color: 'black', marginBottom: 5, display: 'flex', alignItems: 'center' }}>
                <svg width={16} height={16} style={{ marginRight: 10 }}>
                  <rect width={16} height={16} fill={entry.color} />
                </svg>
                {entry.value}
              </li>
            ))}
          </ul>
        )}
      />
      {/* Display the total value in the center of the chart */}
      <text
        x="30%"
        y="50%"
        textAnchor="middle"
        className="recharts-text"
        fontSize="15px"
        fontWeight="bold"
        dominantBaseline="middle"
      >
        Total
      </text>
      <text
        x="30%"
        y="60%"
        textAnchor="middle"
        className="recharts-text"
        fontSize="15px"
        fontWeight="bold"
        dominantBaseline="middle"
      >
        {totalValue}
      </text>
    </PieChart>
  );
};

export default DonutChart;
