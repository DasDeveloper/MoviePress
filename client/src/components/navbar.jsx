
import '../css/navbar.css'
import {useNavigate} from "react-router"

const Navbar = () =>{

    const navigate = useNavigate();

    const redirectToSignIn = () =>{
        navigate("/signin");
    }

    return (
        <div className="navbar">

            <div className="left">
                <p className="logo">MoviePress</p>
            </div>

            <div className='search'>
                <input type="textbox" placeholder='Search movies'></input>
            </div>
            <div className='right'>
            
                <button onClick={redirectToSignIn}> Sign In</button>
                <button> Sign up</button>
            </div>
            
            

        </div>
    );
}

export default Navbar;