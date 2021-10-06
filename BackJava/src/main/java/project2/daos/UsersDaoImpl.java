package project2.daos;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;

import org.hibernate.Session;
import org.hibernate.Transaction;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.ParameterExpression;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import project2.enums.USER_ROLES;
import project2.models.*;
import project2.util.HibernateUtil;

public class UsersDaoImpl {

		
	public static int version = 0;
	
	public UsersDaoImpl() {
		HibernateUtil.loadSessionFactory();
	}
	
	/*
	 * SELECT User by ID
	 */
	public Users selectUser(Integer id) {
		Session ses = HibernateUtil.getSession();
		//If you are using ses.get(), you must use the id
		Users ersUser = ses.get(Users.class, id);
		//ses.close();
		return ersUser;
	}
	
	/*
	 * SELECT ALL Users
	 */
	public List<Users> selectAll(){
		Session ses = HibernateUtil.getSession();
		//This is how we select all entries in a table with HQL
		//HQL is based off of our Java objects, not the table in the db, 
		//Hibernate translates this HQL into native SQL
		List<Users> usersList = ses.createQuery("from Users", Users.class).list();
		return usersList;
	}
	
	public Users selectByUserRoleNative(USER_ROLES UserRole) {
		
		//We can use native SQL queries
		//You can create more complex queries with plain old SQL query
		//It targets the database table rather than the object
		//It is not recommended because it tightly couples your application to your database
		Session ses = HibernateUtil.getSession();
		List<Users> usersList = ses.createNativeQuery("select * from Users where UserRole= '" + UserRole + "'", Users.class).list();
		return usersList.get(0);
	}
	
	public List<Users> selectByUserRoleHQL(USER_ROLES UserRole) {
		//HQL Hibernate Query Language creates complex queries using a combo of OOP and SQL
		Session ses = HibernateUtil.getSession();
		List<Users> usersList = ses.createQuery("from ERS_USERS where UserRole ='" + UserRole + "'", Users.class).list();
		if(usersList.size() == 0) {
			return null;
		}
		return usersList;
	}
	
	public List<Users> selectByUserRoleID(USER_ROLES UserRole) {
		//Creates complex queries programatically, it does with OOP principles
		Session ses = HibernateUtil.getSession();
		CriteriaBuilder builder = ses.getCriteriaBuilder();
		CriteriaQuery<Users> q = builder.createQuery(Users.class);
		Root<Users> root = q.from(Users.class);
		ParameterExpression<USER_ROLES> p = builder.parameter(USER_ROLES.class);
		q.select(root).where(builder.equal(root.get("UserRole"), p));
		TypedQuery<Users> query = ses.createQuery(q);
		query.setParameter(p, UserRole);
		List<Users> usersList = query.getResultList();
		System.out.println("SELECT USERS BY USER ROLE ID:" + usersList);
		return usersList;
	}
	
	public Users selectByUnamePass(String Uname, String Pass) {
		//Creates complex queries programatically, it does with OOP principles
		Session ses = HibernateUtil.getSession();
		CriteriaBuilder qb = ses.getCriteriaBuilder();
		CriteriaQuery<Users> q = qb.createQuery(Users.class);
		Root<Users> root = q.from(Users.class);
		
		//Constructing list of parameters
	    List<Predicate> predicates = new ArrayList<Predicate>();

	    //Adding predicates in case of parameter not being null
	    predicates.add(qb.equal(root.get("ERS_USERNAME"), Uname));
	    predicates.add(qb.equal(root.get("ERS_PASSWORD"), Pass));
	    //query itself
	    q.select(root).where(predicates.toArray(new Predicate[]{}));
	    //execute query and do something with result
	    
		List<Users> usersList = ses.createQuery(q).getResultList();
		System.out.println("SELECT USER BY USERNAME AND PASSWORD:" +usersList);
		try {
		return usersList.get(0);
		}catch(IndexOutOfBoundsException e) {
			return null;
		}
	}
	
	/*
	 * INSERT
	 */
	public Boolean insert(Users euser) {
		//First we need to open up a session
		Session ses = HibernateUtil.getSession();
		//Then we must start a transaction
		Transaction tx = ses.beginTransaction();
		//Use the session method .save() to write the object to our database
		//Commit the transaction
		try {
			ses.save(euser);
			tx.commit();
			version++;
			return true;
		} catch (Exception e) {
			e.getStackTrace();
			return false;
		} finally {
			ses.close();
		}
	}
	
	/*
	 * UPDATE
	 */
	public Boolean update(Users euser) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		System.out.println("SESSION OPEN?"+ses.isOpen());
		try {
			ses.update(euser);
			tx.commit();
			version++;
			return true;
		} catch (Exception e) {
			e.getStackTrace();
			return false;
		} finally {
			ses.close();
		}
	}
	
	/*
	 * DELETE
	 */
	public Boolean delete(Users euser) {
		Session ses = HibernateUtil.getSession();
		Transaction tx = ses.beginTransaction();
		try {
			ses.delete(euser);
			tx.commit();
			version++;
			return true;
		} catch (Exception e) {
			e.getStackTrace();
			return false;
		} finally {
			ses.close();
		}
	}
	
}
