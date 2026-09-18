import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );
    
     return (
        <div>

            <Navbar />

            <div className="dashboard-container">

               <h1> Member Dashboard</h1>

               <p>Welcome, {user?.name}</p>
        
            </div>

              <div className="dashboard-grid">

              <div className="dashboard-box">
                                
                <h2>My Claims</h2>

                <p>View your pending, approved and denied claims.</p>

                <Link to="/claims">
                    
                    <button> View Claims</button>
                
                </Link> 

              </div>

               <div className="dashboard-box">
                                
                <h2>Submit a Claim</h2>

                <p>Submit a new healthcare claim.</p>

                <Link to="/submit-claim">
                
                <button> Submit Claim</button>

                </Link> 
              
              </div>

              <div className="dashboard-box">
                                
                <h2>Payment</h2>

                <p>Check your claim payment status.</p>

                <Link to="/payment">
                
                <button> View Payment</button>

                </Link> 
              
              </div>
        </div>

        </div>

    );
}

export default MemberDashboard;
