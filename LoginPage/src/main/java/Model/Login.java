package Model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table (name = "LoginDetails")
public class Login {
	 @Id
	    private int userId;
	    private String passWord;
	    private String emailId;
	public Login(){
		
	}
	public Login(int userId, String passWord, String emailId) {
		super();
		this.userId = userId;
		this.passWord = passWord;
		this.emailId = emailId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getPassWord() {
		return passWord;
	}
	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	@Override
	public String toString() {
		return "Login [userId=" + userId + ", passWord=" + passWord + ", emailId=" + emailId + "]";
	}
	
}
