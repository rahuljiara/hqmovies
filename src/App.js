import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home"
import SinglePage from './Pages/SinglePage'

function App() {
  return <>
    <BrowserRouter>
      <Navbar
        link1="Home"
        connectlink1="/"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>

    </BrowserRouter>
  </>

}

export default App;
