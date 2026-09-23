
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const isStaff = user?.role?.toUpperCase() === "STAFF";

    // Hide navigation links on the Register page
    const isRegisterPage = location.pathname === "/register";

    function handleLogout() {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
      <header>
        <nav className="navbar" aria-label="Main navigation">
            <h2>Healthcare Claim Tracker</h2>

            {!isRegisterPage && user && (
            <div className="nav-links">
                {isStaff ? (
                    <>
                        <Link to="/staff-dashboard"> Staff Dashboard </Link>

                        <Link to="/staff-claims"> View All Claims </Link>
                          
                        <Link to="/staff-payments"> Manage Payments </Link>
                    </>
                ) : (
                    <>
                        <Link to="/member-dashboard">Member Dashboard</Link>
                                                
                        <Link to="/claims">Claims</Link>
                         
                        <Link to="/submit-claim">Submit Claim </Link>

                        <Link to="/payment">Payment</Link>
                    </>
                )}

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
           )} 
        </nav>
      </header>    
    );
}

export default Navbar;