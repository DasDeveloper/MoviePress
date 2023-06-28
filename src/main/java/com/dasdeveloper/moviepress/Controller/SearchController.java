package com.dasdeveloper.moviepress.Controller;

import com.dasdeveloper.moviepress.Model.Movie;
import com.dasdeveloper.moviepress.Repository.MovieRepository;
import com.dasdeveloper.moviepress.Service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin( origins = "http://localhost:3000")
@RequestMapping("/api/search")
public class SearchController {

    @Autowired
    private MovieService movieService;

    @GetMapping()
    public ResponseEntity<List<Movie>> findAllMovies(@RequestParam String query) {

        return ResponseEntity.ok(movieService.getAllMoviesBasedOnRegex(query));
    }
}
