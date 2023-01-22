import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './SinglePage.css'
import movies from "./Api"

const SinglePage = () => {
  const { id } = useParams()

  return <>

    <div className="detail-page-container" >
      {
        movies.map(x => {
          try {
            if (id === x.id) {
              return <>
                <div className="detail-page-card" key={x.id}>


                  {/*  Genere Extracting from Api */}
                  {x.genere && <div className="detail-page-card-genere flex vertical-center horizontal-center">
                    {
                      x.genere.map((gnr) => (
                        <div className="genere-card flex vertical-center horizontal-center " key={Math.random() * 5000}>
                          <p>{gnr}</p>
                        </div>
                      ))
                    }
                  </div>}




                  <div className="detail-page-card-image flex vertical-center horizontal center">
                    <img src={x.image}></img>
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
                            <p key={Math.random()*10000}>{lng}</p>
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
                <div className="detail-page-card-right"></div>



              </>

            }
          } catch (error) {

          }



        })
      }
    </div>

  </>
}

export default SinglePage
