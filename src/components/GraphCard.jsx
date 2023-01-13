import Warning from './Warning';
import React, {useState} from 'react'
import ColorSlider from './ColorSlider';
import SimpleLineChart from './SimpleLineChart'

const GraphCard = ({chartData, lastReading}) => {
  
  const [tickAmount, SetTickAmount] = useState();
  const [timeFrame, SetTimeFrame] = useState();

  return (

    <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                                            
        <div className="bg-gray-900 border-transparent rounded-lg shadow-xl border-gray-700 border opacity-60 w-full">
            <div className=" flex bg-gradient-to-b from-gray-700 to-gray-900 uppercase text-gray-100 border-b-2 border-purple-500 rounded-tl-lg rounded-tr-lg p-2">
                <h2 className="font-bold uppercase text-gray-300">Graph</h2>
               
                <select onChange={e => SetTimeFrame(e.target.value)} className='bg-gray-900 border-purple-600 text-white ml-auto'  name="chartTimeframe" id="chartTimeframe">
                  <option value="1">Last 24 hours</option>
                  <option value="2">Last Week</option>
                  <option value="3">All</option>
                </select>
                <input type="number" name="tickChange" id="tickChange" className='bg-gray-900 border border-purple-500 text-white ml-auto w-16'onChange={null} onInput={e => SetTickAmount(e.target.value)} />
            </div>
            <div className="p-5 h-96">
            {tickAmount >= 400 && <Warning/>}
                <SimpleLineChart chartData={chartData} ticks={tickAmount} timeFrame = {timeFrame}/>
                <ColorSlider sliderValue={lastReading}/>
            </div>
        </div>
    </div>
  )
}

export default GraphCard