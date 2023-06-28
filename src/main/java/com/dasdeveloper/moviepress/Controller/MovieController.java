package com.dasdeveloper.moviepress.Controller;

import com.dasdeveloper.moviepress.Model.Movie;
import com.dasdeveloper.moviepress.Repository.MovieRepository;
import com.dasdeveloper.moviepress.Service.MovieService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin( origins = "http://localhost:3000")
public class MovieController {


    @Autowired
    private MovieService movieService;


    @GetMapping(path="/{movieId}", produces="application/json")
    public ResponseEntity<Optional<Movie>> getMovie(@PathVariable int movieId){

        return ResponseEntity.ok(movieService.getMovieByMovieId(movieId));
    };

    @GetMapping("/all")
    public List<Movie> getAllMovies(){

        return movieService.getAllMovies();

    }

    @PostMapping("/add")
    public void addNewMovie(@RequestBody Movie newMovie){

        movieService.createNewMovie(newMovie);
    }


    @DeleteMapping("/delete/{movieId}")
    public ResponseEntity<String> deleteMovieByMovieId(@PathVariable int movieId){
        movieService.deleteMovieByMovieId(movieId);
        return ResponseEntity.ok("Deleted movie successfully");

    }

    @GetMapping("/latest")
    public ResponseEntity<List<Movie>> getLatest(){

        return ResponseEntity.ok(movieService.findLatestMovies());
    }

    @GetMapping("/highestrating")
    public ResponseEntity<List<Movie>> getHighestRating(){

        return ResponseEntity.ok(movieService.findHighestRating());
    }







}
