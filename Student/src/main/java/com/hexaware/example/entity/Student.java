package com.hexaware.example.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
@Entity
@Table (name="Student")
public class Student {
	@Id
	int roll;
	@NotNull
	String name;
	double fee;
	@Min(value=18,message="Age cannot be less than 18")
	@Max(value=60,message="Age cannot be greater than 60")
	int age;
	@Email
	String email;
	@Size(min =4, max=20)
	String address;
	@Pattern(regexp="^[0-9] {6}$")
	
	public Student(int roll, String name, double fee,int age,String email,String address) {
		super();
		this.roll = roll;
		this.name = name;
		this.fee = fee;
		this.age = age;
		this.email = email;
		this.address = address;
	}
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getRoll() {
		return roll;
	}
	public void setRoll(int roll) {
		this.roll = roll;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getFee() {
		return fee;
	}
	public void setFee(double fee) {
		this.fee = fee;
	}
	
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Student [roll=" + roll + ", name=" + name + ", fee=" + fee + ", age=" + age + "]";
	}
	
	
}
