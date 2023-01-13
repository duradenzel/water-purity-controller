import React from 'react'
import GraphCard from './GraphCard'
import MetricCard from './MetricCard'
import DashboardSidebar from './DashboardSidebar'
import {AiOutlineLineChart, AiFillThunderbolt, AiOutlineExclamationCircle} from 'react-icons/ai'

const DashboardMain = ({chartData}) => {

 const maxReading = Math.max(...chartData?.map(e => e.result)) || "NA"
 const minReading = Math.min(...chartData?.map(e => e.result)) || "NA"
 const lastReading = chartData.splice(-1)[0].result || "NA";
 const totalreadings = chartData.length;

  return (
    <main>

    <div className="flex flex-col md:flex-row">
        <DashboardSidebar/>
        <section className='w-full'>
            <div id="main" className="main-content flex-1 bg-gray-900 mt-12 md:mt-12 pb-24 md:pb-5 w-full">

                <div className="bg-gray-800 pt-3 w-full">
                    <div className="rounded-tl-3xl bg-gradient-to-r from-purple-600 to-gray-800 p-4 shadow text-2xl text-white">
                        <h1 className="font-bold pl-2">Analytics</h1>
                    </div>
                </div>
                {/* Metrics */}
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <MetricCard 
                        gradFrom = "from-green-200"
                        gradTo = "to-green-100"
                        border = "border-green-500"
                        bg = "bg-green-600"
                        text = "text-green-500"
                        title = "Total Readings"
                        chartData = {totalreadings}
                        icon = {<AiOutlineLineChart className='text-white text-4xl'/>}
                        />
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <MetricCard 
                        gradFrom = "from-yellow-200"
                        gradTo = "to-yellow-100"
                        border = "border-yellow-500"
                        bg = "bg-yellow-600"
                        text = "text-yellow-500"
                        title = "Last Reading"
                        chartData = {lastReading}
                        icon = {<AiFillThunderbolt className='text-white text-4xl'/>}
                        />
                    </div>   
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        <MetricCard 
                        gradFrom = "from-red-200"
                        gradTo = "to-red-100"
                        border = "border-red-500"
                        bg = "bg-red-600"
                        text = "text-red-500"
                        title = "Highest Readings"
                        chartData = {maxReading}
                        icon={<AiOutlineExclamationCircle className='text-white text-4xl'/>}
                        />
                    </div>

                </div>


                <div id='graphs' className="flex flex-row flex-wrap flex-grow mt-2">
                    <GraphCard chartData={chartData} lastReading = {lastReading}/>
                   
                </div>
            </div>
        </section>
    </div>
</main>
  )
}

export default DashboardMain