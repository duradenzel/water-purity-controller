import { data } from 'autoprefixer'
import React from 'react'
import SimpleLineChart from './SimpleLineChart'

const Stat = () => {

  const data = [
    {
      date: '05/11/2022',
      TDS_Value: 114,
      Temperature: 19,
    
    },
    {
      date: '06/11/2022',
      TDS_Value: 88,
      Temperature: 20,
   
    },
    {
      date: '07/11/2022',
      TDS_Value: 98,
      Temperature: 18,
  
    },
    {
      date: '08/11/2022',
      TDS_Value: 101,
      Temperature: 18,
    
    },
    {
      date: '09/11/2022',
      TDS_Value: 132,
      Temperature: 17,
    },
    {
      date: '10/11/2022',
      TDS_Value: 118,
      Temperature: 20,
    
    },
    {
      date: '11/11/2022',
      TDS_Value: 124,
      Temperature: 21,
    },
  ];


  return (
    <section id='stats' className="text-gray-400 dark:bg-gray-900 body-font p-10">
  <div className="container  px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-5xl mb-2 text-white">Your data, envisioned</h1>
        <div className="leading-relaxed">Get the latest readings on the quality of the water that you consume.</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-fuchsia-700">{  Math.max(...data?.map(e => e.TDS_Value))}</h2>
        <p className="leading-relaxed text-gray-100">Highest Reading</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-fuchsia-600">{Math.min(...data?.map(e => e.TDS_Value))}</h2>
        <p className="leading-relaxed text-gray-100">Lowest Reading</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-fuchsia-500">{data?.slice(-1)[0].TDS_Value}</h2>
        <p className="leading-relaxed text-gray-100">Last Reading</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-fuchsia-400">{data.length}</h2>
        <p className="leading-relaxed text-gray-100">Readings</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <SimpleLineChart chartData={data} />
    </div>
  </div>
</section>
  )
}

export default Stat