package com.dasdeveloper.moviepress.Model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Document(collection = "session")
public class Session {

    @Id
    private String id;

    @Indexed(expireAfterSeconds = 86400)
    private LocalDateTime expireAt;
    private String userEmail;
    private String userId;
    private String userRole;


    public Session(String userEmail, String userId, String userRole){
        this.userId = userId;
        this.userEmail = userEmail;
        this.userRole = userRole;
        this.expireAt = LocalDateTime.now().plusSeconds(86400);
    }
    private String getSessionId(){

        return this.id;
    }



}
