import { useEffect } from 'react';
import '../css/homepage.css'
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import fetchSession from '../util/fetchSession';


const Homepage = () =>{

    // const navigate = useNavigate();

    // useEffect(()=>{
    //     fetchSession();
    // }, [])

    // const fetchSession = async () =>{

    //     const sessionID = localStorage.getItem("sessionID");
        

    //         if(sessionID === null){

    //             navigate("/signin");

    //         }

    //          await axios.get(`http://localhost:8080/api/session/${sessionID}`).then((res)=>{


    //          console.log(res)
             
    //           sessionStorage.setItem("userID",res.data.userId);
    //           sessionStorage.setItem("userRole",res.data.userRole);
    //           sessionStorage.setItem("userEmail",res.data.userEmail);

            
    //         }).catch(() =>{
    //           localStorage.clear();
    //           sessionStorage.clear();

    //           navigate("/signin")
              
    //         })

    // }
    
    

    return (
        <div className="homepage">
            
            d
            <div className="text-category">Latest movies</div>
            <div className="latest-Movies">

            </div>
            <div className="text-category">Highest Rating</div>

            
        </div>
    )
}


export default Homepage;