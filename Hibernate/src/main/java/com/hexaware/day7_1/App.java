package com.hexaware.day7_1; 
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;
 
 
public class App {
	SessionFactory fac;
	Session ses;
	 Transaction tx;
	
	App()
	{
        fac=new Configuration().configure("hiber.cfg.xml").addAnnotatedClass(Book.class).buildSessionFactory();
    	 ses=fac.openSession();
		
	}
	
	    void insertBook()
	    {
	    	 tx=ses.beginTransaction();
	         Book b= new Book();
	         b.setbNo(102);
	         b.setName("C");
	         b.setPrice(2000.9);	         
	         ses.save(b);
	         tx.commit();
	    }
	    void RemoveByBNo()
	    {
	    	tx=ses.beginTransaction();
	    	 String hql="delete from Book B where B.bNo=:bn ";
	    	 Query q =ses.createQuery(hql);
	    	 q.setParameter("bn", 102);
	    	 int a=-1;
	    	  q.executeUpdate();
	    	  if(a==-1)
	    	  {
	    		   System.out.println("Removed");
	    	  }
	    	  else
	    	  {
	    		   System.out.println("not  remove");
	    	  }
	    	  tx.commit();	
	    }
	    void UpdateBkPriceByBNo()
	    {
	    	tx=ses.beginTransaction();
	    	 String hql="UPDATE Book B set B.Name=:nm where B.bNo=:bn ";
	    	 Query q =ses.createQuery(hql);
	    	
	    	 q.setParameter("bn", 102);
	    	 q.setParameter("nm", "Express");

             int a=-1;
             q.executeUpdate();
             if(a==-1)
             {
          	   System.out.println("update");
             }
             else
             {
          	   System.out.println("name updated");
             }
             tx.commit();
	    }
	    
	    void searchBookByBNo() {
	    	int bn=103;
	    	 tx=ses.beginTransaction();
	         Book book = ses.find(Book.class,bn);
	        
	        if (book != null) {
	        	System.out.println(book.getName());
	        } else {
	            System.out.println("Not Found");
	        }
	    }
	    void showAll()
	    {	    	
	    	 tx=ses.beginTransaction();
	    	 Query q=ses.createQuery("from Book ");
	    	 List <Book>books= q.list();
	    	
	    	 for(Book b : books)
	    	 {
	    		 System.out.println(b.toString());
	    		
	    	 }
	    	
	    	
 
	    }
	    void showData()
	    {
	    	 tx=ses.beginTransaction();
	    	 String hql="from Book B where B.price>:p ";
	    	 Query q =ses.createQuery(hql,Book.class);
	    	 q.setParameter("p", 100.0);
	    	 List <Book> books=q.list();
	    	
	    	 System.out.println(books);
	    }
    public static void main(String[] args) {
    	App app= new App();
    	//app.insertBook();
    	//app.RemoveByBNo();
    	app.insertBook();
    	//app.insertBook();
    	app.UpdateBkPriceByBNo();
    	app.RemoveByBNo();
    	//app.searchBookByBNo();
    	//app.showAll();
    	//app.showData();
    	System.out.println("Welcome");
 
    }
}
 
 