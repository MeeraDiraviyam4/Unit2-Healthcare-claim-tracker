import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {loginUser} from  "../services/api";

function Login() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
        
        const user = {
            email: email,
            password: password  
        };

        try {
             const loggedInUser = await loginUser(user);
             
             // Save the logged-in user's information
            // in localStorage
             localStorage.setItem(
                "user",
                JSON.stringify(loggedInUser)
             );
             alert("Login successful!");

             navigate("/member-dashboard");

        } catch (error) {
            alert("Login failed. Please check your email and password");

        }
    }
    
    
    return(
        <div className="form-container">

            <h1>Healthcare Claim Tracker</h1>

            <h2>Member Login</h2>

            <form onSubmit={handleLogin}>

               <label>Email:</label>

                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                                                             

                        <label>Password:</label>

                        <input
                           type="password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                           placeholder="Enter your password"
                           required
                        />
                    
                        <button type="submit"> Member Login</button>
                    
            </form>

            <p>
                Don't have an account?{" "}
                <Link to="/register">Register here</Link>
            </p>
            <p>
                <Link to="/" className="back home">Back to Home </Link>
            </p>
            
        </div>
    );

}
export default Login;