
import '../css/navbar.css'

const Navbar = () =>{

    return (
        <div className="navbar">

            <div className="left">
                <p className="logo">MoviePress</p>
            </div>

            <div className='search'>
                <input type="textbox" placeholder='Search movies'></input>
            </div>
            <div className='right'>
            
                <button> Sign In</button>
                <button> Sign up</button>
            </div>
            
            

        </div>
    );
}

export default Navbar;