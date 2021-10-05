package project2.enums;

import java.util.HashMap;
import java.util.Map;

public enum USER_ROLES {
	ADMIN("ADMIN"),
	USER("USER"),
	OTHER("OTHER");
	private final String value;
	
	private USER_ROLES(String value) {
		this.value = value;
	}
	
	public String toString() {
		return this.value;
	}
	
    private static final Map<String, USER_ROLES> lookup = new HashMap<>();
    
    static
    {
        for(USER_ROLES sta : USER_ROLES.values())
        {
            lookup.put(sta.toString(), sta);
        }
    }

    public static USER_ROLES get(String url) 
    {
        return lookup.get(url);
    }

}
