import React, {useEffect} from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stat from "./components/Stat"
import SimpleLineChart from "./components/SimpleLineChart"

function App() {
  
  

  return (
  <div className="App">
   <Navbar/>
   <Hero />
   <Stat/>
   <Footer/>
  </div>
  )
}

export default App
