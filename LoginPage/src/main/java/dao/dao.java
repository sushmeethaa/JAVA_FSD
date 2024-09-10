package dao;
import Model.Login;
public interface dao {
	void signUp(Login l);
	void showDetails(Login l);
    Login signIn(int userId, String userPass);
    void removeAccount(int userId);
	void updatePassword(int userId, String OldPassword, String newPassword);
}
