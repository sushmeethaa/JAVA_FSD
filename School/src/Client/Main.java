package Client;
import Connect.DataConnect;
import dao.IStudentDao;
import Service.StudentService;
public class Main {
	public static void main(String[] args) {
		StudentService ser = new StudentService();
		ser.addData();
	}

}
