import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { LANG_COLORS } from '../constants';

const data = [
  { name: 'TypeScript', value: 45 },
  { name: 'JavaScript', value: 25 },
  { name: 'HTML', value: 15 },
  { name: 'CSS', value: 15 },
];

const SkillsChart: React.FC = () => {
  return (
    <div className="h-64 w-full">
        <h4 className="text-sm font-semibold mb-2 text-gh-text">Most Used Languages</h4>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={LANG_COLORS[entry.name] || '#8884d8'} />
            ))}
            </Pie>
            <Tooltip 
                contentStyle={{ backgroundColor: '#161b22', borderColor: '#30363d', borderRadius: '6px' }}
                itemStyle={{ color: '#c9d1d9' }}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
        </PieChart>
        </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;