import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function StaffDashboard() {

    return (
        <div>

            <Navbar />

            <div className="page-container">
                <h1>Staff Dashboard</h1>

                <p>Welcome to the Staff Dashboard</p>

                <h2> Staff Options</h2>

                <div>

                    <Link to="/staff-claims">
                      <button>View All Claims</button>
                    </Link>

                    <Link to="/staff-payments">
                      <button>Manage Payments</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default StaffDashboard;
