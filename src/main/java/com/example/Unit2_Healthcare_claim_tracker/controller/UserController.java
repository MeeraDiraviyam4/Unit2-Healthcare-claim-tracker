package com.example.Unit2_Healthcare_claim_tracker.controller;

import com.example.Unit2_Healthcare_claim_tracker.model.User;
import com.example.Unit2_Healthcare_claim_tracker.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()). isPresent()) {
            throw new RuntimeException("Email already registered");
        }
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("MEMBER");
        }
            return userRepository.save(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User loginUser) {
        return userRepository.findByEmail(loginUser.getEmail())
                .filter(user -> user.getPassword().equals(loginUser.getPassword()))
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));
    }
}
