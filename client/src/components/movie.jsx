import "../css/movie.css"
import StarIcon from '@mui/icons-material/Star';
import MoviePage from "../pages/moviepage";
import Navigate, { useNavigate } from "react-router-dom"


const Movie = ({movieDetails})=>{

    const navigate = useNavigate();

    const redirectToMoviePage = () =>{

        navigate("/movie")
        
    }

    return(
        <div className="movieComponent">
            <div className="border">
                <img className="poster" onClick={redirectToMoviePage}src={require("../images/BlackPantherPoster.jpeg")} alt="poster"/>
            </div>
            <div className="details-text">
                Title
                <div className="rating"><StarIcon/> Rating: </div>
                
            </div>
        </div>
    );

}


export default Movie;