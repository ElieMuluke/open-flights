import React, {useEffect,useState, Fragment} from "react"
import axios from 'axios'
import Airline from './Airline'

const Airlines = () =>{
    const [airlines, setAirlines] = useState([])

    useEffect(()=>{
        //get all airlines from api
        //update airlines in our state
        axios.get('/api/v1/airlines')
        .then(resp => {
            setAirlines(resp.data.data)
        })
        .catch(err => console.log(err))
    }, [airlines.length])

    const grid = airlines.map(item =>{
        return(
        <Airline 
            key={item.id}
            attributes={item.attributes}
        />
        )
    })

    return(
        <div className="home">
            <div className="header">
                <h1>Open Flights</h1>
                <div className="subheader">
                    Honest, Unbiased airline reviews.
                </div>
            </div>
            <div >
                <ul className="grid">
                    {grid}
                </ul>
            </div>
            
        </div>
    )
}

export default Airlines;