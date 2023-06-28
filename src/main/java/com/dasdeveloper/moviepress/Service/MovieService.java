package com.dasdeveloper.moviepress.Service;


import com.dasdeveloper.moviepress.Model.Movie;
import com.dasdeveloper.moviepress.Repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
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
    private int latestNumber = 5;


    public Optional<Movie> getMovie (String id){

        return movieRepository.findById(id);
    }

    public Optional<Movie> getMovieByMovieId(int movieId){

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
        if(length <5){
            return template.findAll(Movie.class);
        }


        return template.findAll(Movie.class).subList(length-latestNumber, length);

    }


    public List<Movie> findHighestRating() {



       return movieRepository.findAll(Sort.by(Sort.Direction.DESC, "rating")).subList(0,latestNumber);

    }

    public void updateRating(int newRating, int movieId) {
        Optional<Movie> movie = movieRepository.findByMovieId(movieId);
        if(movie.isPresent()){
            movie.get().setRating(newRating);
            movieRepository.save(movie.get());

        }

    }

    public List<Movie> getAllMoviesBasedOnRegex(String query) {

        Criteria regex = Criteria.where("title").regex(query, "i");
        return template.find(new Query().addCriteria(regex), Movie.class);


    }

    public void deleteMovieByMovieId(int movieId) {
        movieRepository.deleteByMovieId(movieId);
    }
}
