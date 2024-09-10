package com.hexaware.example.Entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name ="Bank")
public class Bank {
	@Id
	private int AccNo;
	private String Name;
	private double Balance;
	private String Email;
	public int getAccNo() {
		return AccNo;
	}
	public void setAccNo(int accNo) {
		AccNo = accNo;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public double getBalance() {
		return Balance;
	}
	public void setBalance(double balance) {
		Balance = balance;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	@Override
	public String toString() {
		return "Bank [AccNo=" + AccNo + ", Name=" + Name + ", Balance=" + Balance + ", Email=" + Email + "]";
	}
	
}
