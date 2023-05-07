package com.dasdeveloper.moviepress.Service;

import com.dasdeveloper.moviepress.Model.User;
import com.dasdeveloper.moviepress.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;



    public Optional<User> getUser (String id){

        return userRepository.findById(id);

    }

    public Optional<User> checkIfUserAlreadyExists(String email){

        return userRepository.findByEmail(email);
    }


    public void createUser (User newUser){



        userRepository.save(newUser);


    }









}
