import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import movies from "./Api"


const Home = () => {
  const [data, setData] = useState(movies)
  return <>
    <div className="movies-container">
      {

        data.map(moviesData => (

          <div className="movies-card" key={moviesData.id}>

           <div className="movie-badge-box">
           <div className="movie-badge quality">{moviesData.quality} </div>
            <div className="movie-badge industry " >{moviesData.industry} </div>
           </div>
            <div className="image">
              <img src={moviesData.image} />
            </div>

            <div className="movies-card-right">
              <div className="title">
                <Link to={`/${moviesData.id}`} >
                  <h3>
                    {moviesData.name} {moviesData.part} ({moviesData.year})
                  </h3>
                </Link>
              </div>

              <div className="lang-box">
                {
                  moviesData.lang.map((lng)=>(
                    <p key={lng + Math.random()*100}>{lng}</p>
                    
                  ))
                }
              </div>
            </div>
          </div>

        ))
      }
    </div>
  </>
}

export default Home
