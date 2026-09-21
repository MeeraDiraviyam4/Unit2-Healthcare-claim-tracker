import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {loginUser} from  "../services/api";

function Login() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function validateForm() {
        if (!email.includes("@")) {
            return "Please enter a valid email address.";
        }

        if (password.length < 6) {
            return "Password must contain at least 6 characters.";
        }

        return "";
    }



    async function handleLogin(event) {
        event.preventDefault();

        setError("");

        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }
        
        const user = {
            email: email.trim(),
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
             
             navigate("/member-dashboard");

        } catch (error) {
            setError("Login failed. Please check your email and password");

        }
    }
    
    
    return(
        <main className="login-page">

            <div className="login-card">

                <div className="login-icon">
                  <img
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV5vBiWK1-8zJPL2Iub-JQ8lhXcB4DPeb2pi1H1SEg&s=10"
                       alt="Healthcare Claim Tracker logo"
                       className="login-logo"
                  />  
                </div>

                <h1>Healthcare Claim Tracker</h1>

                <h2>Member Login</h2>

                <p className="login-description">
                    Sign in to manage your healthcare claims.
                </p>

            {error && ( <p className="error-message" role="alert"> {error} </p> )}

            <form onSubmit={handleLogin}>

               <label htmlFor="Email">
                   Email:
               </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                                                             

                        <label htmlFor="Password">
                            Password:
                        </label>

                        <input
                           id="password" 
                           type="password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                           placeholder="Enter your password"
                           required
                        />
                    
                        <button type="submit"> Member Login</button>
                    
            </form>

            <p className="register-text">
                Don't have an account?{" "}
                <Link to="/register">Register here</Link>
            </p>
            <p>
                <Link to="/" className="back home"> Back to Home </Link>
            </p>
            
        </div>
    </main>    
    );

}
export default Login;