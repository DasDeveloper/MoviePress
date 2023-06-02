package com.dasdeveloper.moviepress.Controller;

import com.dasdeveloper.moviepress.Model.Session;
import com.dasdeveloper.moviepress.Service.SessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/session")
@CrossOrigin( origins = "http://localhost:3000")
public class SessionController {

    @Autowired
    private SessionService sessionService;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Session>> getSession(@PathVariable String id){

        Optional<Session> session = sessionService.getSession(id);
        if(session.isEmpty()){
            return ResponseEntity.status(404).body(null);
        }
        return ResponseEntity.ok(session);

    }

}
