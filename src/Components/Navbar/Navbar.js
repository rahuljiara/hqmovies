import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import movies from "../../Pages/Api"
import Home from "../../Pages/Home"


const Navbar = () => {
  const [formData, setFormData] = useState({ input: "" ,});

  function inputHandler(event){
    console.log(formData)
    setFormData(prevData =>{
      return {
        ...prevData,
        [event.target.name]:event.target.value
      }
    })
    {console.log(event.target.value)}
  }

  const submitHandler = (event) => {
    // event.preventDefault()
      return    formData === movies.title ? <Home/> : ""
    }

  return <>
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="favicon.png" />
        </Link>
      </div> 
      <form onSubmit={submitHandler}>
        <input type="text"
          name="input"
          placeholder="search movies ..."
          value={formData.input}
          onChange={inputHandler}
          required

        />
        <button type="submit"><span>&#128269;</span></button>
      </form>
      <div className="navlinks">

      </div>
      {/* <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png"  id="nav-menu" onClick={navToggle}/> */}
    </nav>
  </>
}

export default Navbar
