package com.hexaware.example.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.example.Entity.User;
import com.hexaware.example.Enum.UserRole;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	 Optional<User> findFirstByEmail(String email);

	    User findByUserRole(UserRole userRole);
}