package com.dasdeveloper.moviepress.Controller;

import at.favre.lib.crypto.bcrypt.BCrypt;
import com.dasdeveloper.moviepress.Controller.requests.LoginRequest;
import com.dasdeveloper.moviepress.Model.Session;
import com.dasdeveloper.moviepress.Model.User;
import com.dasdeveloper.moviepress.Model.enums.Role;
import com.dasdeveloper.moviepress.Service.SessionService;
import com.dasdeveloper.moviepress.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;
    @Autowired
    private SessionService sessionService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public void signUp(@RequestBody User newUser){

        String encryptedPassword = BCrypt.withDefaults().hashToString(12, newUser.getPassword().toCharArray());
        newUser.setPassword(encryptedPassword);
        newUser.setRole(Role.USER.toString());
        userService.signUp(newUser);
    }

    @PostMapping("/signin")
    public ResponseEntity<Session> signIn(@RequestBody LoginRequest request){

        System.out.println(request);

        Optional<User> user = userService.findUserByEmail(request.getEmail());

        if(user.isEmpty()){
            return ResponseEntity.status(401).body(null);
        }


        String requestPassword = request.getPassword();

        BCrypt.Result comparison = BCrypt.verifyer().verify(requestPassword.toCharArray(), user.get().getPassword());


        if(comparison.verified){
            Session session = new Session(user.get().getEmail(), user.get().getId(), user.get().getRole());

            sessionService.createSession(session);

            return ResponseEntity.ok(session);
        }
        return ResponseEntity.status(401).body(null);

    }

}
