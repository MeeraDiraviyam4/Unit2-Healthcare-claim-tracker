
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const isStaff = user?.role?.toUpperCase() === "STAFF";

    function handleLogout() {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <nav className="navbar">
            <h2>Healthcare Claim Tracker</h2>

            <div className="nav-links">
                {isStaff ? (
                    <>
                        <Link to="/staff-dashboard"> Dashboard </Link>

                        <Link to="/staff-claims"> View All Claims </Link>
                          
                        <Link to="/staff-payments"> Manage Payments </Link>
                    </>
                ) : (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                                                
                        <Link to="/claims">Claims</Link>
                         
                        <Link to="/submit-claim">Submit Claim </Link>

                        <Link to="/payment">Payment</Link>
                    </>
                )}

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;