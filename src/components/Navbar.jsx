import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const {pathname} = useLocation();
  return (

    <header className=" body-font bg-transparent absolute top-0 left-0 right-0 z-10  ">
  <div id='home' className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center relative">
    <Link to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img className=' h-10' src="/assets/Klarity_logo_stripeless.png" alt=""></img>
      
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
    {pathname == "/" &&    
      <button className="inline-flex items-center  text-white  py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
        <Link to='/login'>Login</Link>  
      </button>
    }
  </div>
</header>

  )
}

export default Navbar