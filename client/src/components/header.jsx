
import { useNavigate } from "react-router-dom";
import "../css/header.css"



const Header = () =>{

    const navigate = useNavigate();

    const redirectToHomepage = () =>{
        navigate('/')
    }

    return (
        <div className="navbar">

                    <div className="left">
                        <p className="logo" onClick={redirectToHomepage}>MoviePress</p>
                    </div>

        </div>
    );
}


export default Header;