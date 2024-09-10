package com.hexaware.day7_1;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "ITBook")
public class Book {
	@Id
	int bNo;
	@Column
	String Name;
	@Column
	Double price;
    Book() {
	}
	public Book(int bNo, String name, Double price) {
		super();
		this.bNo = bNo;
		Name = name;
		this.price = price;
	}
	public int getbNo() {
		return bNo;
	}
	public void setbNo(int bNo) {
		this.bNo = bNo;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Book [bNo=" + bNo + ", Name=" + Name + ", price=" + price + "]";
	}
    
	
}

 