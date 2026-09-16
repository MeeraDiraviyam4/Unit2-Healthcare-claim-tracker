import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {registerUser} from  "../services/api";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleRegister(event) {

        event.preventDefault();
        
        const user = {
            name: name,
            email: email,
            password: password  
        };

        try {
                await registerUser(user);

                alert("Registration successful!");

                navigate("/login");

        } catch (error) {

            alert("Registration failed. Please try again.");
          
        }      
    }

    return (
        <div className="register-container">

            <h2>Register</h2>

            <form onSubmit={handleRegister}>

                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />

                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <button type="submit">Register</button>

            </form>

            <p> Already have an account?{"   "} 
                <Link to="/login">
                Login here
                </Link>
            </p>

        </div>
    );

}

export default Register;
