package com.dasdeveloper.moviepress.Repository;

import com.dasdeveloper.moviepress.Model.MovieID;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieIdRepository extends MongoRepository<MovieID,String> {
}
