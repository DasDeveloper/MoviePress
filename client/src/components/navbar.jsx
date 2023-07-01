import axios from 'axios';
import '../css/navbar.css'
import {useNavigate} from "react-router"
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = () =>{

    const sessionID = localStorage.getItem("sessionID");
    const userID = sessionStorage.getItem("userID");
    const userEmail = sessionStorage.getItem("userEmail");
    const userRole = sessionStorage.getItem("userRole")
    const [isLoggedOut, setLoggedOut] = useState(false);

    const navigate = useNavigate();

    const redirectToSignIn = () =>{
        navigate("/signin");
    }

    const redirectToSignUp = () =>{
        navigate("/signup");
    }
    const redirectToHomepage = () =>{
        navigate("/");
    }
    const redirectToAdminPage = () =>{
        navigate("/admin")
    }
    useEffect(() =>{

    }, [isLoggedOut])

    const logout = async () =>{
            

            await axios.delete(`${process.env.SPRING_URL}/api/session/delete/${sessionID}`).then(() =>{

                navigate("/");
                
            }).catch(() =>{
                localStorage.clear();
                sessionStorage.clear();

                Swal.fire({
                    title:"Logged out!"
                });
                setLoggedOut(true);
                navigate("/signin")
            })
            
    }

    return (
        <div className="navbar">

            <div className="left">
                <p className="logo" onClick={redirectToHomepage}>MoviePress</p>
            </div>
            
            
            <div className='center'>
                <SearchBar/>
            </div>
            
            <div className='right'>
            
                {userRole === 'ADMIN' ? (<button onClick={redirectToAdminPage}>Admin</button>):(<></>)}
                {sessionID ? <button onClick={logout}> Logout</button> :<><button onClick={redirectToSignIn}> Sign In</button></>}
                
            </div>
            
            

        </div>
    );
}

export default Navbar;