import { useState } from "react";
import Navbar from "../components/Navbar";
import PaymentCard from "../components/PaymentCard";
import { getPayment } from "../services/api";

function Payment() {

    const [claimId, setClaimId] = useState("");
    const [payment, setPayment] = useState(null);

    async function handlesearch(event) {
        
        event.preventDefault();

        try {
           
            const data = await getPayment(claimId);

            setPayment(data);

        } catch (error) {

            alert("Could not find payment information.");
        }
    }

    return(
        <div>

            <Navbar />

            <div className="form-container">

                <h1>Payment</h1>

                <form onSubmit={handlesearch}>

                    <label>Claim ID:</label>

                    <input
                      type="number"
                      value={claimId}
                      onChange={(event) => setClaimId(event.target.value)}
                      placeholder="Enter Claim ID"
                      required
                      />

                      <button type="submit">
                        View Payment
                      </button>

                </form>

                {payment && (
                    <PaymentCard payment={payment} />
                )}

            </div>
        </div>
    );
}
export default Payment;
