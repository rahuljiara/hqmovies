import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home"

function App() {
  return <>
    <BrowserRouter>

      {/* 
        link1,link2,link3,link4 is Name of Link Which Displayed In Navbar
        connectlink1,connectlink2,connectlink3,connectlink4 is <Link to=" should be filled"/> link to pages 

    */}
      <Navbar
        link1="Home"
        connectlink1="/"
      />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
  </>

}

export default App;
