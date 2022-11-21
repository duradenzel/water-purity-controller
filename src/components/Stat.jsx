import { data } from 'autoprefixer'
import React, {useState, useEffect} from 'react'
import SimpleLineChart from './SimpleLineChart'
import Axios from 'axios'

const Stat = () => {

  const [readings, setReadings] = useState([]);
  const getReadings = async () => {
     await Axios.get("http://localhost:3001/").then(e => setReadings(e.data));
     console.log("Refreshed")
    
    
  };
  useEffect(() => {
    getReadings();
    const reloadInterval = setInterval(getReadings, 2000)
    return () => clearInterval(reloadInterval);
    
  }, []);

  
  
  if (!readings[0]) return <span>loading...</span>;
  console.log(readings);
  

  return (
    <section id='stats' className="text-gray-400 dark:bg-gray-900 body-font p-12">
  <div className="container  px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-5xl mb-2 text-white">Your data, envisioned</h1>
        <div className="leading-relaxed">Get the latest readings on the quality of the water that you consume.</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-fuchsia-700">{  Math.max(...readings?.map(e => e.tds_value)) || 0}</h2>
        <p className="leading-relaxed text-gray-100">Highest Reading</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-fuchsia-600">{Math.min(...readings?.map(e => e.tds_value)) || 0}</h2>
        <p className="leading-relaxed text-gray-100">Lowest Reading</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-fuchsia-500">{ readings?.slice(-1)[0].tds_value }</h2>
        <p className="leading-relaxed text-gray-100">Last Reading</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-fuchsia-400">{readings.length || 0}</h2>
        <p className="leading-relaxed text-gray-100">Readings</p>
      </div>
    </div>
    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <SimpleLineChart chartData={readings} />
    </div>
  </div>
</section>
  )
}

export default Stat