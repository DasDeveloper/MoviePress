import "../css/moviepage.css"

const MoviePage = ({movieDetails})=>{

    return(
        <div className="moviepage">

            <div className="movie-poster">
                <img className="movie-poster-specific" src={require("../images/BlackPantherPoster.jpeg")} alt="poster"/>

                <div className="details">

                <h1>Title</h1>
                
                <div className="movie-button">

                    <button type="button" class="btn btn-outline-danger">Watch Trailer</button>
                    <button type="button" class="btn btn-outline-info">Add Review</button>

                </div>

                <div className="movie-category"> 

                    <p>Tags: </p>

                    <span class="badge text-bg-primary">Primary</span>
                    <span class="badge text-bg-secondary">Secondary</span>
                    <span class="badge text-bg-success">Success</span>
                    
                
                </div>

                <div className="movie-description">
                        Random description...
                </div>
                
                </div>
            </div>
            
            
        </div>
    )
}

export default MoviePage;