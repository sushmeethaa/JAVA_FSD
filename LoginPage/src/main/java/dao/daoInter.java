package dao;
import java.sql.Connection;
import java.util.List;
import java.util.Scanner;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import Connection.ConnectionFactory;
import Model.Login;
public class daoInter implements dao {
	Scanner sc,sc1;
	SessionFactory f;
	public daoInter()
	{	
		sc= new Scanner (System.in);
			
	}
	 Transaction tx=null;
	 public void signUp(Login l) {
	        try (Session session = ConnectionFactory.getSessionFact().openSession()) {
	            tx = session.beginTransaction();
	            session.save(l);
	            tx.commit();
	        } catch (Exception e) {
	            System.out.println(e);
	            }
	        }

	public Login signIn(int userId, String userPass) {
		 try {
			 Session ses = ConnectionFactory.getSessionFact().openSession();
			 ses.beginTransaction();
			 Login log = ses.get(Login.class, userId);
			 if (log != null && log.getPassWord().equals(userPass)) {
				 return log;
	            } 
	            ses.getTransaction().commit();
		 }catch (Exception e) {
	            e.printStackTrace();
		 }	 return null;
	
	}
	
	public void showDetails(Login l) {
		// TODO Auto-generated method stub
		try
		{
			Session ses = ConnectionFactory.getSessionFact().openSession();
			ses.beginTransaction();
			Query q=ses.createQuery("from Login");
			List <Login> li=q.list();
			for(Login i: li)
			{
				System.out.print("ID: "+i.getUserId());
				System.out.print("Email: "+ i.getEmailId());
				System.out.print("Password: "+i.getPassWord());
				System.out.println();
			}
			ses.close();
			
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			
		}
		

	}
	
	public void removeAccount(int userId) {
		// TODO Auto-generated method stub
		try {
			Session ses = ConnectionFactory.getSessionFact().openSession();
			ses.beginTransaction();
            tx = ses.beginTransaction();
            Login log =  ses.get(Login.class, userId);
            if (log != null) {
                ses.delete(log);
                tx.commit();  
                System.out.println("Account removed successfully.");
            } else {
                System.out.println("Account Not Found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            if (tx != null) {
                tx.rollback(); 
            }
        }
		
	}

     public void updatePassword(int userId, String oldPassword, String newPassword) {
		// TODO Auto-generated method stub try (Session session = Connection.getSessionFact().openSession()) {
    	 try {
    		 Session ses = ConnectionFactory.getSessionFact().openSession();
    		ses.beginTransaction();
    	 tx = ses.beginTransaction();
         Login update = ses.get(Login.class, userId);
         if (update != null && update.getPassWord().equals(oldPassword)) {
             update.setPassWord(newPassword);
             ses.update(update);
             tx.commit();
         } else {
             System.out.println("Invalid User ID or Password. Password update failed.");
         }
     } catch (Exception e) {
         System.out.println(e);
     }
     }
 }






