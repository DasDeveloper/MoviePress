import axios from 'axios';
import '../css/navbar.css'
import {useNavigate} from "react-router"
import Swal from 'sweetalert2';

const Navbar = () =>{

    const sessionID = localStorage.getItem("sessionID");
    const userID = sessionStorage.getItem("userID");
    const userEmail = sessionStorage.getItem("userEmail");
    const userRole = sessionStorage.getItem("userRole")

    const navigate = useNavigate();

    const redirectToSignIn = () =>{
        navigate("/signin");
    }

    const redirectToSignUp = () =>{
        navigate("/signup");
    }

    const logout = async () =>{
            

            await axios.delete(`http://localhost:8080/api/session/delete/${sessionID}`).then(() =>{

                navigate("/");
                
            }).catch(() =>{
                localStorage.clear();
                sessionStorage.clear();

                Swal.fire({
                    title:"Something went wrong!"
                })
                navigate("/signin")
            })
            
    }

    return (
        <div className="navbar">

            <div className="left">
                <p className="logo">MoviePress</p>
            </div>

            
            <div className='right'>
            
                
                
                {sessionID ? <button onClick={logout}> Logout</button> :<><button onClick={redirectToSignIn}> Sign In</button> <button onClick={redirectToSignUp}> Sign up</button></>}
                
            </div>
            
            

        </div>
    );
}

export default Navbar;