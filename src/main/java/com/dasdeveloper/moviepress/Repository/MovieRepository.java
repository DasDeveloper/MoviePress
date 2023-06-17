package com.dasdeveloper.moviepress.Repository;

import com.dasdeveloper.moviepress.Model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {

//    @Query(value = "'movieId' : ?0")
    Optional<Movie> findByMovieId(int movieId);
    Optional<Movie> findByTitle(String title);


}
