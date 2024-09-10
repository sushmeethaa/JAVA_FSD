package com.hexaware.example;
import java.util.Optional;
import java.util.Scanner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.hexaware.example.BankRepo.BankRepository;
import com.hexaware.example.Entity.Bank;
@SpringBootApplication
public class Application {
	public static void main(String[] args) {
		ApplicationContext  context=SpringApplication.run(Application.class, args);		
		BankRepository rep=	context.getBean(BankRepository.class);
		while(true) {
			System.out.println("Select Option:");
			System.out.println("1. Add account");
			System.out.println("2. Deposit Amount");
			System.out.println("3. Withdraw Amount");
			System.out.println("4. Search Account");
			System.out.println("5. Transfer Amount");
			System.out.println("6. Delete Account");
			System.out.println("Enter Option:");
			Scanner sc = new Scanner(System.in);
			int a = sc.nextInt();
			if(a==1) {
				Bank user1= new Bank();
				System.out.println("Enter Acc No:");
				int acno = sc.nextInt();
				sc.nextLine();
				System.out.println("Enter Name:");
				String name = sc.nextLine();
				System.out.println("Enter Balance:");
				int bal = sc.nextInt();
				sc.nextLine();
				System.out.println("Enter Email:");
				String mail = sc.nextLine();
				user1.setAccNo(acno);
				user1.setName(name);
				if(bal>=1000) {
					user1.setBalance(bal);
				}
				else {
					System.out.println("Insufficient balance");
				}
				user1.setEmail(mail);
				rep.save(user1);
				System.out.println("Account created");
			}
			else if(a==2) {
				System.out.println("Enter Acc No:");
				int acno = sc.nextInt();
				sc.nextLine();
				Optional<Bank> b=rep.findById(acno);
				 if(b.isPresent())
				 {
					 System.out.println("Enter Deposit Amount:");
					 double bal = sc.nextInt();
					 Bank temp= b.get();
					 double s= temp.getBalance();
					 temp.setBalance(bal + s);
					 rep.save(temp);
					 System.out.println("Amount Deposited");
					
				 }
				 else
				 {
					 System.out.println("Account not Found");
				 }
			}
			else if(a==3) {
				System.out.println("Enter Acc No:");
				int acno = sc.nextInt();
				sc.nextLine();
				Optional<Bank> b=rep.findById(acno);
				 if(b.isPresent())
				 {
					 System.out.println("Enter Withdraw Amount:");
					 double bal = sc.nextInt();
					 Bank temp= b.get();
					 double s= temp.getBalance();
					 if(s>0 && s>bal) {
						 temp.setBalance(s-bal);
						 rep.save(temp);
						 System.out.println("Amount Withdrawn");
					 }
					 else {
						 System.out.println("Insufficient Balance");
					 }
				 }
				 else
				 {
					 System.out.println("Account not Found");
				 }
			}
			else if(a==4) {
				System.out.println("Enter Acc No:");
				int acno = sc.nextInt();
				sc.nextLine();
				Optional<Bank> b=rep.findById(acno);
				 if(b.isPresent())
				 {
					 System.out.println("Account Found");
					 }
				 else
				 {
					 System.out.println("Account not Found");
				 }
				
			}
			else if(a==5) {
				System.out.println("Enter Acc No 1:");
				int acno1 = sc.nextInt();
				sc.nextLine();
				Optional<Bank> b=rep.findById(acno1);
				Bank temp1= b.get();
				double l = temp1.getBalance();
				 if(b.isPresent())
				 {
					 System.out.println("Enter Acc No 2:");
					 int acno2 = sc.nextInt();
					 sc.nextLine();
					 Optional<Bank> b1=rep.findById(acno2);
					 if(b1.isPresent()) {
						 System.out.println("Enter transfer Amount:");
						 double amt = sc.nextInt();
						 Bank temp= b1.get();
						 double k = temp.getBalance();
						 temp.setBalance(k+amt);
						 rep.save(temp);
						 System.out.println("Amount transferred");
						 temp1.setBalance(l-amt);
						 rep.save(temp1);
					 }
					 
					 else {
						 System.out.println("Second Account not Found");
					 }
				 }
				 else
				 {
					 System.out.println("Account not Found");
				 }
			}
			else if(a==6){
				System.out.println("Enter Acc No:");
				int acno = sc.nextInt();
				sc.nextLine();
				Optional<Bank> u=rep.findById(acno);
				 if(u.isPresent())
				 {
					
					   rep.deleteById(acno);
					   System.out.println("Account Deleted");
					
				 }
				 else
				 {
					 System.out.println("Account Not Found");
				 }
			}
		}
	}

}
