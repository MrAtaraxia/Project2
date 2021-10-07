package project2.models;

import java.io.Serializable;

import project2.enums.USER_ROLES;

public class ExUsers {
	public class Users implements Serializable{


		private static final long serialVersionUID = 1L;

		private Integer UserID;
		private String Username;
		private String FirstName;
		private String LastName;
		private String Email;
		private USER_ROLES UserRole;
		
		
		public Users() {
		}


		public Users(Integer UserID, String Username, String Password, String FirstName, String LastName, String Email, USER_ROLES UserRole) {
			super();
			this.UserID = UserID;
			this.Username = Username;
			this.FirstName = FirstName;
			this.LastName = LastName;
			this.Email = Email;
			this.UserRole = UserRole;
		}

		public Integer getUserID() {
			return UserID;
		}

		public void setUserID(Integer UserID) {
			this.UserID = UserID;
		}

		public String getUsername() {
			return Username;
		}

		public void setUsername(String Username) {
			this.Username = Username;
		}

		public String getFirstName() {
			return FirstName;
		}

		public void setFirstName(String FirstName) {
			this.FirstName = FirstName;
		}

		public String getLastName() {
			return LastName;
		}

		public void setLastName(String LastName) {
			this.LastName = LastName;
		}
		
		public String getEmail() {
			return Email;
		}

		public void setEmail(String Email) {
			this.Email = Email;
		}

		public USER_ROLES getUSER_ROLE() {
			return UserRole;
		}

		public void setUSER_ROLE(USER_ROLES UserRole) {
			this.UserRole = UserRole;
		}

		@Override
		public String toString() {
			return "User [id=" + UserID + ", uname=" + Username + ", fname="
					+ FirstName + ", lname=" + LastName + ", email=" + Email + ", role=" + UserRole +"]";
		}
		
	}
}
