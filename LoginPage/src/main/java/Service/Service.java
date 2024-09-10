package Service;
import dao.daoInter;
import java.util.Scanner;
import Model.Login;
public class Service {
	Scanner sc,sc1;
	daoInter d;
	Login log;
	public Service()
	{
		sc=new Scanner(System.in);
		sc1=new Scanner(System.in);
		d = new daoInter();
		log =new Login();
		
	}
	 public void logsignUp() {
	        System.out.print("Enter User ID: ");
	        int id = sc.nextInt();
	        sc.nextLine();
	        System.out.print("Enter Password: ");
	        String pass = sc.nextLine();
	        System.out.print("Enter Email: ");
	        String email = sc.nextLine();
	        Login login = new Login();
	        login.setUserId(id);
	        login.setPassWord(pass);
	        login.setEmailId(email);
	        d.signUp(login);
	        System.out.println("User Registered Successfully");
	    }
	public void logsignIn() {
		System.out.print("Enter User ID: ");
        int id = sc.nextInt();
        sc.nextLine(); 
        System.out.print("Enter Password: ");
        String pass = sc.nextLine();
        Login login = d.signIn(id, pass);
        if (login != null) {
            System.out.println("Login Successful");
        } else {
            System.out.println("Invalid");
        }

	}
	public void logremoveAcc() {
		System.out.print("Enter User ID: ");
        int id = sc.nextInt();
        d.removeAccount(id);
        System.out.println("Account Removed Successfully");
	}
	public void showdAll() {
		d.showDetails(log);
	}
	public void updatePw() {
		System.out.print("Enter User ID: ");
        int id = sc.nextInt();
        sc.nextLine(); 
        System.out.print("Enter Old Password: ");
        String oldPassword = sc.nextLine();
        System.out.print("Enter New Password: ");
        String newPassword = sc.nextLine();
        d.updatePassword(id, oldPassword, newPassword);
        System.out.println("Password Updated Successfully");

	}
	}
