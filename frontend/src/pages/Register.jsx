import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {registerUser} from  "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function validateForm() {
        if (name.trim().length < 2) {
            return "Name must contain at least 2 characters";
        }

        if (!email.includes("@")) {
            return "Please enter a valid email address.";
        }

        if (password.length < 6) {
            return "Password must contain at least 6 characters.";
        }

        return "";
    }

    //register the user
    async function handleRegister(event) {

        event.preventDefault();

        setError("");
        setMessage("");

        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }
        
        //create the user object
        const user = {
            name: name.trim(),
            email: email.trim(),
            password: password  
        };

        try {
                //send the user info to the backend
                await registerUser(user);
               
                setMessage("Registration successful.Redirecting to login...");

                //go to login page
                setTimeout(() => {
                    navigate("/member-login");
                }, 1000);
                

        } catch (error) {

            setMessage("Registration failed. Please try again.");
          
        }      
    }

    return (

    <div>
       <Navbar />
        <main className="app-page">
        <div className="form-container">

            <h1>Create your Account</h1>

            <p> Register to manage your healthcare claims</p>

            {error && ( <p className="error-message"> {error} </p> )}

            {message && (<p className="success-message"> {message} </p>)}

            <form onSubmit={handleRegister}>

                <label htmlFor="name">
                    Name
                </label>

                <input
                    id="name"   
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                    required
                />

                <label htmlFor="email">
                    Email
                </label>

                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="password">
                    Password
                </label>

                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="At least 6 characters"
                    required
                />

                {/* Register button */}
                <button type="submit">Register</button>

            </form>

            <p> Already have an account?{" "} 
                <Link to="/member-login">
                Login here
                </Link>
            </p>

        </div>
       </main>
      <Footer/> 
     </div>   
    );

}

export default Register;
