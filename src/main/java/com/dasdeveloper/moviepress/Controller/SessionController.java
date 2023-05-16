package com.dasdeveloper.moviepress.Controller;


import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/session")
public class SessionController {

    @GetMapping("/")
    public int getUserSession(HttpSession session){

        return 3;

    }

    @DeleteMapping("/destroy")
    public void destroyUserSession(HttpSession session){


    }



}
