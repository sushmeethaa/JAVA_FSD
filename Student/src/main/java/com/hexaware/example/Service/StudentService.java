package com.hexaware.example.Service;
import java.util.List;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.example.Exception.IdNotFoundException;
import com.hexaware.example.entity.Student;
import com.hexaware.example.studentRepo.StudentRep;

@Service
public class StudentService {
	@Autowired
	StudentRep repo;
	public Student  saveSt(Student s)
		{
			Student s2= repo.save(s);
			return s2;
		}
	public List<Student>getstudent(){
		List <Student> l = (List<Student>) repo.findAll() ;
		return l;
	}
	public Student removesd(int roll) throws Exception {
		Student s= repo.findById(roll).orElseThrow(()-> new Exception("not found"+ roll));
		if(s==null) {
			return null;
		}
		else {
			repo.delete(s);
		}
		return s;
	}
	public String updatenm(String name, int roll) {
		// TODO Auto-generated method stub
		Student s= repo.findById(roll).orElse(null);
		if(s==null) {
			return null;
		}
		else {
			s.setName(name);
			repo.save(s);
			return "Updated";
		}
	}
	public String getnmbyId(int roll)throws IdNotFoundException{
		Student s= repo.findById(roll).orElseThrow(()-> new IdNotFoundException("not found"+ " "+roll));
		if(s==null) {
			return "Not Found";
		}
		else {
			
			return s.getName();
		}
	}
	public List<Student> findByNameContaining(String name) {
        return repo.findByNameContaining(name);
    }
	
}
