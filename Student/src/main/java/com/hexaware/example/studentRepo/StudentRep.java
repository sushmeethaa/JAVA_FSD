package com.hexaware.example.studentRepo;
import java.util.List;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.hexaware.example.entity.Student;
@Repository
public interface StudentRep extends CrudRepository <Student, Integer> {
	@Modifying
	@Query(value="update Customer set fee=:Fee where roll=:rn",nativeQuery=true)
	public int updateFee(@Param("Fee") double b, @Param("rn")int a);
	public List<Student> findByNameContaining(String name);
}
