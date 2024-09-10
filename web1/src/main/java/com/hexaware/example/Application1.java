package com.hexaware.example;
import java.util.Optional;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import com.hexaware.example.Entities.User;
import com.hexaware.example.UserRepo.UserRepository;
@SpringBootApplication
public class Application1 {

	public static void main(String[] args) {
		ApplicationContext  context=SpringApplication.run(Application1.class, args);		
		UserRepository rep=	context.getBean(UserRepository.class);
		Iterable<User>  users=rep.findAll();
		users.forEach((temp)-> System.out.println(temp.toString()));
		/*User user1= new User();
		user1.setUserId(200);
		user1.setName("pooja");
		user1.setFee(9000.9);
		rep.save(user1);
		*/		
		Optional<User> u=rep.findById(100);
		 if(u.isPresent())
		 {
			
			    User temp=u.get();
			   temp.setName("jatin");
			   rep.save(temp);
			
		 }
		 else
		 {
			 System.out.println("Not Found");
		 }
		
		//rep.deleteById(100);
		
	//	System.out.println("Removed");
		
	}

}

