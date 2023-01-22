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
            <div className="hover-card-detail">
              <table>
                <tr>
                  <th>Name</th>
                  <th>:</th>
                  <td>{moviesData.name} {moviesData.part && moviesData.part}</td>
                </tr>
                <tr>
                  <th> Year</th>
                  <th>:</th>
                  <td>{moviesData.year}</td>
                </tr>
                <tr>
                  <th>Genere</th>
                  <th>:</th>
                  <td>{moviesData.genere}</td>
                </tr>
                <tr>
                  <th>Industry</th>
                  <th>:</th>
                  <td>{moviesData.industry}</td>
                </tr>
                <tr>
                  <th>Quality</th>
                  <th>:</th>
                  <td>{moviesData.quality}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <th>:</th>
                  <td>{moviesData.name}</td>
                </tr>
              </table>
            </div>
            <div className="movie-quality">{moviesData.quality} </div>
            {console.log(moviesData.moviesType)}

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

              <div className="download-box">
                <p>{moviesData.industry}</p>

                <a href={moviesData.link} className="download-btn" target="_blank"><i className="fa-solid fa-download"></i></a>
              </div>
            </div>
          </div>

        ))
      }
    </div>
  </>
}

export default Home
