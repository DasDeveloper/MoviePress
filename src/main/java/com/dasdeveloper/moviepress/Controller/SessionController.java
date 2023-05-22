package com.dasdeveloper.moviepress.Controller;


import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/session")
@CrossOrigin( origins = "http://localhost:3000")
public class SessionController {

    @GetMapping("/")
    public int getUserSession(HttpSession session){

        return 3;

    }

    @DeleteMapping("/destroy")
    public void destroyUserSession(HttpSession session){


    }



}
