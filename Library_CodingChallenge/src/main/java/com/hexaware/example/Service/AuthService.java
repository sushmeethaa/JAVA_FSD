package com.hexaware.example.Service;
import com.hexaware.example.Entity.User;
import com.hexaware.example.Security.SignUpRequest;
public interface AuthService {
	User createUser(SignUpRequest signupRequest);
	boolean hasCustomerWithEmail(String email);

	
}