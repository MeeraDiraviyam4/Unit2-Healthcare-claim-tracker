import { Link } from "react-router-dom";

function Home () {

    return(
        <div className="page-container">

            <h1>Healthcare Claim Tracker</h1>

            <h2>Welcome!</h2>

            <p>Please choose an option below</p>

        <div>

           <Link to="/member-login">
              <button>Member Dashboard</button>
           </Link>

        </div>

        <br />

        <div>
        
           <Link to="/staff-login">
              <button>Staff Dashboard</button>
           </Link>

        </div>

        <br />

        <div>

            <Link to="/about">
               <button>About Us</button>
            </Link>

        </div>

    </div>    

    );
}
export default Home;