package com.dasdeveloper.moviepress.Repository;

import com.dasdeveloper.moviepress.Model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {

}
