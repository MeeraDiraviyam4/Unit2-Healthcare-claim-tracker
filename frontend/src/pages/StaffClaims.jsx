import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ClaimCard from "../components/ClaimCard";
import { getAllClaims, getClaimById, updateClaim } from "../services/api";

function StaffClaims() {

    // Store all claims from the backend
    const [claims, setClaims] = useState([]);

    // Store the claim ID entered in the search box
    const [claimId, setClaimId] = useState("");

    // Store one claim when the staff searches for a specific claim
    const [selectedClaim, setSelectedClaim] = useState(null);

    // Store the selected status filter
    const [statusFilter, setStatusFilter] = useState("ALL");

    // Store success and error messages
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    // Load all claims when the page opens
    useEffect(() => {
        loadClaims();
    }, []);


    // Get all claims from the backend
    async function loadClaims() {

        try {

            setError("");

            const data = await getAllClaims();

            setClaims(data);

        } catch (error) {

            setError(
                "Could not load claims. Please try again."
            );
        }
    }


    // Search for one claim
    async function handleSearch(event) {

        event.preventDefault();

        setError("");
        setMessage("");

        // Validate the claim ID
        if (!claimId || Number(claimId) <= 0) {

            setError("Please enter a valid Claim ID.");

            return;
        }

        try {

            const data = await getClaimById(claimId);

            setSelectedClaim(data);

        } catch (error) {

            setSelectedClaim(null);

            setError("Claim not found.");
        }
    }


    // Show all claims again
    function showAllClaims() {

        setSelectedClaim(null);

        setClaimId("");

        setError("");

        setMessage("");
    }


    // Convert status to uppercase
    function getStatus(status) {

        return status?.toUpperCase();
    }


    // Approve a claim
    async function handleApprove(claim) {

        try {

            setError("");
            setMessage("");

            await updateClaim(claim.id, {
                ...claim,
                status: "APPROVED"
            });

            setMessage(
                `Claim #${claim.id} has been approved.`
            );

            // Reload claims so the new status appears
            await loadClaims();

        } catch (error) {

            setError(
                "Could not approve the claim."
            );
        }
    }


    // Deny a claim
    async function handleDeny(claim) {

        try {

            setError("");
            setMessage("");

            await updateClaim(claim.id, {
                ...claim,
                status: "DENIED"
            });

            setMessage(
                `Claim #${claim.id} has been denied.`
            );

            // Reload claims so the new status appears
            await loadClaims();

        } catch (error) {

            setError(
                "Could not deny the claim."
            );
        }
    }


    // Filter claims based on selected status
    const filteredClaims = claims.filter((claim) => {

        if (statusFilter === "ALL") {

            return true;
        }

        return (
            getStatus(claim.status) === statusFilter
        );
    });


    return (

        <div>

            {/* Navigation bar */}
            <Navbar />


            <main className="app-page">

                <div className="claims-container">


                    {/* Page heading */}
                    <header className="page-header">

                        <h1>All Claims</h1>

                        <p>
                            Review and manage member healthcare claims.
                        </p>

                    </header>


                    {/* Success message */}
                    {message && (
                        <p className="success-message">
                            {message}
                        </p>
                    )}


                    {/* Error message */}
                    {error && (
                        <p
                            className="error-message"
                            role="alert"
                        >
                            {error}
                        </p>
                    )}


                    {/* Search section */}
                    <section
                        className="search-box"
                        aria-labelledby="search-heading"
                    >

                        <h2 id="search-heading">
                            Find a Claim
                        </h2>


                        <form onSubmit={handleSearch}>

                            <label htmlFor="claimId">
                                Claim ID:
                            </label>

                            <input
                                id="claimId"
                                type="number"
                                min="1"
                                value={claimId}
                                onChange={(event) =>
                                    setClaimId(event.target.value)
                                }
                                placeholder="Enter Claim ID"
                                required
                            />


                            <button type="submit">
                                Search
                            </button>


                            <button
                                type="button"
                                onClick={showAllClaims}
                            >
                                Show All
                            </button>

                        </form>

                    </section>


                    {/* Selected claim details */}
                    {selectedClaim && (

                        <section
                            className="claim-details"
                            aria-labelledby="claim-details-heading"
                        >

                            <h2 id="claim-details-heading">
                                Claim Details
                            </h2>


                            <p>
                                <strong>Claim ID:</strong>{" "}
                                {selectedClaim.id}
                            </p>


                            <p>
                                <strong>Provider:</strong>{" "}
                                {selectedClaim.providerName}
                            </p>


                            <p>
                                <strong>Service:</strong>{" "}
                                {selectedClaim.service}
                            </p>


                            <p>
                                <strong>Date:</strong>{" "}
                                {selectedClaim.dateOfService}
                            </p>


                            <p>
                                <strong>Amount:</strong>{" "}
                                ${selectedClaim.amount}
                            </p>


                            <p>
                                <strong>Description:</strong>{" "}
                                {selectedClaim.description}
                            </p>


                            <p>
                                <strong>Status:</strong>{" "}

                                <span
                                    className={
                                        "status " +
                                        getStatus(selectedClaim.status)
                                    }
                                >
                                    {getStatus(selectedClaim.status)}
                                </span>

                            </p>


                            <p>
                                <strong>Submitted:</strong>{" "}
                                {selectedClaim.submittedDate
                                    ? selectedClaim.submittedDate
                                    : "Not available"}
                            </p>


                            <button
                                type="button"
                                onClick={showAllClaims}
                            >
                                Back to All Claims
                            </button>

                        </section>

                    )}


                    {/* Claim list */}
                    {!selectedClaim && (

                        <section aria-labelledby="claim-list-heading">


                            <div className="filter-box">

                                <h2 id="claim-list-heading">
                                    Claim List
                                </h2>


                                <label htmlFor="statusFilter">
                                    Filter by Status:
                                </label>


                                <select
                                    id="statusFilter"
                                    value={statusFilter}
                                    onChange={(event) =>
                                        setStatusFilter(
                                            event.target.value
                                        )
                                    }
                                >

                                    <option value="ALL">
                                        All Claims
                                    </option>

                                    <option value="PENDING">
                                        Pending
                                    </option>

                                    <option value="APPROVED">
                                        Approved
                                    </option>

                                    <option value="DENIED">
                                        Denied
                                    </option>

                                </select>

                            </div>


                            {/* Message when there are no claims */}
                            {filteredClaims.length === 0 && (

                                <p className="empty-message">
                                    No claims found for this filter.
                                </p>

                            )}


                            {/* Display claims */}
                            {filteredClaims.map((claim) => (

                                <ClaimCard
                                    key={claim.id}
                                    claim={claim}
                                    isStaff={true}
                                    onApprove={handleApprove}
                                    onDeny={handleDeny}
                                />

                            ))}


                        </section>

                    )}

                </div>

            </main>

        </div>
    );
}


export default StaffClaims;