package com.dasdeveloper.moviepress.Repository;


import com.dasdeveloper.moviepress.Model.Session;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SessionRepository extends MongoRepository<Session, String> {



}
