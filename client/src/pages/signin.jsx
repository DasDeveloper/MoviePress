import { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import "../css/signin.css"
import {Link, useNavigate} from "react-router-dom"
import urlSpring from "../util/urlSpring.js"


const Signin = () =>{

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const sessionID = localStorage.getItem("sessionID");
    const userID = sessionStorage.getItem("userID");

    useEffect(()=>{

        if(sessionID && userID){
            navigate("/");
        }
        

    },[])


    const onSubmit = async () =>{

       const res = await axios.post(`https://movie-press-api.onrender.com/api/auth/signin`, {
            email:email,
            password:password
        });

        
        if(res.data.length ===0){
            Swal.fire({
                title:"Wrong credentials!"
            })
            return;
        }
        
        localStorage.setItem("sessionID", res.data.id)

        Swal.fire({
            title:"Welcome!"
        })
        navigate("/");
        return;

    }

    return (
        <div className="signin_container">

            a

                <div className="signin">
                    
                    <div className="header">
                        Log In to your Account
                    </div>
                    
                    <label for="email">Email</label>
                    <input placeholder="Enter email"  onChange={e =>{setEmail(e.target.value)}} name="email"/>
                    <label for="password">Password</label>
                    <input placeholder="Enter password" type="password"  onChange={e =>{setPassword(e.target.value)}} name="password"/>
                    <div className="header">Don't have an account? <Link to="/signup">Sign Up</Link> </div>
                    <button onClick={onSubmit}> Sign In</button>
                
                </div>
            
        </div>
    )
}

export default Signin;