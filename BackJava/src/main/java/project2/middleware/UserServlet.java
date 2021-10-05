package project2.middleware;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import com.google.gson.reflect.TypeToken;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.google.gson.Gson;

import project2.models.Users;
import project2.services.UserService;
import project2.services.UserServiceImpl;

/**
 * Servlet implementation class UserServlet
 */
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private UserService uService;
	/**
     * @see HttpServlet#HttpServlet()
     */
    public UserServlet() {
        super();
        uService = new UserServiceImpl();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    @CrossOrigin(origins = "http://localhost:3000")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	System.out.println("DO GET START");
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
	    
	    Enumeration<String> eString = request.getParameterNames();
	    while(eString.hasMoreElements()) {
	    	String current = eString.nextElement();
	    	System.out.println("Params:"+current);
	    	System.out.println("Values:"+request.getParameter(current));
	    }
	    System.out.println("Attributes:" );
		Gson gson = new Gson();
	    Users myUser = gson.fromJson(sb.toString(), Users.class);
	    System.out.println(myUser);
	    
		PrintWriter out = response.getWriter();
		if ( myUser != null) {
			//List<Users> uList = uService.retrieveAllUsers();
			Type listType = new TypeToken<ArrayList<Users>>(){}.getType();
			String toSend = gson.toJson(uService.retrieveAllUsers(),listType);
			System.out.println(toSend);
			out.append(toSend);
		} else {
			String toPrint = "Served by: " + "NoOne"  + request.getContextPath(); 
			out.append(toPrint);
		}
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
    @CrossOrigin(origins = "http://localhost:3000")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	System.out.println("DO POST START");
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
	    System.out.println(sb.toString());
		Gson gson = new Gson();
	    Users myUser = gson.fromJson(sb.toString(), Users.class);
	    System.out.println(myUser);
	    
		PrintWriter out = response.getWriter();
		if ( myUser != null) {
			//List<Users> uList = uService.retrieveAllUsers();
			Type listType = new TypeToken<ArrayList<Users>>(){}.getType();
			String toSend = gson.toJson(uService.retrieveAllUsers(),listType);
			System.out.println(toSend);
			out.append(toSend);
		} else {
			String toPrint = "Served by: " + "NoOne"  + request.getContextPath(); 
			out.append(toPrint);
		}
	}
    
    @CrossOrigin(origins = "http://localhost:3000")
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	System.out.println("DO PUT START");
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
	    System.out.println(sb.toString());
		Gson gson = new Gson();
	    Users myUser = gson.fromJson(sb.toString(), Users.class);
	    System.out.println(myUser);
	    
		PrintWriter out = response.getWriter();
		if ( myUser != null) {
			//List<Users> uList = uService.retrieveAllUsers();
			Type listType = new TypeToken<ArrayList<Users>>(){}.getType();
			String toSend = gson.toJson(uService.retrieveAllUsers(),listType);
			System.out.println(toSend);
			out.append(toSend);
		} else {
			String toPrint = "Served by: " + "NoOne"  + request.getContextPath(); 
			out.append(toPrint);
		}
	}
    
	public UserService getuService() {
		return uService;
	}

	public void setuService(UserService uService) {
		this.uService = uService;
	}

}
