import React from 'react'
import "./CastCard.css"

const CastCard = () => {
    return (
        <div className="cast-card">
            <div className="cast-card-img"><img src={props.movieCastImage} /></div>
            <div className="card-right">
                <div className="cast-card-name">{props.movieCastName}</div>
                <div className="cast-card-reel-name">{props.movieCastReelName}</div>
            </div>
        </div>
    )
}

export default CastCard
