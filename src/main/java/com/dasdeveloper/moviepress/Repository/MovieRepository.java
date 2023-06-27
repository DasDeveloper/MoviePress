package com.dasdeveloper.moviepress.Repository;

import com.dasdeveloper.moviepress.Model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.Optional;


@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {


    Optional<Movie> findByMovieId(int movieId);
    Optional<Movie> findByTitle(String title);

//    Page<Movie> findByTitle(String title, Pageable pageable);
//    Page<Movie> findByTitleContainingIgnoreCase(String title, Pageable pageable);


}
