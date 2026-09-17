
function ClaimCard({ claim }) {
    return(
       
        
        <div className = "claim-card">
            <h3>Claim #{claim.id}</h3>

            {/* Displays the healthcare provider name */}
             <p> 
                <strong>Provider:</strong> {claim.providerName} 
             </p>

             {/* Displays the type of medical service received */}
             <p> 
                <strong>Service:</strong> {claim.service} 
             </p>

             {/* Displays the description */}
             <p> 
                <strong>Service:</strong> {claim.description} 
             </p>

             {/* Displays the date on which the service was provided */}
             <p> 
                <strong>Date:</strong> {claim.dateOfService}
             </p>

             {/* Displays the claim amount */}
             <p> 
                <strong>Amount:</strong> {claim.amount}
             </p>

             {/* Displays the claim status like pending, approved or denied */}
                <p> 
                    <strong>Status:</strong> {claim.status}
                </p>

             {/* Displays the date the claim has been submitted */}
                 <p> 
                    <strong>Service:</strong> {claim.submittedDate} 
                </p>
             
             {/* Displays the userid */}
             <p> 
                <strong>Service:</strong> {claim.userId} 
             </p>

        </div>

    );
}

export default ClaimCard;