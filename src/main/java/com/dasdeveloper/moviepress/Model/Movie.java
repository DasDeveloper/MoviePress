package com.dasdeveloper.moviepress.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "movies")
public class Movie {

    @Id
    private String id;
    private long movieId;
    private String title;
    private String director;
    private float rating;
    private List<Review> reviewsList;
    private String url;
    private String description;
    private List<String> categories;
    
}
