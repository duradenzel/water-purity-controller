import React from 'react'
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SimpleLineChart = ({chartData}) => {
 
  return (
    <div className='w-full h-full'>

    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#f4f4f4' />
          <XAxis dataKey="date" stroke='#f4f4f4'/>
          <YAxis stroke='#f4f4f4'/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temp" stroke="#c228ee" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="tds_value" stroke="#f87 " />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleLineChart