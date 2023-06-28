package com.dasdeveloper.moviepress.Controller;

import com.dasdeveloper.moviepress.Model.Review;
import com.dasdeveloper.moviepress.Service.MovieService;
import com.dasdeveloper.moviepress.Service.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin( origins = "http://localhost:3000")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;
    @Autowired
    MovieService movieService;

    @GetMapping("/review/{id}")
    public ResponseEntity<Optional<Review>> getReviewById(@PathVariable String id){

        return ResponseEntity.ok(reviewService.getReviewById(id));
    }
    @GetMapping("/review/{movieId}/{userId}")
    public ResponseEntity<Review> getReviewByMovieIdandUserId(@PathVariable int movieId, @PathVariable String userId){

        Review review = reviewService.findReviewByMovieIdAndUserId(movieId, userId);
        if(review == null){
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(review);
    }


    @GetMapping("/movie/{movieId}")
    public List<Review> getAllReviewsFromMovieId(@PathVariable int movieId){

        return reviewService.getAllReviewsFromMovieId(movieId);
    };

    @PostMapping("/movie/addReview")
    public ResponseEntity<String> addReview(@RequestBody Review newReview){

        int movieId = newReview.getMovieId();
        String userId = newReview.getUserId();
        Review review = reviewService.findReviewByMovieIdAndUserId(movieId, userId);
        if(review==null){
            reviewService.addReview(newReview);
            List<Review> reviews = reviewService.getAllReviewsFromMovieId(movieId);
            int newRating = reviewService.computeNewRating(reviews);
            movieService.updateRating(newRating, movieId);

            return ResponseEntity.ok("Review added succesfully");
        }
        return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body("Already reviewed");

    }



//    @PutMapping("/movie/updateReview")
//    public ResponseEntity<String> updateReview(@RequestBody Review updatedReview){
//
//        reviewService.updateReview(updatedReview);
//
//        return null;
//    }
}
