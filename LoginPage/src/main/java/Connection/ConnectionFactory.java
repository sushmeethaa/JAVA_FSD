package Connection;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import Model.Login;
public class ConnectionFactory {

	private static SessionFactory fac;
	public ConnectionFactory()
	{
		fac=new Configuration().configure("hibernate_cfg.xml").addAnnotatedClass(Login.class).buildSessionFactory();
		
	}
	
	public static SessionFactory getSessionFact()
	{
		ConnectionFactory Conn = new ConnectionFactory();
		return fac;
	}
	
}

