package com.dasdeveloper.moviepress.Controller;

import com.dasdeveloper.moviepress.Model.Movie;
import com.dasdeveloper.moviepress.Model.MovieID;
import com.dasdeveloper.moviepress.Repository.MovieIdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/movieId")
public class MovieIDController {

    @Autowired
    private MovieIdRepository movieIdRepository;

    @GetMapping("/get")
    public int getMovieId(){

        List<MovieID> movie = movieIdRepository.findAll();
        return movie.get(0).getMovieId();

    }

//    @PostMapping("/add")
//    public void addMovieId(){
//
//        movieIdRepository.save(new MovieID());
//    }

    @PutMapping("/update")
    public void updateMovieId(){

        List<MovieID> movieList = movieIdRepository.findAll();
        MovieID movie = movieList.get(0);
        int newMovieId = movie.getMovieId() + 1;
        movie.setMovieId(newMovieId);
        movieIdRepository.save(movie);
    }



}
