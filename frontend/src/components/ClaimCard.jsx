import { useState } from "react";
import "./ClaimCard.css";

function ClaimCard({ claim, isStaff = false, onApprove, onDeny }) {

    const claimStatus = claim.status?.toUpperCase();
    const [showDetails, setShowDetails] = useState(false);
   
    // Show the appropriate message based on the claim status
    function getReviewMessage() {

        if (claimStatus === "PENDING") {
            return "Please review the claim information, service details, date, and requested amount before approving or denying this claim.";
        }

        if (claimStatus === "APPROVED") {
            return "This claim was reviewed and approved. The claim is now ready for payment processing.";
        }

        if (claimStatus === "DENIED") {
            return "This claim was reviewed and denied. Please review the claim information and claim status details.";
        }

        return "Review the claim details for more information.";
    }

    // Opens or closes the claim details
    function handleDetails() {
        setShowDetails(!showDetails);
    }

    return (
        <div className="claim-card">

            {/* Claim heading */}
            <h3>Claim #{claim.id}</h3>

            {/* Healthcare provider */}
            <p>
                <strong>Provider:</strong>{" "}
                {claim.providerName}
            </p>

            {/* Type of medical service */}
            <p>
                <strong>Service:</strong>{" "}
                {claim.service}
            </p>

            {/* Claim description */}
            <p>
                <strong>Description:</strong>{" "}
                {claim.description}
            </p>

            {/* Date of service */}
            <p>
                <strong>Date:</strong>{" "}
                {claim.dateOfService}
            </p>

            {/* Claim amount */}
            <p>
                <strong>Amount:</strong>{" "}
                ${claim.amount}
            </p>

            {/* Claim status */}
            <p>
                <strong>Status:</strong>{" "}

                <span
                    className={
                        "status " + claimStatus
                    }
                >
                    {claimStatus}
                </span>
            </p>

            {/* Submitted date */}
            <p>
                <strong>Submitted:</strong>{" "}
                {claim.submittedDate
                    ? claim.submittedDate
                    : "Not available"}
            </p>

            {claimStatus === "DENIED" && (
                        <p className="denial-message"> 
                            <strong>Denial Reason:</strong> 
                              This claim was denied after review. Please contact your healthcare provider or insurance representative for more information.
                        </p>
                    )} 


            {/*STAFF CLAIM REVIEW BUTTONS*/}

            {isStaff && claimStatus === "PENDING" && (
                <div className="claim-review-buttons">

                    {/* Review Details button */}
                    <button
                        type="button"
                        onClick={handleDetails}
                    >
                        {showDetails
                            ? "Hide Review Details"
                            : "Review Details"}
                    </button>

                    {/* Approve button */}
                    <button
                        type="button"
                        onClick={() => onApprove(claim)}
                    >
                        Approve
                    </button>

                    {/* Deny button */}
                    <button
                        type="button"
                        onClick={() => onDeny(claim)}
                    >
                        Deny
                    </button>

                </div>
            )}


            {/*VIEW DETAILS BUTTON FOR APPROVED / DENIED CLAIMS*/}

            {isStaff &&
                claimStatus !== "PENDING" && (
                    <div className="claim-review-buttons">

                        <button
                            type="button"
                            onClick={handleDetails}
                        >
                            {showDetails
                                ? "Hide Details"
                                : "View Details"}
                        </button>

                    </div>
                )}


            {/*REVIEW/VIEW DETAILS SECTION*/}

            {isStaff && showDetails && (
                <div className="claim-review-details">

                    <h4>
                        {claimStatus === "PENDING"
                            ? "Claim Review"
                            : "Claim Details"}
                    </h4>

                    <p>
                        <strong>Claim ID:</strong>{" "}
                        #{claim.id}
                    </p>

                    <p>
                        <strong>Provider:</strong>{" "}
                        {claim.providerName}
                    </p>

                    <p>
                        <strong>Service:</strong>{" "}
                        {claim.service}
                    </p>

                    <p>
                        <strong>Description:</strong>{" "}
                        {claim.description}
                    </p>

                    <p>
                        <strong>Date of Service:</strong>{" "}
                        {claim.dateOfService}
                    </p>

                    <p>
                        <strong>Amount:</strong>{" "}
                        ${claim.amount}
                    </p>

                    <p>
                        <strong>Submitted Date:</strong>{" "}
                        {claim.submittedDate
                            ? claim.submittedDate
                            : "Not available"}
                    </p>
                     
                    <p>
                        <strong>Current Status:</strong>{" "}

                        <span
                            className={
                                "status " + claimStatus
                            }
                        >
                            {claimStatus}
                        </span>
                    </p>

                    {/* Review message */}
                    <div className="review-message">

                        <h5>
                            {claimStatus === "PENDING"
                                ? "Review Message"
                                : claimStatus === "APPROVED"
                                    ? "Approval Message"
                                    : "Denial Message"}
                        </h5>

                        <p>
                            {getReviewMessage()}
                        </p>

                    </div>

                </div>
            )}

        </div>
    );
}

export default ClaimCard;