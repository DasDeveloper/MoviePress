package com.dasdeveloper.moviepress.Model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document(collection = "movies")
public class Movie {

    @Id
    private String id;
    @Indexed(unique = true)
    private long movieId;
    private String title;
    private String director;
    private float rating = 0;
    private String url;
    private String description;
    private List<String> categories = new ArrayList<>();
    private List<String> actors = new ArrayList<>();
    
}
