import "../css/movie.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";


//-----------------------NOT BEING USED RIGHT NOW----------------------- TO BE FIXED
const Movie = (movieDetails)=>{

    const navigate = useNavigate();
    

    const redirectToMoviePage = () =>{

        navigate("/movie")
        
    }
    useEffect(()=>{

    }, [])
    

    return(
        <div className="movieComponent">
            <div className="border">
                <img className="poster" onClick={redirectToMoviePage}src={require("../images/BlackPantherPoster.jpeg")} alt="poster"/>
            </div>
            <div className="details-text">
               
                <div className="rating"> Rating: </div>
                
            </div>
        </div>
    );

}


export default Movie;