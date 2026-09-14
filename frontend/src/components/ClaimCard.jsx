
function ClaimCard({ claim }) {
    return(
       
        
        <div className = "claim-card">
            <h3>Claim #{claim.id}</h3>

            {/* Displays the healthcare provider name */}
             <p> 
                <strong>Provider:</strong> {claim.provider} 
             </p>

             {/* Displays the type of medical service received */}
             <p> 
                <strong>Service:</strong> {claim.service} 
             </p>

             {/* Displays the date on which the service was provided */}
             <p> 
                <strong>Date:</strong> {claim.serviceDate}
             </p>

             {/* Displays the claim amount */}
             <p> 
                <strong>Amount:</strong> {claim.amount}
             </p>

             {/* Displays the claim status like pending, approved or denied */}
                <p> 
                    <strong>Status:</strong> {claim.status}
                </p>

        </div>

    );
}

export default ClaimCard;