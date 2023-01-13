import React from 'react'
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    const sideBarItems = ["Analytics"];
 
  return (
    
    <nav aria-label="alternative nav">
            <div className="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
                <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                    <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left"> 
                        {sideBarItems.map(item => {
                            return  <li key={item} className="mr-3 flex-1">
                                        <Link to={`./`} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-blue-100">
                                            <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">{item}</span>
                                        </Link>
                                    </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default DashboardSidebar