package com.hexaware.example.Controller;
import com.hexaware.example.Exception.IdNotFoundException;
import com.hexaware.example.Service.*;
import com.hexaware.example.entity.Student;

import jakarta.validation.Valid;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class StudentController {
	private static final String String = null;
	@Autowired
	StudentService studser;
	/*@PostMapping("/saveStudent")
	Student saveStudent(@Valid @RequestBody Student s)
	{
		Student s2= studser.saveSt(s);
		return s2;
		
	}*/
	@PostMapping("/saveStudent")
    public ResponseEntity<Student> saveStudent(@Valid @RequestBody Student s) {
            Student savedStudent = studser.saveSt(s);
            if(savedStudent == null) {
            	return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            else{
            	 return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
        }
    }
	/*@GetMapping("/getStudent")
	public List<Student>getstudent(){
		List <Student> l = studser.getstudent() ;
		return l;
	}*/
	@GetMapping("/getStudent")
	public ResponseEntity <List<Student>>getstudent(){
		List <Student> l = studser.getstudent() ;
		if(l.size()==0) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
	/*@DeleteMapping("/removeStudent/{roll}")
	public Student removeStudent(@PathVariable int roll) throws Exception {
		Student s= studser.removesd(roll);
		return s;
	}*/
	/*@PutMapping("/updateName/{roll}/{name}")
	public String updateName(@PathVariable int roll, @PathVariable String name) {
		String s =studser.updatenm(name,roll);
		return s;
	}*/
	@PutMapping("/updateName/{roll}/{name}")
	public ResponseEntity<String> updateName(@PathVariable int roll, @PathVariable String name){
		String s =studser.updatenm(name,roll);
		if(s == null) {
        	return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else{
        	 return new ResponseEntity<>(HttpStatus.OK);
        }
	}
	@GetMapping("/find/{name}")
    public List<Student> findByNameContaining(@PathVariable String name) {
        return studser.findByNameContaining(name);
    }
	@GetMapping("/getNamebyId/{roll}")
    public ResponseEntity<String> getNameById(@PathVariable int roll) {
        try {
            String name = studser.getnmbyId(roll);
            return new ResponseEntity<>(name, HttpStatus.OK);
        } catch (IdNotFoundException e) {
            return new ResponseEntity<>("ID " + roll + " not found.", HttpStatus.NOT_FOUND);
        }
    }
	/*@GetMapping("/getNamebyId/{roll}") 
	public String getNameById(@PathVariable int roll)throws IdNotFoundException{
		String s =studser.getnmbyId(roll);
		return s;
		
	}*/
	@DeleteMapping("/removeStudent/{roll}")
	public ResponseEntity<Student> removeStudent(@PathVariable int roll) throws Exception {
		Student s= studser.removesd(roll);
		if(s == null) {
        	return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        else{
        	 return new ResponseEntity<>(HttpStatus.OK);
    }
	}
	
	
}
