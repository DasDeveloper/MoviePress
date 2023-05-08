package com.dasdeveloper.moviepress;

import com.dasdeveloper.moviepress.Model.User;
import com.dasdeveloper.moviepress.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MoviepressApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviepressApplication.class, args);
	}



}
