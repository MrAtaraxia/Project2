package project2.services;

import java.util.List;

import project2.models.Users;

public interface UserService {
	/*
	 * Verifies the login credentials for the user.
	 */
	public Integer verifyLoginCredentials(String uname, String pass);
	/*
	 * Retrieve a user by userID.
	 */
	public Users retrieveUser(Integer userID);
	/*
	 * Retrieve All Users.
	 */
	public List<Users> retrieveAllUsers();
	/*
	 * Register a new User.
	 */
	public Boolean registerUser(Users user);
	/*
	 * Update a User.
	 */
	public Boolean updateUser(Users user);
	/*
	 * Delete a User.
	 */
	public Boolean deleteUser(Integer userID);
}
