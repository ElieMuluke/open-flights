import React,{Fragment} from "react"

const ReviewFrom = (props)=>{
    const ratingOptions = [5,4,3,2,1].map((score, index)=>{
        return(
            <Fragment>
                <input type="radio" value={score} checked={props.review.score==score} name="rating" onChange={()=>console.log('selected: ', score)} id={`rating-${score}`}/>
                <label onClick={props.setRating.bind(this, score)}></label>
            </Fragment>
        )
    })

    return(
        <div className="form-wrapper">
            <form onSubmit={props.handleSubmit}>
                <div className="headline">Have an experience with {props.attributes.name}? Share it with us!</div>
                <div className="field">
                    <input className="textarea" onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
                </div>
                <div className="field">
                    <input className="textarea" onChange={props.handleChange} value={props.review.description} type="text" name="description" placeholder="Review Description" />
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate this Airline</div>
                        <div className="rating-box">
                            {ratingOptions}
                        </div>
                    </div>
                </div>
                <button className="submit-btn" type="submit">Submit Your Review</button>
            </form>
        </div>
    )
}

export default ReviewFrom;