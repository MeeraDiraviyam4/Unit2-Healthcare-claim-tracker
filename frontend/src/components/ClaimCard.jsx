
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
                <strong>Amount:</strong>{" "} ${claim.amount}
             </p>

             <p>
                <strong>Status:</strong>{" "}

                <span
                    className={
                        "status " +
                        claim.status?.toUpperCase()
                    }
                >
                    {claim.status?.toUpperCase()}
                </span>

            </p>


            <p>
                <strong>Submitted:</strong>{" "}
                {claim.submittedDate
                    ? claim.submittedDate
                    : "Not available"
                }
            </p>

        </div>

    );
}

export default ClaimCard;