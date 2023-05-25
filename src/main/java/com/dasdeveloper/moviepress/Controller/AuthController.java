package com.dasdeveloper.moviepress.Controller;

import com.dasdeveloper.moviepress.Model.User;
import com.dasdeveloper.moviepress.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void signUp(@RequestBody User newUser){

        userService.signUp(newUser);
    }
}
