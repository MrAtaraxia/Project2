package project2;
import java.util.List;

import project2.daos.UsersDaoImpl;
import project2.enums.USER_ROLES;
import project2.models.*;
public class Main {

	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Yep");
		Users use = new Users();
		UsersDaoImpl uDao = new UsersDaoImpl();
		List<Users> uList = uDao.selectAll();
		if(uList.size() < 1) {
			use.setFirstName("Dude");
			use.setLastName("Sweet");
			use.setUsername("DudeSweet");
			use.setEmail("Dude@Sweet");
			use.setUSER_ROLE(USER_ROLES.USER);
			use.setPassword("password");
			System.out.println(use.getFirstName() +" added");
			uDao.insert(use);
		}
	}

}
