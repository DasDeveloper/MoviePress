package com.dasdeveloper.moviepress.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "movieID")
@Data
public class MovieID {
    @Id
    private String id;
    private int movieId;
}
