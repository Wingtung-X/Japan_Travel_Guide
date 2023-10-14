package com.example.travel_guide;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class Controller {

    @Autowired

    private UserRepository userRepository;

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Map<String, String>> createUsers(@RequestBody User user){
        userRepository.save(user);

        Map<String, String> response = new HashMap<>();
        response.put("message", "Registration successful");

        return ResponseEntity.ok(response);
    }
}
