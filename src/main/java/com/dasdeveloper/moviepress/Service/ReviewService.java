package com.dasdeveloper.moviepress.Service;

import com.dasdeveloper.moviepress.Model.Review;
import com.dasdeveloper.moviepress.Repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;


    public Optional<Review> getReviewById(String id) {

        return reviewRepository.findById(id);
    }


    public List<Review> getAllReviewsFromMovieId(int movieId) {

        Query query = new Query();
        query.addCriteria(Criteria.where("movieId").is(movieId));

        return mongoTemplate.find(query, Review.class).stream().toList();
    }

    public void addReview(Review newReview) {

        reviewRepository.save(newReview);
    }

    public Review findReviewByMovieIdAndUserId(int movieId, String userId) {

        Query query = new Query();
        query.addCriteria(Criteria.where("movieId").is(movieId));
        query.addCriteria(Criteria.where("userId").is(userId));
        return mongoTemplate.findOne(query, Review.class);
    }


    public int computeNewRating(List<Review> reviews) {

        int sum = 0;
        if(reviews.size() == 0){
            return 0;
        }
        for(Review review: reviews){
            sum += review.getValue();
        }
        return sum/reviews.size();
    }
}
