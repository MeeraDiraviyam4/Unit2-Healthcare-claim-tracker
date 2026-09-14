function PaymentCard({ payment }) {

    return (
        <div className="payment-card">

            <h3> Payment Information </h3>

            <p> 
                <strong>Payment ID:</strong> {payment.id} 
            </p>

            <p> 
                <strong>Claim ID:</strong> {payment.claimId} 
            </p>

            <p> 
                <strong>Status:</strong> {payment.paymentStatus} 
            </p>

            <p> 
                <strong>Payment Date:</strong> 
                {payment.paymentDate 
                ? payment.paymentDate 
                : "Not paid yet"} 
            </p>

        </div>
    )
}
export default PaymentCard;
