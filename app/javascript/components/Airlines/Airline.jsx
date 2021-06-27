import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Airline = (props)=>{
    return(
        <div className="card">
            <div className="Airline-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name}></img>
            </div>
            <div className="Airline-name">{props.attributes.name}</div>
            <div className="Airline-score">{props.attributes.avg_score}</div>
            <div className="Link-wrapper">
                <Link to={`/airlines/${props.attributes.slug}`}>View Airline</Link>
            </div>
        </div>
    )
}

export default Airline ;