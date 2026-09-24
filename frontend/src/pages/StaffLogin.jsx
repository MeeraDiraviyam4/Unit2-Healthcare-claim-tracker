import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Login.css";

function StaffLogin() {

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
             
             navigate("/staff-dashboard");

        } catch (error) {
            setError("Login failed. Please check your email and password");

        }
    }
        
    return(
      <div>  
       <main className="login-page">

            <div className="login-card">

                <div className="login-icon">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV5vBiWK1-8zJPL2Iub-JQ8lhXcB4DPeb2pi1H1SEg&s=10"
                        alt="Healthcare icon"
                        className="login-logo"
                    />
                </div>

            <h1>Healthcare Claim Tracker</h1>

            <h2>Staff Login</h2>

             {error && ( <p className="error-message" role="alert"> {error} </p> )}

            <form onSubmit={handleLogin}>

                <div>
                    <label htmlFor="staffEmail">
                       Email:
                    </label>

                    <input
                        id="staffEmail"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    </div>

                    <div>   

                        <label htmlFor="staffPassword">
                            Password:
                        </label>

                        <input
                           id="staffPassword"
                           type="password"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                           placeholder="Enter your password"
                           required
                        />
                    </div>

                    <div>

                        <button type="submit">Staff Login</button>
                        <p>

                         <Link to="/" className="back home">Back to Home </Link>
                        </p>
                    </div>
            </form>

        </div>
    </main>
   <Footer />
  </div> 
 );

}
export default StaffLogin;