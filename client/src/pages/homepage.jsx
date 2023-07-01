import { useEffect, useState } from 'react';
import '../css/homepage.css'
import axios from "axios";
import Footer from "../components/footer"
import { useNavigate } from 'react-router-dom';
import {AiTwotoneStar} from 'react-icons/ai';
import Navbar from '../components/navbar';
import { SPRING_URL } from "../util/urlSpring";


import { Link } from 'react-router-dom';

const Homepage = () =>{

    const navigate = useNavigate();
    const [latestMovies, setLatestMovies] = useState([]);
    const [highestRatingMovies, setHighestRatingmovies] = useState([]);
    

    useEffect(()=>{
        fetchSession();
        getLatestMovies();
        getHighestRatingMovies();
    }, [])

    const fetchSession = async () =>{

        const sessionID = localStorage.getItem("sessionID");
        
    
            if(sessionID!== null){

            const response = await axios.get(`${SPRING_URL}/api/session/${sessionID}`).then((res)=>{

             
              sessionStorage.setItem("userID",res.data.userId);
              sessionStorage.setItem("userRole",res.data.userRole);
              sessionStorage.setItem("userEmail",res.data.userEmail);

            
            })
            .catch(() =>{
              localStorage.clear();
              sessionStorage.clear();

              
            })}
            

    }

    const getLatestMovies = async () =>{

        const response = await axios.get(`${SPRING_URL}/api/movies/latest`)
        setLatestMovies(response.data);
        
    }
    const getHighestRatingMovies = async () =>{
        const response = await axios.get(`${SPRING_URL}/api/movies/highestrating`)
        setHighestRatingmovies(response.data);
    }
    
    
    

    return (
        
        <div className="homepage">
            <Navbar/>
            
            <div className="text-category">Latest Movies</div>
            
            <div className="latest-movies">
                {latestMovies.map((movie) =>{
                    return(
                    <div key={movie.id} className="movieComponent">
                        <div className="border">
                            <Link to={`/movie/${movie.movieId}`} state={movie}>
                                
                                <img className="poster" src={require("../images/movie-poster.jpeg")} alt="poster"/>
                            </Link>
                            
                        </div>
                        <div className="details-text">
                        {movie.title}
                            <div className="rating"> 

                                <span>
                                     <AiTwotoneStar className="star"/> {movie.rating}/5 

                                </span>
                            
                            </div>
                    </div>
                </div>)       
                })}
                
            </div>
            <div className="text-category">Highest Rating</div>
            <div className="highest-rating-movies">

                
            
            {highestRatingMovies.map((movie) =>{
                    return(
                    <div key={movie.id} className="movieComponent">
                        <div className="border">

                            <Link to={`/movie/${movie.movieId}`} state={movie}>
                                    
                                <img className="poster" src={require("../images/movie-poster.jpeg")} alt="poster"/>
                                
                            </Link>
                            
                        </div>
                        <div className="details-text">
                        {movie.title}
                            <div className="rating"> 

                                <span>
                                     <AiTwotoneStar className="star"/> {movie.rating}/5 
                                </span>

                            </div>
                    </div>
                </div>)       
                })}
                
            </div>

        </div>
        
       
        
    )
}


export default Homepage;