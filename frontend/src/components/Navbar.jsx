import { Link } from "react-router-dom";

function Navbar() {
    return(
       //Main navigation container, styled uding the navbar class
      <nav className="navbar">

        <h2>Healthcare Claim Tracker</h2>
    
    {/* Navigation links to different pages of the application */}
        <div className = "nav-links">
          <a href = "/dashboard">Dashboard</a>
          <a href = "/claims">Claims</a>
          <a href = "/submit-claim">Submit Claim</a>
          <a href = "/payment">Payment</a>
          <a href = "/register">Register</a>
    {/* Sends the user back to the login page */}
          <a href = "/login">Logout</a>
        </div>
        </nav>
    );

}
export default Navbar;