package com.hexaware.example.Security;

import com.hexaware.example.Enum.UserRole;
public class SignUpRequest {
	private String email;
    private String name;
    private String password;
    private UserRole userRole;
    
    
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public UserRole getUserRole() {
		return userRole;
	}
	public void setUserRole(UserRole userRole) {
		this.userRole = userRole;
	}
	@Override
	public String toString() {
		return "SignupRequest [email=" + email + ", name=" + name + ", password=" + password + ", userRole=" + userRole
				+ "]";
	}
}