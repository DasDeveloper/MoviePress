import { useEffect, useState } from "react";
import "../css/moviepage.css";
import {useLocation} from "react-router-dom";
import axios from "axios";
import {AiTwotoneStar} from 'react-icons/ai';
import PageNotFound from "./pageNotFound";
import ModalVideo from "react-modal-video";
import ReviewModal from "../components/reviewModal";
import "react-modal-video/scss/modal-video.scss"

const MoviePage = ()=>{

    const location = useLocation();
    const [movie, setMovie] = useState(location.state);
    const movieId = location.pathname.substring(7);
    const [valid, setValid] = useState(false);
    const [categories, setCategories] = useState([]);
    const [actors, setActors] = useState([]);
    const [isVideoModalOpen, setVideoModalOpen] = useState(false);
    const [isReviewModalOpen, setReviewModalOpen] = useState(false);
    const [videoId, setVideoId] = useState("None");
    // const [isAlreadyReviewedState, setIsAlreadyReviewedState] = useState(false);
    



    useEffect(()=>{
        fetchMovie();
        fetchSession();
        // isAlreadyReviewed();
       
      
    }, [location.pathname])

    const fetchMovie =  async () =>{

            const response = await axios.get(`${process.env.SPRING_URL}/api/movies/${movieId}`);
            if(response!==null){
                setMovie(response.data)
                if(response.data.categories !== null){
                    setCategories(response.data.categories)
                }
                if(response.data.actors !==null){
                    setActors(response.data.actors)
                }
                if(response.data.url!== null && movie === null){
                    setVideoId(response.data.url)
                }
            
                setValid(true);
            }
    }

    const fetchSession = async () =>{

            const sessionID = localStorage.getItem("sessionID");
            
            if(sessionID!== null){
    
                 await axios.get(`${process.env.SPRING_URL}/api/session/${sessionID}`).then((res)=>{
                 
                  sessionStorage.setItem("userID",res.data.userId);
                  sessionStorage.setItem("userRole",res.data.userRole);
                  sessionStorage.setItem("userEmail",res.data.userEmail);
    
                
                }).catch(() =>{
                  localStorage.clear();
                  sessionStorage.clear();

                  
                })}
    
        }

        // const isAlreadyReviewed = async () =>{
        
        //     const userID = sessionStorage.getItem("userID");

        //     if(userID){

        //         await axios.get(`http://localhost:8080/api/reviews/review/${movieId}/${userID}`).then((data) =>{

        //             if(data){
        //                 setIsAlreadyReviewedState(true);
        //             }

        //         }).catch(()=>{
        //             setIsAlreadyReviewedState(false);
        //         });
                
        //     }
    
        // }
       
    
    return(
        
        <div className="moviepage">
            
            
            {movie && valid ?(
            <div className="movie-poster">
                <img className="movie-poster-specific" src={require("../images/movie-poster.jpeg")} alt="poster"/>

                <div className="details">

                <h1>{movie.title} (<AiTwotoneStar className="star"/> {movie.rating}/5)</h1>
                
                <div className="movie-button">
                
                    
                    <button type="button" onClick={()=> setVideoModalOpen(true)} class="btn btn-outline-danger">Watch Trailer</button>

                    <ModalVideo channel='youtube' autoplay isOpen={isVideoModalOpen} videoId={movie.url} onClose={() => setVideoModalOpen(false)} />
                    
			
                    {sessionStorage.getItem("userID") && localStorage.getItem("sessionID") ? (
                    <button type="button" onClick={()=> setReviewModalOpen(true)} class="btn btn-outline-info">Review Movie</button>
                    ):(<button type="button" class="btn btn-outline-info" disabled>Login to Review Movie</button>)
                    } 
                    
                    
                    {/* {isAlreadyReviewedState ? (<button type="button" class="btn btn-outline-info" disabled>You've already reviewed this movie</button>):(<></>)}    */}

                    <ReviewModal movie={movie} isOpen={isReviewModalOpen} onClose={() =>{setReviewModalOpen(false)}}/>

                        
                    

                </div>

                <div className="movie-category"> 

                    <p>Genres: </p>
                    {categories.length=== 0 ? (<span class="badge text-bg-primary">None</span>):<></>}
                    
                    {categories.map((category) =>{
                        
                        return <span class="badge text-bg-primary">{category}</span>

                    })}
                
                </div>

                
                <div className="movie-actors">
                    <p><b>Director</b>:   <i> {movie.director}</i></p>
                    
                       
                </div>
                
                <div className="movie-actors">

                    <p><b>Actors</b>: <i>{actors.map((actor) =>{
                        return actor;
                    })}</i></p>

                         
                </div>
                <div className="movie-description">

                        {movie.description}
                </div>
                
                </div>
            </div>):(<PageNotFound/>)}
                
        </div>
    )
}

export default MoviePage;