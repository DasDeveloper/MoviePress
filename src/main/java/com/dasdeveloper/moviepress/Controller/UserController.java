package com.dasdeveloper.moviepress.Controller;


import com.dasdeveloper.moviepress.Model.User;
import com.dasdeveloper.moviepress.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {


    @Autowired
    private UserService userService;

    @GetMapping(path = "/{id}", produces="application/json")
    public ResponseEntity<Optional<User>> getUser (@PathVariable String id){

        return new ResponseEntity<Optional<User>>(userService.getUser(id),HttpStatus.OK);
    }


    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser( @RequestBody User newUser){
        
            userService.createUser(newUser);

    }






}
