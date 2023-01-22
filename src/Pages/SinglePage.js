import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './SinglePage.css'
import movies from "./Api"

const SinglePage = () => {
  const { id } = useParams();

  return <>

    <div className="detail-page-container" >
      {
        movies.map(x => { 
            if (id === x.id) {
              return <>
                <div key={x.id}>
                  <div className="detail-page-card" >


                    {/*  Genere Extracting from Api */}
                    {x.genere && <div className="detail-page-card-genere flex vertical-center horizontal-center">
                      {
                        x.genere.map((gnr) => (
                          <div className="genere-card flex vertical-center horizontal-center" key={gnr+Math.random()*1000} >
                            <p >{gnr}</p>
                          </div>
                        ))
                      }
                    </div>}


                    {
                      
                    }

                    <div className="detail-page-card-image flex vertical-center horizontal center">
                      <img src={x.image}></img>
                      <div className="movie-size flex horizontal-center vertical-center">
                        Size :- <p> {x.size}</p>
                      </div>
                    </div>



                    <div className="detail-page-card-disc">
                      <div className="detail-page-card-title"><h2>{x.name} {x.part} {x.year && (x.year)}</h2>

                        {/*  Language Extracting from Api */}
                        <div className="lang flex horizontal-center">
                          <h4>
                            Language :-
                          </h4>
                          {
                            x.lang.map((lng) => (
                              <p key={lng+Math.random()*1000}>{lng}</p>
                              
                            ))
                          }
                        </div>

                      </div>

                      <hr className='hr-line' />
                      <div className="detail-page-download-btn flex vertical-center horizontal-center">
                        <a href={x.link} target="_blank"><i className="fa-solid fa-download"></i> Download {x.quality}</a>
                      </div>
                    </div>
                  </div>
                </div>



              </>

            }
          



        })
      }
    </div>

  </>
}

export default SinglePage
