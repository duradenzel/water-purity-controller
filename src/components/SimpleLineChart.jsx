import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import moment from 'moment/moment';
import Loading from './Loading';

const SimpleLineChart = ({chartData, ticks, timeFrame}) => {
  const partialData = chartData?.slice(-Math.abs(ticks? ticks : -30));
  //console.log(partialData = partialData.filter(e => e.moment().isAfter(moment.subtract(1, 'hours'))));


  function formatXAxis(tickItem) {
    return moment(tickItem).format('LT')
    }

    if (!chartData[0]) return <Loading/>;

  return (
    <div className='w-full h-full'>

    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={partialData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#f4f4f4' opacity={0.2} />
          <XAxis dataKey="time" domain={[0, 1000]} tickFormatter={formatXAxis}  stroke='#f4f4f4'/>
          <YAxis type="number" domain={[0, 1000]} allowDataOverflow={true}/>

          <Tooltip />
          <Legend />
          {/* <Line type="monotone" dataKey="temp" stroke="#c228ee"S activeDot={{ r: 8 }} /> */}
          <Line type="monotone"  dataKey="result" stroke="#f87" dot={false} strokeWidth={3 } />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleLineChart