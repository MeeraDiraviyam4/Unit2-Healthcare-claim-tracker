import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getClaimsByUser, getPayment } from "../services/api";
import Footer from "../components/Footer";

function Payment() {

    const [claims, setClaims] = useState([]);
    const [payments, setPayments] = useState({});
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        loadPaymentInformation();
    }, []);

    async function loadPaymentInformation() {
        
        try {
           // get the loggedin user
            const user = JSON.parse(localStorage.getItem("user"));

            if (!user) {
                setMessage("Please login first");
                return;
            }

            //get only the loggedin user's claims
            const userClaims = await getClaimsByUser(user.id);
            setClaims(userClaims);

            //get payment information for each claim
            const paymentData = {};

            for (const claim of userClaims) {

                try{
                    const payment = await getPayment(claim.id);
                       paymentData[claim.id] = payment;

                } catch (error) {
                    paymentData[claim.id] = null;
                }
            }

            setPayments(paymentData);

        } catch (error) {
            setMessage("could not load payment information");

        } finally {
            setLoading(false);
        }
    }

    return(
        <div>

            <Navbar />

            <main className="app-page">

            <div className="page-container">

                <h1>Payment Status</h1>

                {message && ( <p className="error-message"> {message} </p> )}

                {loading && (
                    <p>Loading payment information...</p>
                )}

                {!loading && claims.length === 0 && (
                    <p>You have no claims yet</p>
                )}

                {!loading && claims.map((claim) => {
                    const payment = payments[claim.id];
                    
                    return (
                        <div className="payment-card" key={claim.id}>

                            <h2>Claim #{claim.id}</h2>

                            <p> <strong>Provider:</strong>{" "}
                                {claim.providerName}
                            </p>

                            <p> <strong>Claim Amount:</strong>{" "}
                                {claim.amount}
                            </p>

                            <p> <strong>Claim Status:</strong>{" "}
                                {claim.status?.toUpperCase()}
                            </p>

                            <p> <strong>Payment Status:</strong>{" "}
                                {payment
                                    ? payment.paymentStatus
                                    : claim.status?.toUpperCase() === "APPROVED"
                                        ? "Payment not yet created"
                                        : "No payment"
                                }
                            </p>

                            <p> <strong>Payment Date:</strong>{" "}
                                 {payment?.paymentDate
                                    ? payment.paymentDate
                                     : "Not yet Paid"
                                  }
                            </p>
                        </div>
                    );   
                })}   
            </div>
            </main>
          <Footer />  
        </div>    
    );

}
export default Payment;
