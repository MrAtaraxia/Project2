package project2.services;

import java.util.List;

import project2.daos.UsersDaoImpl;
import project2.models.Users;

public class UserServiceImpl implements UserService{

	private UsersDaoImpl uDao;
	
	public UserServiceImpl() {
		uDao = new UsersDaoImpl();
	}
	
	public UserServiceImpl(UsersDaoImpl uDao) {
		this.uDao = uDao;
	}

	@Override
	// If user Exists returns the user ID
	// Else returns null.
	public Integer verifyLoginCredentials(String uname, String pass) {
		if(uname == null || pass == null) {
			return null;
		}
		Integer toReturn = uDao.selectByUnamePass(uname, pass).getUserID();
		return toReturn;
	}

	@Override
	// If the user exists returns the userObject.
	// Else returns null.
	public Users retrieveUser(Integer userID) {
		if(userID==null) {
			return null;
		}
		return uDao.selectUser(userID);
	}

	@Override
	// If users exists returns a list of the users.
	// Else returns null.
	public List<Users> retrieveAllUsers() {
		List<Users> toReturn = uDao.selectAll();
		return toReturn;
	}

	@Override
	// If user is not registers, registers user and returns true;
	// Else returns false
	public Boolean registerUser(Users user) {
		//TODO - Do we want to do error checking here?
		//TODO - If we did what error checking would we do here?
		return uDao.insert(user);
	}

	@Override
	// If user exists, updates user and returns true;
	// Else returns false
	public Boolean updateUser(Users user) {
		//TODO - Do we want to do error checking here?
		//TODO - If we did what error checking would we do here?
		return uDao.update(user);
	}

	@Override
	// If user with userID exists, deletes user and returns true;
	// Else returns false
	public Boolean deleteUser(Integer userID) {
		Users tempUser = uDao.selectUser(userID);
		if(tempUser== null) {
			return false;
		}else {
			//TODO - Do we want to add more error checking?
			return uDao.delete(tempUser);
		}
	}

	public UsersDaoImpl getuDao() {
		return uDao;
	}

	public void setuDao(UsersDaoImpl uDao) {
		this.uDao = uDao;
	}

}
