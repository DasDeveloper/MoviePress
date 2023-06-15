package com.dasdeveloper.moviepress.Service;


import com.dasdeveloper.moviepress.Model.Movie;
import com.dasdeveloper.moviepress.Repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;
    @Autowired
    private MongoTemplate template;
    private int latestNumber = 6;


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

    public List<Movie> findLatestMovies(){

        int length = template.findAll(Movie.class).toArray().length;
        if(length <6){
            return template.findAll(Movie.class);
        }


        return template.findAll(Movie.class).subList(length-latestNumber, length);

    }




}
