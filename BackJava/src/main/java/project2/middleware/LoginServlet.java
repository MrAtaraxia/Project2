package project2.middleware;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.google.gson.Gson;

import project2.models.ExUsers;
import project2.models.Users;
import project2.services.UserServiceImpl;


/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	UserServiceImpl uService = null;
      
	public class toLogin{
		private String username;
		private String password;
		private String method;
		toLogin(){
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getMethod() {
			return method;
		}
		public void setMethod(String method) {
			this.method = method;
		}
		
		public String toString() {
			return "Login [username:"+username+" password:"+password+" method:"+method+"]";
		}
	}
	
	public class toSend{
		private Integer UserID;
		private String Username;
		private String FirstName;
		private String LastName;
		private String Email;
		private String UserRole;
		private String nextPage;
		toSend(){
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
		public String getNextPage() {
			return nextPage;
		}
		public void setNextPage(String nextPage) {
			this.nextPage = nextPage;
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
		public String getUserRole() {
			return UserRole;
		}
		public void setUserRole(String userRole) {
			UserRole = userRole;
		}
		

		public String toString() {
			return "toSend [userID:"+this.UserID+" username:"+this.Username+" FirstName:"+this.FirstName+" LastName:"+this.LastName+
					"Email:"+this.Email+" nextPage:"+this.nextPage+"]";
			
		}
	}
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        uService = new UserServiceImpl();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */

    @CrossOrigin(origins = "http://localhost:3000")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("POSTED");
		
    	response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.setHeader("Access-Control-Allow-Credentials", "true");
		StringBuilder sb = new StringBuilder();
	    BufferedReader reader = request.getReader();
	    
	    try{
	        String line;
	        while ((line = reader.readLine()) != null) {
	            sb.append(line).append('\n');
	        }
	    } finally {
	        reader.close();
	    }
		
		PrintWriter out = response.getWriter();
	    System.out.println("SB:"+sb.toString());
		Gson gson = new Gson();
		toLogin myUser = gson.fromJson(sb.toString(), toLogin.class);
	    System.out.println("USER:"+myUser);
	    
		if(myUser!=null && myUser.username!=null && myUser.password != null) {
			System.out.println("Has Username and Password");
			Integer userID = uService.verifyLoginCredentials(myUser.username, myUser.password);
			if(userID!=null && userID > 0) {
				Users cUser = uService.retrieveUser(userID);
				
				String inBetween = gson.toJson(cUser);
				toSend xUser = gson.fromJson(inBetween, toSend.class);
				xUser.nextPage = "home";
				String toSend = gson.toJson(xUser);
				System.out.println(toSend);
				out.append(toSend);
				request.getSession().setAttribute("USERID", ""+userID);
				request.getSession().setAttribute("USER", cUser);
				request.getSession().setAttribute("USERNAME", cUser.getUsername());
				request.getSession().setAttribute("FirstName", cUser.getFirstName());
				request.getSession().setAttribute("LastName", cUser.getLastName());
				request.getSession().setAttribute("Email", cUser.getEmail());
				request.getSession().setAttribute("ROLE", cUser.getUSER_ROLE());
				
				System.out.println("Logged in");
			}
			else {
				System.out.println("Username and Password did not work.");
				
			}
		}else {
			System.out.println("Missing Username and/or Password.");
		}
		
	}

}
