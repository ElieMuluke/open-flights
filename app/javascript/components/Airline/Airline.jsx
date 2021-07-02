import React, {useState, useEffect, Fragment} from "react"
import axios from "axios"
import Header from "./Header";
import ReviewFrom from "./ReviewForm";

const Airline = (props) =>{
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const slug = props.match.params.slug;
        const url = `/api/v1/airlines/${slug}`

        axios.get(url)
        .then(resp =>{
            setAirline(resp.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    },[])

    const handleChange = (e)=>{
        e.preventDefault()

        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        const csrfToken = document.querySelector("[name=csrf-token]").content
        axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken

        const airline_id = airline.data.id
        axios.post('/api/v1/reviews',{review, airline_id})
        .then(resp=>{
            const included =[...airline.included, resp.data]
            setAirline({title:'', description:'', score:0})
        })
        .catch(err=>{})
    }

    return(
        <div className="wrapper">
            {
                loaded &&
                <Fragment>
                    <div className="column">
                        <div className="main">
                            <Header
                                attributes={airline.data.attributes}
                                reviews = {airline.included}
                            />
                            <div className="reviews"></div>
                        </div>
                    </div>
                    <div className="column">
                        <ReviewFrom
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            attributes={airline.data.attributes}
                            review={review}
                        />

                    </div>
                </Fragment>
            }
        </div>
    )
}

export default Airline;