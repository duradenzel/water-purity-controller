import React from 'react'

const Hero = () => {
  return (

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="/public/assets/picWebsite.png"></img>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl md:text-4xl lg:text-5xl mb-4 font-medium text-gray-900">Drink with confidence
      </h1>
      <p className="mb-8 leading-relaxed">We find it important that everyone has access to clean drinking water. Klarity is made to check water clarity, making sure that it is safe to drink. Bodies of water can contain lots of different particles that are not detectable with the human eye. We make use of next generation technology to detect water clarity. Our device “Klearly” has highly capable TDS-sensors able to detect all kinds of invisible particles.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn more</button>
       
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero