package com.dasdeveloper.moviepress.Repository;


import com.dasdeveloper.moviepress.Model.Session;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface SessionRepository extends MongoRepository<Session, String> {



}
