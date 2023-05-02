package com.dasdeveloper.moviepress.Controller;

import com.dasdeveloper.moviepress.Model.Movie;
import com.dasdeveloper.moviepress.Service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
public class MovieController {


    @Autowired
    private MovieService movieService;


    @GetMapping(path="/{id}", produces="application/json")
    public Optional<Movie> getMovie(@PathVariable String id){

        return movieService.getMovie(id);
    };

    @GetMapping()
    public List<Movie> getAllMovies(){

        return movieService.getAllMovies();

    }




}
