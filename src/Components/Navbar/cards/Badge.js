import React from 'react'
import "./badge.css"

const Badge = (props) => {
    return (
        <div className="genere-card">
            <p >{props.badgeName}</p>
        </div>
    )
}

export default Badge
