package com.hexaware.productlist;
import java.util.List;
import java.util.Scanner;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
public class App 
{
	SessionFactory fac;
	Session ses;
	 Transaction tx;
	
	App()
	{
        fac=new Configuration().configure("hiber.cfg.xml").addAnnotatedClass(Product.class).buildSessionFactory();
    	 ses=fac.openSession();
		
	}
	Scanner sc = new Scanner(System.in);
	void addProduct(int id, String name, double price)
    {
    	 tx=ses.beginTransaction();
         Product p= new Product();
         p.setpId(id);
         p.setName(name);
         p.setPrice(price);	         
         ses.save(p);
         tx.commit();
    }
	
	 void RemoveById(int id)
	    {
	    	 tx=ses.beginTransaction();
	    	 String hql="delete from Product P where P.pId=:pn ";
	    	 Query q =ses.createQuery(hql);
	    	 q.setParameter("pn", id);
	    	 int a=-1;
	    	  q.executeUpdate();
	    	  if(a==-1)
	    	  {
	    		   System.out.println("Removed");
	    	  }
	    	  else
	    	  {
	    		   System.out.println("Not removed");
	    	  }
	    	  tx.commit();	
	    }
	 void UpdateById(int id, String replace)
	    {
	    	tx=ses.beginTransaction();
	    	 String hql="UPDATE Product P set P.Name=:nm where P.pId=:bn ";
	    	 Query q =ses.createQuery(hql);
	    	 q.setParameter("bn", id);
	    	 q.setParameter("nm", replace);
	    	 int a=-1;
	          q.executeUpdate();
	          if(a==-1)
	          {
	       	   System.out.println("Updated");
	          }
	          else
	          {
	       	   System.out.println("Not updated");
	          }
	          tx.commit();
	    }
	 void calculateBill(int id) {
		 tx=ses.beginTransaction();
		 String hql = "SELECT P.price FROM Product P WHERE P.pId= :id";
		 Query q =ses.createQuery(hql);
		 q.setParameter("id", id);
		 Double price = (Double) q.uniqueResult();
		 if (price != null) {
			 System.out.println("Enter quantity: ");
			 int quantity = sc.nextInt();
	            double totalBill = price * quantity;
	            System.out.println("Total bill is : $" + totalBill);
	        } 
		 else {
	            System.out.println("Product with ID not found");
	  
	        }	 
	 }
	
    public static void main( String[] args )
    {
    	Scanner sc = new Scanner(System.in);
    	App s= new App();
    	while(true)
		{
			System.out.println("1. To Add items");
			System.out.println("2. To Remove by id");
			System.out.println("3. To Update by id");
			System.out.println("4. To Calculatee bill");
			System.out.println("5. To Exit");
			int ch= sc.nextInt();
			if(ch==1) {
				System.out.println("Enter id: ");
				int i = sc.nextInt();
				sc.nextLine();
				System.out.println("Enter Name: ");
				String st = sc.nextLine();
				System.out.println("\nEnter Price: ");
				double p = sc.nextDouble();
				s.addProduct(i, st, p);
			}			
			if(ch==2) {
				System.out.println("Enter id: ");
				int i = sc.nextInt();
				s.RemoveById(i);
			}
			else if(ch==3) {
				System.out.println("Enter id: ");
				int i = sc.nextInt();
				sc.nextLine();
				System.out.println("Enter Name: ");
				String st = sc.nextLine();
				s.UpdateById(i,st);
			}
			else if(ch==4) {
				System.out.println("Enter id: ");
				int i = sc.nextInt();
				s.calculateBill(i);
			}
			else if(ch==5)
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
