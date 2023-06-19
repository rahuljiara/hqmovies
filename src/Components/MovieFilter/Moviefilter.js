import React from 'react'
import "./Moviefilter.css"
import movies from '../../Pages/Api'

const Moviefilter = () => {


    // <i className="fa-solid fa-angle-up"></i>
    // <i className="fa-solid fa-angle-down"></i>

    const filter = [...new Set(movies.map(filter => filter.quality))] 
    console.log(filter)
    return <>
        <div className="movie-filter-container">
            <div className="filter-heading">
                Quality <i className="fa-solid fa-angle-down"></i>

                <div className="filter-data">
                    {<p key={[1,2,3,4,5,6]}>{filter}</p>}
                </div>
            </div>
            <div className="filter-heading">
                Language <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="filter-heading">
                Size <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="filter-heading">
                Year <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="filter-heading">
                Industry <i className="fa-solid fa-angle-down"></i>
            </div>
            <div className="filter-heading">
                Type <i className="fa-solid fa-angle-down"></i>
            </div>
        </div>
    </>
}

export default Moviefilter
