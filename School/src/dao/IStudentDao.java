package dao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import Connect.DataConnect;
import Model.Student;

public class IStudentDao {
	Connection con;
	PreparedStatement stat;
	public IStudentDao()
	{
		con=DataConnect.getConnect();
		
	}
	public void insert1(Student s) {
		
		
		try
		{
		stat=con.prepareStatement("insert into student values(?,?,?)");
		stat.setInt(1, s.getRollno());
		stat.setString(2, s.getName());
		stat.setDouble(3,s.getFee());
		
		stat.executeUpdate();
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
			
		}
	}

public  void remove(int roll)
	{
	}
}
