package com.hexaware.LoginPage;
import java.util.Scanner;
import Service.Service;
public class App{
    public static void main( String[] args )
    {
        Scanner sc=new Scanner(System.in);
		Service s = new Service();
		while(true)
		{
			System.out.println("1. To Sign up");
			System.out.println("2. To Sign in");
			System.out.println("3. To Show details");
			System.out.println("4. To remove an account");
			System.out.println("5. To update password");
			System.out.println("0. To Exit");
			int ch= sc.nextInt();
			if(ch==1) {
				s.logsignUp();
			}
			if(ch==2) {
				s.logsignIn();
			}
			else if(ch==3) {
				s.showdAll();
			}
			else if(ch==4) {
				s.logremoveAcc();
			}
			else if(ch==5) {
				s.updatePw();
			}
			else if(ch==0)
			{
				break;
			}
			else
			{
				continue;
			}

    }
    }
}
