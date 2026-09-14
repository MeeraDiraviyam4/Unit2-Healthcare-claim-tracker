function Login() {
    return(
        <div>
            <h1>Healthcare Claim Tracker</h1>
            <h2>Login</h2>
            
            <label> Email:</label>
            <input 
              type="email"  
              placeholder="Enter your email" 
            />
            <br />            
            <label> Password:</label>
            <input 
              type="password"  
              placeholder="Enter your password" 
            />
            <br />
            <button>Login</button>

        </div>
    );
}
export default Login;