import React, { useState } from 'react'
import "./Navbar.css"
import food from "../../Pages/Api"


const Navbar = () => {
  return <>
    <nav>
      <div className="logo">
        <img src="favicon.png" />
      </div>
     <div className="navlinks">
  
     </div>
     {/* <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"  id="nav-menu" onClick={navToggle}/> */}
    </nav>
  </>
}

export default Navbar
