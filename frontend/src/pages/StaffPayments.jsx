import Navbar from "../components/Navbar";

function StaffPayments() {

    return (
        <div>

            <Navbar />

            <div className="page-container">

                <h1>Manage Payments</h1>

                <p>Staff can manage claim payments here</p>

                <p> Payment management can be added using the update payment API</p>

            </div>
        </div>
    );
}

export default StaffPayments;
