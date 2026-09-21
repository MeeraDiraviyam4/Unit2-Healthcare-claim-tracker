import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAllClaims, getPayment, createPayment, updatePayment,deleteClaim} from "../services/api"

function StaffPayments() {

    const [claims, setClaims] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        loadPayments();
    }, []);

    async function loadPayments() {

        try{ //get all claims
            const claims = await getAllClaims();

            //only the approved claims should appear
            const approved = claims.filter(
                (claim) =>
                    claim.status?.toUpperCase() === "APPROVED" ||
                    claim.status?.toUpperCase() ==="DENIED"
            );

            //find payment info for each approved claim
            const claimsWithPayments = await Promise.all(
                approved.map(async (claim) => {

                    //Deniedclaims does not need any payment info
                    if (claim.status?.toUpperCase() === "DENIED") {
                        return {
                            claim: claim,
                            payment:null
                        };
                    }

                    try {
                        const payment = await getPayment(claim.id);

                        return {
                            claim: claim,
                            payment: payment
                        };
                    } catch (error) {

                        //if no payment exists yet
                        return {
                            claim: claim,
                            payment: null
                        };
                    }
                })
            );            

            setClaims(claimsWithPayments);//save the results

        } catch (error) {

            setMessage("could not laod payment information");

        } finally {
            setLoading(false);
        }
        
    }

    async function handleMarkAsPaid(claim, payment) {

        try{ 

             setError("");
             setMessage("");

            //no payment record exists yet
            if (!payment) {

                await createPayment({
                    claimId: claim.id,
                    paymentStatus: "PAID",
                    paymentDate: new Date()
                         .toISOString()
                         .split("T")[0]
                });
            } else {

               // if payment already exists , update it
                      
               await updatePayment(payment.id, {
                    ...payment,
                    paymentStatus: "PAID",
                    paymentDate: new Date().toISOString().split("T")[0]
            });
        }

            setMessage("Payment marked as paid");

             await loadPayments();

        } catch (error) {
            setMessage("could not update payment");

        }
        
    }

    async function handleDelete(claimId) {

        try {
            setError("");
            setMessage("");

            await deleteClaim(claimId);

            setMessage("Denied claim deleted successfylly");

            await loadPayments();

        } catch (error) {

            setError("Could not delete the claim");
        }
        
    }

            
    return (
        <div>

            <Navbar />

            <main className="app-page">

            <div className="page-container">

                <h1>Manage Payments</h1>
                 
                 {message && ( <p className="success-message">{message} </p> )}

                 {error && ( <p className="error-message">{error} </p> )}
 
                {loading && (<p> Loading Payments...</p>)}

                {!loading && claims.length === 0 && (
                    <p className="empty-message"> No approved or denied claims to manage </p>
                )}

                {!loading && claims.map(({claim, payment}) => {

                    const claimStatus = claim.status?.toUpperCase();

                    const isPaid =
                         payment?.paymentStatus?.toUpperCase() ==="PAID";

                    return (
                        <div className="payment-card"
                        key={claim.id}>

                            <h2>Claim #{claim.id}</h2>     
                
                        <p> <strong>Provider::</strong>{" "} {claim.providerName}</p>

                        <p> <strong>Amount:</strong>{" "} ${claim.amount}</p>

                        <p> <strong>Claim Status:</strong>{" "} {claim.status}</p>
                            
                        {/* Approved claim */}
                        {claimStatus === "APPROVED" && (
                            <>
                         
                            <p> <strong>Payment Status:</strong>{" "} 
                                {isPaid
                                   ? "PAID"
                                   : "YET TO PAY"}
                              </p>  

                            <p> <strong>Payment Date:</strong>{" "} 
                                {isPaid && payment?.paymentDate
                                  ? payment.paymentDate
                                  : "Not yet paid"
                                 }   
                             </p>     

                            {/*show button only when the payment us not paid*/}
                            {!isPaid && (
                                 <button onClick={() => handleMarkAsPaid(claim, payment)}>
                                Mark as Paid
                            </button> 
                            )}
                              
                          </>
                        )}  

                        {/*Denied claim */}
                        {claimStatus?.toUpperCase() === "DENIED" && (
                            <button className="delete-button" onClick={() =>
                                handleDelete(claim.id)
                            }>
                                Delete
                            </button>
                        )}

                        </div>
                    );
                })}
             
            </div>

          </main>

        </div>
    );
}

export default StaffPayments;
