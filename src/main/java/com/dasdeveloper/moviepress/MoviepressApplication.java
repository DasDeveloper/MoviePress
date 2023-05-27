package com.dasdeveloper.moviepress;


import com.dasdeveloper.moviepress.Model.User;
import com.dasdeveloper.moviepress.Model.enums.Role;
import com.dasdeveloper.moviepress.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class MoviepressApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviepressApplication.class, args);

	}

//	@Bean
//	CommandLineRunner runner(UserRepository userRepository){
//
//		return args -> {
//			User user = new User("Rohan", "Das", "commandliner@hotmail.com","runner", Role.USER);
//			userRepository.insert(user);
//		};
//	}


}
