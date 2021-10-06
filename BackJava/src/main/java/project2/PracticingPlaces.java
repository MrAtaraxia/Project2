package project2;

import java.io.IOException;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;



public class PracticingPlaces {
	
	public class SimpleEntity{
	    protected String name;

	    public SimpleEntity(String name) {
	        this.name = name;
	    }
	}

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		OkHttpClient client = new OkHttpClient().newBuilder()
		  .build();
		Request request = new Request.Builder()
		  .url("https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=pizza%20near%20par&language=fr&key=")
		  .method("GET", null)
		  .build();
		Gson gson = new Gson();
		Response response = client.newCall(request).execute();
		ResponseBody rb = response.body();
		String fromBody = rb.string();
		SimpleEntity entity = gson.fromJson(fromBody, SimpleEntity.class);
		//System.out.println(response);
		//gson.fromJson(response, );
		System.out.println(fromBody);
		System.out.println(entity);
	}

}
