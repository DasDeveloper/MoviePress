import { useEffect, useState } from "react";
import "../css/moviepage.css";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {AiTwotoneStar} from 'react-icons/ai';
import PageNotFound from "./pageNotFound";

const MoviePage = ()=>{

    const location = useLocation();
    const [movie, setMovie] = useState(location.state);
    const movieId = location.pathname.substring(7);
    const [valid, setValid] = useState(false);
    const [categories, setCategories] = useState([])



    useEffect(()=>{
        fetchMovie();
        fetchSession();
       
      
    }, [location.pathname])

    const fetchMovie =  async () =>{

            const response = await axios.get(`http://localhost:8080/api/movies/${movieId}`);
            if(response!==null){
                setMovie(response.data)
                if(response.data.categories !== null){
                    setCategories(response.data.categories)
                }
            
                setValid(true);
            }
    }

    const fetchSession = async () =>{

            const sessionID = localStorage.getItem("sessionID");
            
            if(sessionID!== null){
    
                 await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{
                 
                  sessionStorage.setItem("userID",res.data.userId);
                  sessionStorage.setItem("userRole",res.data.userRole);
                  sessionStorage.setItem("userEmail",res.data.userEmail);
    
                
                }).catch(() =>{
                  localStorage.clear();
                  sessionStorage.clear();

                  
                })}
    
        }
        function timeout(delay) {
            return new Promise( res => setTimeout(res, delay) );
        }

    
    
    return(
        
        <div className="moviepage">
            
            
            {movie && valid ?(
            <div className="movie-poster">
                <img className="movie-poster-specific" src={require("../images/BlackPantherPoster.jpeg")} alt="poster"/>

                <div className="details">

                <h1>{movie.title} (<AiTwotoneStar className="star"/> {movie.rating}/5)</h1>
                
                <div className="movie-button">

                    <button type="button" class="btn btn-outline-danger">Watch Trailer</button>
                    <button type="button" class="btn btn-outline-info">Add Review</button>

                </div>

                <div className="movie-category"> 

                    <p>Genres: </p>
                    {categories.length=== 0 ? (<span class="badge text-bg-primary">None</span>):<></>}
                    
                    {categories.map((category) =>{
                        
                        if(category==="Action"){
                            return <span class="badge text-bg-primary">Action</span>
                        }
                        if(category ==="Comedy"){

                            return<span class="badge text-bg-secondary">Comedy</span>
                        }

                    })}
                
                </div>

                <div className="movie-description">
                        {/* Random description... */}
                        {movie.description}
                </div>
                
                </div>
            </div>):(<PageNotFound/>)}
                
        </div>
    )
}

export default MoviePage;