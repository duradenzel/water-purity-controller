import React from 'react'

const Navbar = () => {
  return (

    <header className="body-font">
  <div id='home' className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a href='#home' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <img className=' h-10' src="/assets/Klarity_WhiteBgrnd.png" alt=""></img>
      
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

      <a href='#stats' className="mr-5 hover:text-indigo-500">Chart</a>
      <a href='#team' className="mr-5 hover:text-indigo-500">Team</a>  
    </nav>
    <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600  rounded-3xl text-base mt-4 md:mt-0">
      Login   
    </button>
  </div>
</header>

  )
}

export default Navbar