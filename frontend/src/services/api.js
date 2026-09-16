const API_URL = "http://localhost:8080/api";

//Register a new user
export async function registerUser(user) {

    const response = await fetch(`${API_URL}/users/register`, 
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if (!response.ok) {
        throw new Error("Registration Failed");
    }
    
    return  response.json();

}

// Login a user
export async function loginUser(user) {
    const response = await fetch(`${API_URL}/users/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if (!response.ok) {
        throw new Error("Login Failed");
    }
 
    return response.json();

    
    
}
