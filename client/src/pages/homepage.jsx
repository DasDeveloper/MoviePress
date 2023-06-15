import { useEffect, useState } from 'react';
import '../css/homepage.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Movie from '../components/movie';
import Footer from "../components/footer"
import res from 'express/lib/response';


const Homepage = () =>{

    const navigate = useNavigate();
    const [latestMovies, setLatestMovies] = useState([]);
    

    useEffect(()=>{
        fetchSession();
        getLatestMovies();
    }, [])

    const fetchSession = async () =>{

        const sessionID = localStorage.getItem("sessionID");
        

            // if(sessionID === null){

            //     navigate("/signin");

            // }

             await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{


            //  console.log(res)
             
              sessionStorage.setItem("userID",res.data.userId);
              sessionStorage.setItem("userRole",res.data.userRole);
              sessionStorage.setItem("userEmail",res.data.userEmail);

            
            })
            .catch(() =>{
              localStorage.clear();
              sessionStorage.clear();

            //   navigate("/signin")
              
            })

    }

    const getLatestMovies = async() =>{

        const response = await axios.get('http://localhost:8080/api/movies/latest')
        setLatestMovies(response.data);
        console.log(latestMovies)
        

    }
    
    

    return (
        
        <div className="homepage">
            
            d
            <div className="text-category">Latest movies</div>
            
            <div className="latest-movies">
                {/* {latestMovies.map((movie) =>{
                    console.log(movie)
                })} */}
                <Movie/> <Movie/> <Movie/> <Movie/> <Movie/> <Movie/>
            </div>
            <div className="text-category">Highest Rating</div>
            <div className="highest-rating-movies">
                <Movie/> <Movie/> <Movie/> <Movie/> <Movie/> <Movie/>
            </div>

            <Footer></Footer>
        </div>
        
       
        
    )
}


export default Homepage;