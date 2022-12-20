import React, { useState } from 'react'
import "./Home.css"
import movies from "./Api"



const Home = () => {
  const [data, setData] = useState(movies)
  return <>
    <div className="movies-container">
      {
        movies.map(moviesData => (
          <div className="movies-card" key={moviesData.id}>
            {console.log(moviesData.moviesType)}

            <div className="image">
              <img src={moviesData.image} />
            </div>

            <div className="title">
              <h3>
                {moviesData.name} ({moviesData.year})
              </h3>
            </div>

            <div className="download-box">
              <p>{moviesData.industry}</p>
              <div>{moviesData.quality}</div>
              <a href={moviesData.link} className="download-btn" target="_blank"><i class="fa-solid fa-download"></i></a>
            </div>
          </div>
        ))
      }
    </div>
  </>
}

export default Home
