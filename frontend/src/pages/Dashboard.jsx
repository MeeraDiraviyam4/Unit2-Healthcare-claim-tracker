import Navbar from "../components/Navbar";

function Dashboard() {
    return (
        <div>

            <Navbar />

            <div className="dashboard-container">

               <h1>Dashboard</h1>

               <p>Welcome to the Healthcare Claim Tracker!</p>
        
            </div>

              <div className="dashboard-box">
                                
                <h3>Claims</h3>

                <p>View your Healthcare claims.</p>
              
              </div>

               <div className="dashboard-box">
                                
                <h3>Submit a Claim</h3>

                <p>Submit a new healthcare claim.</p>
              
              </div>

              <div className="dashboard-box">
                                
                <h3>Payments</h3>

                <p>View payment information of your claim.</p>
              
              </div>
        </div>

    );
}

export default Dashboard;
