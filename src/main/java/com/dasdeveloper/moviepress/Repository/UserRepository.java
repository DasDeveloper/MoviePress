package com.dasdeveloper.moviepress.Repository;

import com.dasdeveloper.moviepress.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends MongoRepository<User, String> {




}
