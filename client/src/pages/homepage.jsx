import { useEffect, useState } from 'react';
import '../css/homepage.css'
import axios from "axios";
import Footer from "../components/footer"
import { useNavigate } from 'react-router-dom';
import {AiTwotoneStar} from 'react-icons/ai';
import Navbar from '../components/navbar';


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

            const response = await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{

             
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
    const getMoviePoster = async (title) =>{
        return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query= + ${title}`);
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