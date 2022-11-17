import React from 'react'

const Footer = () => {
  return (

<footer className="dark:bg-gray-900 text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium text-gray-900 md:justify-start justify-center">
        <span className="dark:text-white ml-3 text-xl"><img className='h-14' src="../public/assets/Drop_gradient.png" alt="" /></span>
      </a>
      <p className="mt-2 ml-2.5 text-xl mx-auto  text-gray-500">Klarity</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium dark:text-white text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
        <li>
            <a className="dark:text-gray-400 text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="dark:text-gray-400 text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="dark:text-gray-400 text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="dark:text-gray-400 text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium dark:text-white text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="dark:text-gray-400 text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="dark:text-gray-400 text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="dark:text-gray-400 text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="dark:text-gray-400 text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
      
   
    </div>
  </div>
  <div className="dark:bg-gray-900 bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Denzel Huijbers</p>
      
    </div>
  </div>
</footer>

  )
}

export default Footer