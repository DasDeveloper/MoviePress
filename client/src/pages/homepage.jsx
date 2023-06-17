import { useEffect, useState } from 'react';
import '../css/homepage.css'
import axios from "axios";
import Movie from '../components/movie';
import Footer from "../components/footer"
import { useNavigate } from 'react-router-dom';
import {AiTwotoneStar} from 'react-icons/ai'
import { Navigate } from 'react-router-dom';
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

             await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{

             
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

        const response = await axios.get('http://localhost:8080/api/movies/latest')
        setLatestMovies(response.data);
        
    }
    const getHighestRatingMovies = async () =>{
        const response = await axios.get('http://localhost:8080/api/movies/highestrating')
        setHighestRatingmovies(response.data);
    }
    
    
    

    return (
        
        <div className="homepage">
            
            d
            <div className="text-category">Latest movies</div>
            
            <div className="latest-movies">
                {latestMovies.map((movie) =>{
                    return(
                    <div className="movieComponent">
                        <div className="border">
                            <Link to={`/movie/${movie.movieId}`} state={movie}>
                                
                                <img className="poster" src={require("../images/BlackPantherPoster.jpeg")} alt="poster"/>
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
                    <div className="movieComponent">
                        <div className="border">
                            <img className="poster" src={require("../images/BlackPantherPoster.jpeg")} alt="poster"/>
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

            <Footer></Footer>
        </div>
        
       
        
    )
}


export default Homepage;