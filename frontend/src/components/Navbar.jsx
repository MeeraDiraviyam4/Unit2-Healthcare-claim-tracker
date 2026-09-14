import { Link } from "react-router-dom";

function Navbar() {
    return(
       //Main navigation container, styled uding the navbar class
      <nav className="navbar">

        <h2>Healthcare Claim Tracker</h2>
    
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/claims">Claims</Link>
          <Link to="/submit-claim">Submit Claim</Link>
          <Link to="/payment">Payment</Link>
          <Link to="/register">Register</Link>
          <Link to="/">Logout</Link>
        </div>
        </nav>
    );

}
export default Navbar;