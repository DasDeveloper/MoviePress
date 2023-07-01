import React, { useEffect, useState } from 'react'
import { AiTwotoneStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "../css/searchpage.css"
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {springURL} from "../util/urlSpring.js"

const SearchPage = () => {

    const location = useLocation();
    const [dataQuery, setDataQuery] = useState([]);
    
    // const [query, setQuery] = useState(location.state);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() =>{
        
        fetchSession();
        fetchAllData();


    }, [location])

     const fetchSession = async () =>{

        const sessionID = localStorage.getItem("sessionID");
        
    
            if(sessionID!== null){

            const response = await axios.get(`${process.env.SPRING_URL}/api/session/${sessionID}`).then((res)=>{

             
              sessionStorage.setItem("userID",res.data.userId);
              sessionStorage.setItem("userRole",res.data.userRole);
              sessionStorage.setItem("userEmail",res.data.userEmail);

            
            })
            .catch(() =>{
              localStorage.clear();
              sessionStorage.clear();

              
            })}
            

    }
    const fetchAllData = async() =>{

        if(location.state!== null){

            const response = await axios.get(`${process.env.SPRING_URL}/api/search?query=${location.state}`);
            setDataQuery(response.data);
            setSearchParams({query:location.state})

        }
        else{
            const response = await axios.get(`${process.env.SPRING_URL}/api/search?query=${searchParams.get('query')}`);
            setDataQuery(response.data);
        }
        
        
    }
    
    
  return(
    <div className='searchpage'>

        {dataQuery.length===0 ? (<p className='no-result-found'>No results found</p>):(<></>)}

    {dataQuery.map((movie) =>{    
        
        
        return(
            
                    <div key={movie.id}className="movieComponent">
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
                    </div>
            )})}

       

    </div>
  )
}

export default SearchPage;