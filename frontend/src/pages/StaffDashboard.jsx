import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";


function StaffDashboard() {

    return (

        <div>

            <Navbar />

            <div className="dashboard-container">

                <h1>Staff Dashboard</h1>

                <p>
                    Welcome to the Staff Dashboard
                </p>

                <div className="dashboard-grid">

                    <div className="dashboard-box">

                        <h2>
                            View All Claims
                        </h2>

                        <p>
                            Review all member claims.
                        </p>

                        <Link to="/staff-claims">

                            <button>
                                View Claims
                            </button>

                        </Link>

                    </div>

                    <div className="dashboard-box">

                        <h2>
                            Manage Payments
                        </h2>

                        <p>
                            View and update payment information.
                        </p>

                        <Link to="/staff-payments">

                            <button>
                                Manage Payments
                            </button>

                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default StaffDashboard;