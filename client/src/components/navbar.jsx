
import '../css/navbar.css'

const Navbar = () =>{

    return (
        <div className="navbar">

            <p className="logo">MoviePress</p>
            <input type="textbox" placeholder='Search movies'></input>
            <button> Sign In</button>
            <button> Sign up</button>
            

        </div>
    );
}

export default Navbar;