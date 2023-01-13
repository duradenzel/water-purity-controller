import React from 'react'
import { Link, redirect } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

const DashboardNav = ({currentuser}) => {

    
       
    const dropDown = document.getElementById('dropDownMenu');
    const auth = getAuth();

 
    

   if (!currentuser) return 
  return (
    <header>
    
    <nav aria-label="menu nav" className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-screen z-20 top-0">

        <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <Link to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <img className=' h-10' src="/assets/Klarity_logo_stripeless.png" alt=""></img>
            </Link>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
                <span className="relative w-full">
                    
                </span>
            </div>

            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            
                    <li className="flex-1 md:flex-none md:mr-3">
                        <div className="relative inline-block">
                            <button onClick={() => dropDown?.classList.toggle("invisible")} className="drop-button text-white py-2 px-2"> <span className="pr-2"><i className="em em-robot_face"></i></span> Hi , {currentuser.email}<svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
                            <div id="dropDownMenu" className="dropdownlist absolute bg-gray-800 text-white right-0 p-3 overflow-auto z-30 invisible w-full">
                                
                                {/* <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw"></i> Profile</a>
                                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw"></i> Settings</a> */}
                                <div className="border border-gray-800"></div>
                                <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block" 
                                onClick={() => {signOut(auth).then(() => {
                                window.location.href = '/'
                                }).catch((error) => {
                                console.log('An error occurred')
                                })}}><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
</header>
  )
}

export default DashboardNav