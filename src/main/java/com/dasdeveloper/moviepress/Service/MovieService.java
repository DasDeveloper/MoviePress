package com.dasdeveloper.moviepress.Service;


import com.dasdeveloper.moviepress.Model.Movie;
import com.dasdeveloper.moviepress.Repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;


    public Optional<Movie> getMovie (String id){

        return movieRepository.findById(id);
    }

    public Optional<Movie> getMovieByMovieId(String movieId){

        return movieRepository.findByMovieId(movieId);
    }

    public List<Movie> getAllMovies(){

        return movieRepository.findAll();
    }

    public Optional<Movie> getMovieByTitle(String title){

        return movieRepository.findByTitle(title);
    }


    public void createNewMovie(Movie newMovie){
        movieRepository.save(newMovie);
    }

}
