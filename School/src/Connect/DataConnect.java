package Connect;
import java.sql.Connection;
import java.sql.DriverManager;
public class DataConnect {
	 private static Connection con;
	 public DataConnect() {
		 try
		 {
			Class.forName("com.mysql.jdbc.Driver");  
			con=DriverManager.getConnection(  
	"jdbc:mysql://localhost:3306/School","root","root"); 
			System.out.println("done ");
			 
	 }
		 catch(Exception e)
		 {
			 System.out.println(e.getMessage());
		 }
		 
	}
	public static Connection getConnect()
	 {
		 
		 DataConnect d1= new DataConnect();
		 return(con);
		 
		 
	 }
}
