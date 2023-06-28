package com.dasdeveloper.moviepress.Repository;

import com.dasdeveloper.moviepress.Model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewRepository extends MongoRepository<Review, String> {



            Optional<Review> findByMovieIdAndUserId(int movieId, String userId);
}
