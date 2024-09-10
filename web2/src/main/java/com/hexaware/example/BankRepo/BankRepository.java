package com.hexaware.example.BankRepo;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.hexaware.example.Entity.Bank;
@Repository
public interface BankRepository extends CrudRepository<Bank, Integer> {
	
}