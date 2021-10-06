package project2.middleware;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.reflect.TypeToken;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
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
//    @Override
//    @CrossOrigin(origins = "http://localhost:3000")
//    public void service(ServletRequest req, ServletResponse res) throws ServletException, IOException {
//    	res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
//    	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//    	res.setHeader("Access-Control-Allow-Credentials", "true");
//		System.out.println("IN SERVICE");
//	    	super.service(req, res);
//	    res.
//    }
    
	/**
	 * SELECT
	 */
    @Override
    @CrossOrigin(origins = "http://localhost:3000")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	System.out.println("DO GET START");
    	response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
    	response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.setHeader("Access-Control-Allow-Credentials", "true");
	    
	    Map<String, String> myMap = new HashMap<>();
	    Enumeration<String> eString = request.getParameterNames();
	    while(eString.hasMoreElements()) {
	    	String current = eString.nextElement();
	    	System.out.println("Params:"+current);
	    	System.out.println("Values:"+request.getParameter(current));
	    	myMap.put(current, ((Object)request.getParameter(current)).toString());
	    }
	    System.out.println("Attributes:" );
	    System.out.println("ID:"+request.getParameter("id"));
		Gson gson = new Gson();
		Type listType = new TypeToken<ArrayList<Users>>(){}.getType();
		String toSend = null;
		PrintWriter out = response.getWriter();
		/*
		 *  IF id is specified.
		 *  return user with that id.
		 *  IF user does not exit.
		 *  return null;
		 */
		if ( myMap.get("id") != null) {
			toSend = gson.toJson(uService.retrieveUser(Integer.parseInt(myMap.get("id"))),Users.class);
			System.out.println("DO GET SENDING: "+myMap.get("id"));
		/*
		 *  ELSE if no id specified
		 *  return all users.
		 */
		} else {
			toSend = gson.toJson(uService.retrieveAllUsers(),listType);
			System.out.println("DO GET SENDING ALL");
		}
		System.out.println(toSend);
		out.append(toSend);
    }

//	/**
//	 * INSERT
//	 */
//    @Override
//    @CrossOrigin(origins = "http://localhost:3000")
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//    	System.out.println("DO POST START");
//    	response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
//    	response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//		response.setHeader("Access-Control-Allow-Credentials", "true");
//			
//		StringBuilder sb = new StringBuilder();
//	    BufferedReader reader = request.getReader();
//	    
//	    try{
//	        String line;
//	        while ((line = reader.readLine()) != null) {
//	            sb.append(line).append('\n');
//	        }
//	    } finally {
//	        reader.close();
//	    }
//		PrintWriter out = response.getWriter();
//	    System.out.println(sb.toString());
//		Gson gson = new Gson();
//	    Users myUser = gson.fromJson(sb.toString(), Users.class);
//	    if(myUser.getEmail()!=null && myUser.getFirstName()!=null &&
//	    		myUser.getLastName()!=null && myUser.getUsername()!=null &&
//	    		myUser.getPassword()!=null) {
//	    	try {
//	    	if(uService.registerUser(myUser)) {
//	    		String toSend = "User Created";
//	    		System.out.println(toSend);
//	    		out.append(toSend);
//	    	} else {
//	    		String toSend = "User Not Created";
//	    		System.out.println(toSend);
//	    		out.append(toSend);
//	    	}
//	    	} catch(Exception e) {
//	    		String toSend = "User already exists";
//	    		System.out.println(toSend+e);
//	    		out.append(toSend);
//	    	}
//	    } else {
//    		String toSend = "Missing required paramaters.";
//    		System.out.println(toSend);
//    		out.append(toSend);
//	    	
//	    }
//		System.out.println("DO POST ENDING");
//	}
    
    /*
     * UPDATE
     */
    @Override
    @CrossOrigin(origins = "http://localhost:3000")
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    	System.out.println("DO PUT START");
    	response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
    	response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		response.setHeader("Access-Control-Allow-Credentials", "true");
		//super.doPut(request, response);
    	response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
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
	    System.out.println(sb.toString());
		Gson gson = new Gson();
	    Users myUser = gson.fromJson(sb.toString(), Users.class);
	    if(myUser.getEmail()!=null && myUser.getFirstName()!=null &&
	    		myUser.getLastName()!=null && myUser.getUsername()!=null &&
	    		myUser.getPassword()!=null) {
	    	try {
		    	if(uService.updateUser(myUser)) {
		    		String toSend = "User Updated";
		    		System.out.println(toSend);
		    		out.append(toSend);
		    	} else {
		    		String toSend = "User Not Updated";
		    		System.out.println(toSend);
		    		out.append(toSend);
		    	}
	    	} catch(Exception e) {
	    		String toSend = "User does not exists";
	    		System.out.println(toSend+e);
	    		out.append(toSend);
	    	}
	    } else {
    		String toSend = "Missing required paramaters.";
    		System.out.println(toSend);
    		out.append(toSend);
	    }
		System.out.println("DO PUT ENDING");
	}
    
    /*
     * DELETE
     */
    @CrossOrigin(origins = "http://localhost:3000")
	@Override
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doDelete(request, response);
    	System.out.println("DO DELETE START");
    	response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, PATCH, DELETE");
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
