import React, {useState, useEffect} from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import {Route, Routes} from "react-router-dom"
import app from "./firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Dashboard from "./components/Dashboard"
import Axios from "axios"


function App() {
  
const [currentUser, setCurrentUser] = useState();
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
if(user){setCurrentUser(user)} else {"No ongoing session found"}
});

const [readings, setReadings] = useState([]);
  const getReadings = async () => {
     await Axios.get("http://localhost:3306/").then(e => setReadings(e.data));
     
  };
  useEffect(() => {
    getReadings();
    const reloadInterval = setInterval(getReadings, 2000)
    return () => clearInterval(reloadInterval);
  }, []);
  if (!readings[0]) return "Fetching...";

  //console.log(currentUser);
  console.table(readings);

  return (
  <div className="App">
    
    <Navbar/>
    <Routes>
      <Route path="/" element={<Hero user={currentUser}/>}  />
      <Route path="/login" element={<SignIn/>}  />
      <Route path="/register" element={<SignUp/>}  />
      <Route path="/dashboard" element={<Dashboard user={currentUser} chartData ={readings}/>}  />
    </Routes>
  </div>
  )
}

export default App
