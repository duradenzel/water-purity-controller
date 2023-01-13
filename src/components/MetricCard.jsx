import React from 'react'



const MetricCard = ({gradFrom, gradTo, border, bg, text, title, chartData, icon}) => {
  //console.log(chartData);

  return (                  
    <div className={`bg-gradient-to-b ${gradFrom} ${gradTo} ${border}  border-b-4 rounded-lg shadow-xl p-5`}>
        <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
                <div className={`rounded-full p-3 ${bg}`}>{icon}</div>
            </div>
            <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">{title}</h2>
               <p className="font-bold text-3xl"> <span className={text}><i>{chartData}</i></span></p>
            </div>
        </div>
    </div>
  )
}

export default MetricCard