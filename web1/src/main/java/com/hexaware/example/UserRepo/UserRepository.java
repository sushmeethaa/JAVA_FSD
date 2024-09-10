package com.hexaware.example.UserRepo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.hexaware.example.Entities.User;
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

}