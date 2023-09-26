import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#FF444A', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
};

const Statistics = () => {

    const data = [
        { name: 'Total Donate', value: 12 },
        { name: 'Your Donate', value: 4 },
      ];
    

    return (
        <div>
             
                <div className='flex item-center justify-center'>
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                    </PieChart>
                </div>
            
        </div>
    );
};

export default Statistics;


// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// const Statistics = () => {
//   const data = {
//     labels: ['Percentage 1', 'Percentage 2'],
//     datasets: [
//       {
//         data: [25, 75], // Replace with your percentages
//         backgroundColor: ['blue', 'green'], // Colors for the segments
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div style={{ width: '400px', height: '400px' }}>
//       <Pie data={data} options={options} />
//     </div>
//   );
// };

// export default Statistics;
