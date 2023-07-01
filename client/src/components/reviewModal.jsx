import React, { useEffect } from 'react'
import StarRating from './starRating';
import "../css/reviewModal.css"
import axios from 'axios';
import Swal from "sweetalert2";
import { useState } from 'react';





const ReviewModal = ({isOpen, movie, onClose}) =>{

    
    const [rating, setRating] = useState(0); 
      
    const handleClick = (value) => {
          setRating(value);
    }
   

    const Star = ({ value, filled, onClick }) => (
        <span
          className={`star ${filled ? 'filled' : ''}`}
          onClick={() => onClick(value)}
        >
          &#9733;
        </span>
      );


    if(!isOpen){
        return null;
    }

    const handleConfirmReview = async () =>{

        if(rating=== 0){
            Swal.fire({
                title:"Please rate the movie!"
            })
            setRating(0);
            return;
        }
        const response = await axios.post(`${process.env.SPRING_URL}/api/reviews/movie/addReview`, {
            value:rating,
            movieId: movie.movieId,
            userId: sessionStorage.getItem("userID")
        })
        if(response.status===200){
        Swal.fire({
            title:"Succesfully rated the movie!"
        })
        onClose();
    }
        if(response.status===208){
            Swal.fire({
                title:"You've already reviewed this movie!"
            })
        }
        
        return;
        
    }
    const handleCancelButton = () =>{
        onClose()
        setRating(0);
    }
    

  return (
    <>
        <div className='overlay'> 
            <div className="modal-review">
                
                <div className="modal-review-content">

                    <div className="modal-review-title">
                        <p>Review for {movie.title} (#{movie.movieId}) </p>
                    </div>
                    
                    <div>
                        <p>Selected rating: {rating}</p>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((value) => (
                            <Star
                                key={value}
                                value={value}
                                filled={value <= rating}
                                onClick={handleClick}
                            />
                            ))}
                        </div>
                    </div>

                </div>

                <div className="modal-review-exit">
                    <button className="modal-review-exit-button" onClick={handleCancelButton}>Cancel</button>
                    <button className="modal-review-exit-button" onClick={handleConfirmReview}>Confirm</button>
                </div>
                
            </div>
        </div>
    </>
   
  )

}

  export default ReviewModal;

