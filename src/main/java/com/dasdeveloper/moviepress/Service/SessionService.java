package com.dasdeveloper.moviepress.Service;

import com.dasdeveloper.moviepress.Model.Session;
import com.dasdeveloper.moviepress.Repository.SessionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SessionService {

    @Autowired
    private SessionRepository sessionRepository;

    public Optional<Session> getSession(String id){

        return sessionRepository.findById(id);

    }

    public Session createSession(Session session){

        sessionRepository.save(session);

        return session;

    }

}
